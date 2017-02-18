import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import recipeReducer from './recipe-reducers.jsx'

const combinedReducers = combineReducers ({
	recipeReducer,
	form: formReducer,
})

export default combinedReducers