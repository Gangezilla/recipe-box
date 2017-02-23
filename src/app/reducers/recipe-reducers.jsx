const recipeReducer = (state, action) => {
	if (state === undefined) {
		return {
			headerMessage: 'Adding a new recipe!',
			buttonMessage: 'Create',
			id: 0,
			modalStatus: 'add',
			Recipes: [
				{
					RecipeName: 'Pizza',
					RecipeDescription: 'A tasty treat for all involved.',
					ID: 0,
				}
			],
		}
	}

	switch (action.type) {

		case 'OPEN_MODAL':
			return Object.assign({}, state, {
				isAddRecipeOpen: action.isAddRecipeOpen,
				headerMessage: action.headerMessage,
				buttonMessage: action.buttonMessage,
				modalStatus: action.modalStatus,
			})

		case 'EDIT_MODAL': 
		console.log(action.currentID)
			return Object.assign({}, state, {
				isEditRecipeOpen: action.isEditRecipeOpen,
				currentRecipe: action.currentID
			})

		case 'CLOSE_MODAL':
			return Object.assign({}, state, {
				isAddRecipeOpen: false,
				isEditRecipeOpen: false,
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

		case 'DELETE_RECIPE':
			console.log('deleting', action.ID)
			return Object.assign({}, state, {
				Recipes: state.Recipes.filter(function(recipe) {
					return recipe.ID != action.ID
				})
			})

		case 'EDIT_R':
			var currentRecipes = state.Recipes.slice();
			var oldRecipe = currentRecipes[state.currentRecipe];
			const newRecipe = {
				RecipeName: action.fields.RecipeName,
				RecipeDescription: action.fields.RecipeDescription,
				RecipeIngredients: action.fields.RecipeIngredients,
				ID: state.currentRecipe
			}
			currentRecipes[state.currentRecipe] = newRecipe;
			return Object.assign({}, state, {
				Recipes: currentRecipes
			})

    	default:
      		return state
  	}
}
export default recipeReducer