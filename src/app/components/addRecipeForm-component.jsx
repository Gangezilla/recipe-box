import React from 'react'
import { Field, reduxForm } from 'redux-form'
//import { addNewRecipe } from '../actions/recipeIndex-actions.jsx'
//and the cool thing will be that you'll be able to reuse this component and automatically fill it up with the information about a recipe and then edit it. yeah!
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const required = value => value ? undefined : 'Required'

const RecipeForm = ({ props, addNewRecipe }) => {
  const { handleSubmit, reset, onSubmit } = props
  console.log(props)
  return (
  	<div>
    <form onSubmit={handleSubmit(this.addNewRecipe)}>
      <div>
        <div>
        	<label>Name of Recipe</label>
         	<Field name="RecipeName" component={renderField} type="text" placeholder="Name" validate={required}/>
        </div>
         <div>
	         <label>Description</label>
	         <Field name="RecipeDescription" component={renderField} type="text" placeholder="Description" validate={required}/>
        </div>
         <div>
	         <label>Recipe Ingredients</label>
	         <Field name="RecipeIngredients" component="textarea" placeholder="Seperate ingredients with commas"/>
        </div>
      </div>
        <button type="submit">Create it and work!</button>
        <button type="button" onClick={reset}>Start Again</button>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(RecipeForm)