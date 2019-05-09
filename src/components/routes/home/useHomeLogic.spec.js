import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useHomeLogic } = require('./useHomeLogic')


afterEach(() => {
  //td.reset() // resets all test doubles
  
})

test('returns expected intial value', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useHomeLogic())

  // assert that our intial value is as expected
  expect(result.current.someValue).toEqual(1)
})
