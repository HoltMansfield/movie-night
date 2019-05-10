/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useEffect, useState } from 'react'
import Flex from 'flexbox-react'
import { Spinner } from 'components'
import { useMovieDbApi } from 'hooks/use-movie-db-api/useMovieDbApi'
import { useAppTitle } from 'hooks/redux/movie-night/use-app-title/useAppTitle'
// import { } from './styled'


export default function Details ({ match }) {
  const [movie, setMovie] = useState()
  const { fetchById } = useMovieDbApi()
  const { setAppTitle } = useAppTitle()

  const loadMovie = async () => {
    const data = await fetchById(match.params.id)
    setMovie(data)
  }

  useEffect(() => {
    setAppTitle('Movie Detail')
    loadMovie()
  }, [])

  if (!movie) {
    return <Spinner />
  }

  return (
    <Flex flexDirection="column" flexGrow={1}>

    </Flex>
  )
}
