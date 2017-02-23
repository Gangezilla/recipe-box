//needs to map loop through all the recipes i have.
//action to create a new recipe.
import { connect } from 'react-redux'
import RecipeIndex from '../components/recipeIndex-component.jsx'
import { addNewRecipe, openRecipeModal, closeRecipeModal, deleteRecipe, editR, openEditModal } from '../actions/recipeIndex-actions.jsx'

const mapStateToProps = (state) => {
  return {
  	isAddRecipeOpen: state.recipeReducer.isAddRecipeOpen,
  	isEditRecipeOpen: state.recipeReducer.isEditRecipeOpen,
  	headerMessage: state.recipeReducer.headerMessage,
  	Recipes: state.recipeReducer.Recipes,
  	modalStatus: state.recipeReducer.modalStatus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	openRecipeModal: () => {
  		const message="Add a Recipe"
  		const buttonMessage = "Create"
  		const modalStatus = "create"
      	dispatch(openRecipeModal(message, buttonMessage, modalStatus))
    },

    openEditModal: (ID) => {
    	console.log(ID)
    	dispatch(openEditModal(ID))
    },

    closeRecipeModal: () => {
    	dispatch(closeRecipeModal())
    },

    addNewRecipe: () => {
    	console.log('creating')
    	dispatch(addNewRecipe())
    },

    deleteRecipe: (ID) => {
    	dispatch(deleteRecipe(ID))
    },

    editR: (fields) => {
    	console.log('editing')
    	console.log(fields)
    	//dispatch(editR(ID))
    }
  }
}

const RecipeIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)

export default RecipeIndexContainer