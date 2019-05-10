import { useHttp } from 'hooks/core/use-http/useHttp'


export const useMovieDbApi = () => {
  const { get } = useHttp()

  const fetchMovies = () => {
    return get('movie/popular', { useOverlay: false })
  }

  const fetchById = (id) => {
    return get(`movie/${id}`, { useOverlay: false })
  }

  return {
    fetchMovies,
    fetchById
  }
}
