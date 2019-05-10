/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Spinner } from 'components'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useMovieDbApi } from 'hooks/use-movie-db-api/useMovieDbApi'
import { useAppTitle } from 'hooks/redux/movie-night/use-app-title/useAppTitle'
import { FlexContainer } from './styled'


export default function Home () {
  const [movies, setMovies] = useState()
  const { resetAppTitle } = useAppTitle()
  const { fetchMovies } = useMovieDbApi()
  const { history } = useRouter()

  const loadMovies = async () => {
    const data = await fetchMovies()
    setMovies(data.results)
  }

  useEffect(() => {
    resetAppTitle()
    loadMovies()
  }, [])

  const handleClick = (id) => {
    history.push(`/details/${id}`)
  }

  const renderMovies = () => {
    return movies.map(({ id, title, poster_path}) => (
      <Grid item xs={6} key={id} onClick={() => handleClick(id)}>
        <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
      </Grid>
    ))
  }

  if (!movies) {
    return <Spinner />
  }

  return (
    <FlexContainer>
      <Grid container spacing={0}>
        {renderMovies()}
      </Grid>
    </FlexContainer>
  )
}
