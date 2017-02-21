import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App  from './components/app.jsx'
import rootReducer from './reducers/index.jsx'

let store = createStore(rootReducer)

// store.subscribe(() =>
// 	console.log('index: ',store.getState())
// )

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'));

//so, we want to be using redux for sure. on add, remove, edit a recipe you can just fire off an action and handle that. 
//whenever a new recipe is added, you can just pop it into a json and then map over that json to render out all the recipes/components that exist at that point in time.
//i imagine app will just be a render method that'll map over our recipes?

// I can create recipes that have names and ingredients.
// User Story: I can see an index view where the names of all the recipes are visible.
// User Story: I can click into any of those recipes to view it.
// User Story: I can edit these recipes.
// User Story: I can delete these recipes.
// User Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.
