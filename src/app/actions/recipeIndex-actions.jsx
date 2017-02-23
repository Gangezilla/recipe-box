export const openRecipeModal = (message, buttonMessage, modalStatus) => {
	return {
	    type: 'OPEN_MODAL',
	    isAddRecipeOpen: true,
	    headerMessage: message,
	    buttonMessage: buttonMessage,
	    modalStatus: modalStatus,
  	}
}

export const openEditModal = (ID) => {
	return {
		type: 'EDIT_MODAL',
		isEditRecipeOpen: true,
		currentID: ID,
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

export const deleteRecipe = (ID) => {
	return {
		type: 'DELETE_RECIPE',
		ID: ID
	}
}

export const editR = (fields, ID) => {
	return {
		type: 'EDIT_R',
		fields: fields,
	}
}






