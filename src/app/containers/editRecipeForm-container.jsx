import { connect } from 'react-redux'
import EditForm from '../components/editRecipeForm-component.jsx'
import { editR, closeRecipeModal } from '../actions/recipeIndex-actions.jsx'
import { Field, reduxForm } from 'redux-form'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    editR: (fields) => {
    	dispatch(editR(fields))
      dispatch(closeRecipeModal())
    }
  }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(reduxForm({
  form: 'EditForm'
})(EditForm))
