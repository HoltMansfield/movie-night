import { useHttp } from 'hooks/core/use-http/useHttp.js'

export const useHomeLogic = () => {
  const { get } = useHttp()

  const fetchMovies = () => {
    return get('movie/popular', { useOverlay: false })
  }

  return {
    fetchMovies
  }
}
