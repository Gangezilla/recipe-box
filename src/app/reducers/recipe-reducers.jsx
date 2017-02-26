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
					RecipeIngredients: ['ham', 'pineapple', 'tomato paste'],
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
				RecipeIngredients: action.recipeInfo.RecipeIngredients.split(','),
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
			var allRecipes = state.Recipes
			var oldRecipe;
			 allRecipes.map(recipe => {
		        if (recipe.ID === state.currentRecipe) {
		        	console.log('matching!')
		        	oldRecipe = recipe
		        }
	        })
			var newRecipe = Object.assign({}, oldRecipe);
			console.log(newRecipe)
			newRecipe.RecipeName = action.fields.RecipeName
			newRecipe.RecipeDescription = action.fields.RecipeDescription
			newRecipe.RecipeIngredients = action.fields.RecipeIngredients.split(',')
			newRecipe.ID = state.currentRecipe
			allRecipes[state.currentRecipe] = newRecipe;
			return Object.assign({}, state, {
				Recipes: allRecipes
			})

    	default:
      		return state
  	}
}
export default recipeReducer