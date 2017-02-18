export const openRecipeModal = () => {
	return {
	    type: 'OPEN_MODAL',
	    isAddRecipeOpen: true,
	    headerMessage: "Adding a new recipe!"
  	}
}

export const closeRecipeModal = () => {
	return {
	    type: 'CLOSE_MODAL',
	    isAddRecipeOpen: false
 	 }
}

//add it to the object at a new index? do we need to do that? or just add it to the bottom of an object?
export const addNewRecipe = (fields) => {
	console.log(fields)
  	return {
  		type: 'CREATE_RECIPE',
  		recipeInfo: fields
  	}
}

export const editRecipe = (recipe) => {
	//take in a recipe, allow you to change parts of it.
}

export const deleteRecipe = (recipe) => {
	//take in recipe, pop box to ask to confirm if we want to delete it or whatever.
}






