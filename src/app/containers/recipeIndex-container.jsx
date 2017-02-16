//needs to map loop through all the recipes i have.
//action to create a new recipe.
import { connect } from 'react-redux'
import RecipeIndex from '../components/recipeIndex-component.jsx'
import { addNewRecipe } from '../actions/recipeIndex-actions.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onAddRecipeClick: (id) => {
      dispatch(addNewRecipe())
    }
  }
}

const RecipeIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex)

export default RecipeIndexContainer