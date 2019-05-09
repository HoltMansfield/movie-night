import { movieNight, initialState } from './movie-night'
import * as actions from '../../actions'

test('should handle initial state', () => {
  expect(movieNight(initialState, {})).toEqual(initialState)
})

test('should set appTitle to new value', () => {
  const newValue = 'new-value'
  const expectedState = {
    ...initialState,
    appTitle: newValue
  }
  // create an action
  const action = actions.movieNight.setAppTitle(newValue)
  // test the reducer with an action and an inital state
  const updatedState = movieNight(initialState, action)
  // confirm that state was correctly updated
  expect(updatedState).toEqual(expectedState)
})
