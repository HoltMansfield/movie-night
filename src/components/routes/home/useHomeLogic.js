import { useHttp } from 'hooks/core/use-http/useHttp.js'

export const useHomeLogic = () => {
  const { get } = useHttp()
  
  const loadMovies = () => {
    return ''
  }

  return {
    loadMovies
  }
}
