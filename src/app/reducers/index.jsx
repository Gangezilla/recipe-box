import { combineReducers } from 'redux'
import recipeReducer from './recipe-reducers.jsx'

const combinedReducers = combineReducers ({
	recipes: recipeReducer
})

export default combinedReducers