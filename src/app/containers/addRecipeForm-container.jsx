import { connect } from 'react-redux'
import RecipeForm from '../components/addRecipeForm-component.jsx'
import { addNewRecipe, closeRecipeModal } from '../actions/recipeIndex-actions.jsx'
import { Field, reduxForm } from 'redux-form'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    addNewRecipe: (fields) => {
    	dispatch(addNewRecipe(fields))
      dispatch(closeRecipeModal())
    }
  }
}

// const RecipeFormContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(RecipeForm)

//export default RecipeFormContainer
export default connect(mapStateToProps,
                       mapDispatchToProps)(reduxForm({
  form: 'RecipeForm'
})(RecipeForm))
