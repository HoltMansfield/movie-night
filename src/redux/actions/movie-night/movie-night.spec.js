import * as actions from '../'


test('should create the expected setAppTitle action', () => {
  const expectedValue = {}
  const expectedAction = {
    type: 'SET_APP_TITLE',
    appTitle: expectedValue
  }
  // execute our action creator
  const action = actions.movieNight.setAppTitle(expectedValue)

  // assert that our action creator creates the expected action
  expect(action).toEqual(expectedAction)
})
