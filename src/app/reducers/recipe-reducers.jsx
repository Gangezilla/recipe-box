const recipeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'TEST':
			return {
				test: action
			}

    	default:
      		return state
  	}
}

// function recipeReducer (state = {}, action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }

export default recipeReducer