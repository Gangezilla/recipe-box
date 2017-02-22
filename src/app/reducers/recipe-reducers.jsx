const recipeReducer = (state, action) => {
	if (state === undefined) {
		return {
			headerMessage: 'Adding a new recipe!',
			id: 1,
			Recipes: [
				{
					RecipeName: 'Pizza',
					RecipeDescription: 'A tasty treat for all involved.',
					ID: 1,
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
			console.log(action)
			state.id++
			var recipes = state.Recipes.slice(0)
			recipes.push({
				RecipeName: action.recipeInfo.RecipeName,
				RecipeDescription: action.recipeInfo.RecipeDescription,
				RecipeIngredients: action.recipeInfo.recipeIngredients,
				ID: state.id,
			})
			return Object.assign({}, state, {
				Recipes: recipes
			})

		case 'EDIT_RECIPE':
			console.log(action.ID)

		case 'DELETE_RECIPE':
		return Object.assign({}, state, {
			Recipes: state.Recipes.filter(function(recipe) { return recipe.ID != action.ID })
		})

    	default:
      		return state
  	}
}
export default recipeReducer