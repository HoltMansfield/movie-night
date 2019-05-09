/* eslint default-case: "off" */
import produce from 'immer'


const initialState = {
  appTitle: 'Pop Movies'
}

const movieNight = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case 'SET_APP_TITLE':
        draft.appTitle = action.appTitle
        return
    }
  })

export { movieNight, initialState }
