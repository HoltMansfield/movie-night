import React from 'react'
import Flex from 'flexbox-react'
import { useDetailsLogic } from './useDetailsLogic'
// import { } from './styled'


export default function Details () {
  const { someValue } = useDetailsLogic()

  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Flex>Empty component generated for: Details</Flex>
      <Flex>Displaying value: { someValue } from companion hook</Flex>
    </Flex>
  )
}
