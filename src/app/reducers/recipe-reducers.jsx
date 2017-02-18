const recipeReducer = (state = {}, action) => {
	if (state === undefined) {
		return {
			isAddRecipeOpen: false,
		}
	}

	switch (action.type) {
		case 'OPEN_MODAL':
			return {
				isAddRecipeOpen: true
			}

		case 'CLOSE_MODAL':
		return {
			isAddRecipeOpen: false
		}

    	default:
      		return state
  	}
}

export default recipeReducer