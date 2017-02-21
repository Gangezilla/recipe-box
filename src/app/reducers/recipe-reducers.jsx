const recipeReducer = (state, action) => {
	if (state === undefined) {
		return {
			Recipes: [],
		}
	}

	switch (action.type) {

		case 'OPEN_MODAL':
			return Object.assign({}, state, {
				isAddRecipeOpen: action.isAddRecipeOpen,
				headerMessage: action.headerMessage,
			})

		case 'CLOSE_MODAL':
		console.log('closing: ',state)
			return Object.assign({}, state, {
				isAddRecipeOpen: action.isAddRecipeOpen
			})

		case 'CREATE_RECIPE':
		var recipes = state.Recipes.slice(0)
			recipes.push(action.recipeInfo)	
			return Object.assign({}, state, {
				Recipes: recipes
			})
			        // ...state,
			        // Recipes: [...state, action.recipeInfo]
		// if (state.Recipes !== undefined) {
		// 	console.log('normal state: ', state.Recipes)
		// 	var recipes = state.Recipes.slice(0)
		// 	console.log('recipes var: ', recipes)
		// 	recipes.push(action.recipeInfo)
		// 	return Object.assign({}, state, {
		// 		Recipes: recipes
		// 	})
		// }
		// else{
		// 	console.log('state undefined', state)
		// 	return Object.assign({}, state, {
		// 		Recipes: action.recipeInfo
		// 	})
		// }
			// return [
			// 	...state.Recipes,
			// 	action.recipeInfo
			// ]

    	default:
      		return state
  	}
}
//case 'ADD_COLOR':
// var colours = state.colours.slice(0)
// 			colours.push(action.text.colour)	
// 			return Object.assign({}, state, {
// 				colours: colours
// 			})

// case ADD_ITEM :
//     return {
//         ...state,
//         arr: state.arr.concat(action.newItem)
//     }
//			return [
//		       ...state,
//		       action.text
//	        ]
//		case 'REMOVE_COLOR':
//			return state.filter(index => index.colour !== action.text.colour)
//		case 'ADD_SIZE':
//			return [
//		       ...state,
//		       action.text
//	        ]
//		case 'REMOVE_SIZE':
//			return state.filter(index => index.size !== action.text.size)
//		default:
//			return state
//	}
export default recipeReducer