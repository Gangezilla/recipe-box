const recipeReducer = (state = {}, action) => {
	if (state === undefined) {
		return {
			isAddRecipeOpen: false,
			headerMessage: "Adding a new recipe!",
			index: 0,
			Recipes: {

			}

		}
	}

	switch (action.type) {
		case 'OPEN_MODAL':
			console.log('opening')
			return {
				isAddRecipeOpen: action.isAddRecipeOpen,
				headerMessage: action.headerMessage
			}

		case 'CLOSE_MODAL':
		console.log('closing')
			return {
				isAddRecipeOpen: action.isAddRecipeOpen
			}

		case 'CREATE_RECIPE':
		console.log('created!', action.recipeInfo)
			return {
				Recipes: action.recipeInfo
			}
		//create a new recipe object, and pop it in state.
    	default:
      		return state
  	}
}

export default recipeReducer