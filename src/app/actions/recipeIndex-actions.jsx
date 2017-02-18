export const openRecipeModal = () => {
	return {
	    type: 'OPEN_MODAL',
	    isAddRecipeOpen: true
  }
}

export const closeRecipeModal = () => {
	return {
	    type: 'CLOSE_MODAL',
	    isAddRecipeOpen: false
  }
}

export const addNewRecipe = (name, description, ingredients, image) => {
	console.log('adding it in!')
  return {
  		type: 'ADD_NEW_RECIPE',
  }
}

export const editRecipe = (recipe) => {
	//take in a recipe, allow you to change parts of it.
}

export const deleteRecipe = (recipe) => {
	//take in recipe, pop box to ask to confirm if we want to delete it or whatever.
}






