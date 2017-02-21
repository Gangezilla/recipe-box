const recipeReducer = (state, action) => {
	if (state === undefined) {
		return {
			Recipes: [
				{
					RecipeName: 'Pizza',
					RecipeDescription: 'A tasty, treat for all involved.'
				}
			],
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

		case 'EDIT_RECIPE':

		case 'DELETE_RECIPE':

    	default:
      		return state
  	}
}
export default recipeReducer