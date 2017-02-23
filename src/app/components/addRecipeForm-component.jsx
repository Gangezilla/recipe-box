import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
const RecipeForm = ( props ) => {
  const { handleSubmit, reset, onSubmit, addNewRecipe, status } = props
  console.log(status)
  return (
  	<div>
    <form onSubmit={handleSubmit((fields) => addNewRecipe(fields))}>
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
        <button type="submit">Create!</button>
        <button type="button" onClick={reset}>Start Again</button>
    </form>
    </div>
  )
}

export default RecipeForm