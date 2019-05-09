import React from 'react'
import Flex from 'flexbox-react'
import { AppBar } from './app-bar/AppBar'
import { RouteTable } from '../routes/RouteTable'


export function App () {
  return (
    <Flex flexDirection="column" flexGrow={1}>
      <Flex>
        <AppBar />
      </Flex>
      <Flex>
        <RouteTable />
      </Flex>
    </Flex>
  )
}
