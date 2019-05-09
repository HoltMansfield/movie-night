import { useSubstate } from 'use-substate'
import * as actions from 'redux/actions'


export const useAppTitle = () => {
  const [appTitle, dispatch] = useSubstate(state => {
    return state.movieNight.appTitle
  })

  const setAppTitle = (newAppTitle) => {
    dispatch(actions.movieNight.setAppTitle(newAppTitle))
  }

  const resetAppTitle = () => {
    dispatch(actions.movieNight.setAppTitle('Pop Movies'))
  }

  return {
    appTitle,
    setAppTitle,
    resetAppTitle
  }
}
