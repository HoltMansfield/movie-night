import React from 'react'
import Flex from 'flexbox-react'
import MaterialUiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useAppTitle } from 'hooks/redux/movie-night/use-app-title/useAppTitle'
import { Title } from './styled'


export function AppBar () {
  const { appTitle } = useAppTitle()

  return (
    <MaterialUiAppBar position="static">
      <Toolbar>
        <Flex flexGrow={1}><Title>{appTitle}</Title></Flex>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MaterialUiAppBar>
  )
}
