import React from 'react'
import Flex from 'flexbox-react'
import MaterialUiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MenuIcon from '@material-ui/icons/Menu'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useAppTitle } from 'hooks/redux/movie-night/use-app-title/useAppTitle'
import { Title } from './styled'


export function AppBar () {
  const { appTitle } = useAppTitle()
  const { history } = useRouter()

  const goBack = () => {
    history.goBack()
  }

  return (
    <MaterialUiAppBar position="static">
      <Toolbar>
        { appTitle !== 'Pop Movies' &&
          <IconButton color="inherit" aria-label="Menu" onClick={goBack}>
            <ArrowBackIcon />
          </IconButton>
        }
        <Flex flexGrow={1}><Title>{appTitle}</Title></Flex>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </MaterialUiAppBar>
  )
}
