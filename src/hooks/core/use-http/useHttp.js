import axios from 'axios'
import { getConfig } from 'config/clear-text'
import { getSecureConfig } from 'config/secure'
import { useOverlay } from 'hooks/core/use-overlay/useOverlay'
import { useSpinner } from 'hooks/core/use-spinner/useSpinner'
import { useHandleError } from 'hooks/core/use-handle-error/useHandleError'


const setDefaults = (options) => {
  if(!options) {
    options = {}
  }

  if(!options.hasOwnProperty('useOverlay')) {
    // default to true
    options.useOverlay = true
  }

  if(!options.hasOwnProperty('errorInstance')) {
    // default to generic api error
    options.errorInstance = {
      messageId: 'api.genericError',
      defaultMessage: 'An API error has occurred.  Please try again.'
    }
  }

  return options
}

export const useHttp = (url, _options) => {
  const { setShowOverlay } = useOverlay()
  const { setShowSpinner } = useSpinner()
  const { handleError } = useHandleError()
  const config = getConfig()
  const secureConfig = getSecureConfig()

  const handleHttpError = (error, data, options) => {
    const errorInstance = {
      ...options.errorInstance,
      error,
      data
    }
    handleError(errorInstance)
  }

  const showSpinnerAndOverlay = (options) => {
    if(options.useOverlay) {
      setShowOverlay(true)
      setShowSpinner(true)
    }
  }

  const hideSpinnerAndOverlay = (options) => {
    if(options.useOverlay) {
      setTimeout(() => {
        setShowOverlay(false)
        setShowSpinner(false)
      }, 300)
    }
  }

  const appendApiKey = () => {
    return `?api_key=${secureConfig.apiKey}`
  }

  const get = async (url, _options) => {
    const options = setDefaults(_options)
    showSpinnerAndOverlay(options)

    try {
      const result = await axios.get(`${config.apiUrl}/${url}${appendApiKey()}`)
      hideSpinnerAndOverlay(options)
      return result.data
    } catch (error) {
      const data = {
        source: 'useHttp.get',
        url: `${config.apiUrl}/${url}`
      }
      handleHttpError(error, data, options)

      return Promise.reject(error)
    }
  }

  const put = async (url, requestData, _options) => {
    const options = setDefaults(_options)
    showSpinnerAndOverlay(options)

    try {
      const result = await axios.put(`${config.apiUrl}/${url}${appendApiKey()}`, requestData)
      hideSpinnerAndOverlay(options)
      return result.data
    } catch (error) {
      const data = {
        source: 'useHttp.put',
        url: `${config.apiUrl}/${url}`,
        requestData
      }
      handleHttpError(error, data, options)

      return Promise.reject(error)
    }
  }

  const post = async (url, requestData, _options) => {
    const options = setDefaults(_options)
    showSpinnerAndOverlay(options)

    try {
      const result = await axios.post(`${config.apiUrl}/${url}${appendApiKey()}`, requestData)
      hideSpinnerAndOverlay(options)
      return result.data
    } catch (error) {
      const data = {
        source: 'useHttp.post',
        url: `${config.apiUrl}/${url}`,
        requestData
      }
      handleHttpError(error, data, options)

      return Promise.reject(error)
    }
  }

  const destroy = async (url, _options) => {
    const options = setDefaults(_options)
    showSpinnerAndOverlay(options)

    try {
      const result = await axios.delete(`${config.apiUrl}/${url}${appendApiKey()}`)
      hideSpinnerAndOverlay(options)
      return result.data
    } catch (error) {
      const data = {
        source: 'useHttp.delete',
        url: `${config.apiUrl}/${url}`
      }
      handleHttpError(error, data, options)

      return Promise.reject(error)
    }
  }

  return {
    get,
    put,
    post,
    destroy
  }
}
