import { renderHook } from 'react-hooks-testing-library'


// testdoubles go here
const get = td.func()
const useHttpDouble = {
  useHttp: () => {
    return {
      get
    }
  }
}
td.replace('hooks/core/use-http/useHttp', useHttpDouble)

// always REQUIRE in module under test LAST so it gets the testdoubles
const { useMovieDbApi } = require('./useMovieDbApi')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('fetchMovies returns expected movies', async () => {
  const expectedMovies = [{ title: 'a' }, { title: 'b' }]

  // render the hook in an unseen component
  const { result } = renderHook(() => useMovieDbApi())

  td.when(get('movie/popular', { useOverlay: false }))
    .thenResolve(expectedMovies)

  const actual = await result.current.fetchMovies()

  // assert that our intial value is as expected
  expect(actual).toEqual(expectedMovies)
})

test('fetchById returns expected movie', async () => {
  const expectedMovie = { title: 'a' }
  const id = 987987

  // render the hook in an unseen component
  const { result } = renderHook(() => useMovieDbApi())

  td.when(get(`movie/${id}`, { useOverlay: false }))
    .thenResolve(expectedMovie)

  const actual = await result.current.fetchById(id)

  // assert that our intial value is as expected
  expect(actual).toEqual(expectedMovie)
})
