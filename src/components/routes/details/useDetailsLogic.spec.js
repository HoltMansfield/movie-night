import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useDetailsLogic } = require('./useDetailsLogic')


afterEach(() => {
  //td.reset() // resets all test doubles

})

xit('returns expected intial value', () => {
  // render the hook in an unseen component
  const { result } = renderHook(() => useDetailsLogic())

  // assert that our intial value is as expected
  expect(result.current.someValue).toEqual(1)
})
