import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import Recipe from '../components/recipe-component.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)

export default RecipeContainer