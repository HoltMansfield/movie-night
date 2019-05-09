import { combineReducers } from 'redux'

// reducers from this project
import { foundation } from './foundation/foundation'
import { movieNight } from './movie-night/movie-night'
// end of reducers from this project


const rootReducer = combineReducers({
	foundation,
	movieNight,
})

export { rootReducer }
