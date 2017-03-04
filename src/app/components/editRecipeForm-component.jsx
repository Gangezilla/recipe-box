import React from 'react'
import { Field, reduxForm } from 'redux-form'
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="input-box"{...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
    </div>
  </div>
)

const required = value => value ? undefined : 'Required'
const EditForm = ( props ) => {
  const { handleSubmit, reset, onSubmit, editR, status } = props
  return (
  	<div>
    <form onSubmit={handleSubmit((fields) => editR(fields))}>
      <div className="form-fields">
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
	         <Field name="RecipeIngredients" component="textarea" placeholder="Seperate ingredients with commas" validate={required}/>
        </div>
      </div>
        <button className="btn pair" type="submit">Edit</button>
        <button className="btn pair" type="button" onClick={reset}>Start Again</button>
    </form>
    </div>
  )
}

export default EditForm