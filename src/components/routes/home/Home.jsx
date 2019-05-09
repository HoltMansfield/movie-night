/* eslint react-hooks/exhaustive-deps: "off" */
import React, { useEffect } from 'react'
import Flex from 'flexbox-react'
import { useHomeLogic } from './useHomeLogic'
import { useAppTitle } from 'hooks/redux/movie-night/use-app-title/useAppTitle'
// import { } from './styled'


export default function Home () {
  const { resetAppTitle } = useAppTitle()
  const { loadMovies } = useHomeLogic()

  useEffect(() => {
    resetAppTitle()
    loadMovies()
  }, [])

  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Flex>Empty component generated for: Home</Flex>
      <Flex>Displaying value: { someValue } from companion hook</Flex>
    </Flex>
  )
}
