//needs to map loop through all the recipes i have.
//action to create a new recipe.
import { connect } from 'react-redux'
import RecipeIndex from '../components/recipeIndex-component.jsx'
import { addNewRecipe, openRecipeModal, closeRecipeModal } from '../actions/recipeIndex-actions.jsx'

const mapStateToProps = (state) => {
  return {
  	isAddRecipeOpen: state.recipeReducer.isAddRecipeOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	openRecipeModal: () => {
      dispatch(openRecipeModal())
    },

    closeRecipeModal: () => {
    	dispatch(closeRecipeModal())
    },

    handleSubmit: () => {
    	dispatch(addNewRecipe())
    }
  }
}

const RecipeIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)

export default RecipeIndexContainer