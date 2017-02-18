import React from 'react'
import { Field, reduxForm } from 'redux-form'
//and the cool thing will be that you'll be able to reuse this component and automatically fill it up with the information about a recipe and then edit it. yeah!

const RecipeForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  	<div>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
        	<label>Name of Recipe</label>
         	<Field name="RecipeName" component="input" type="text" placeholder="Name"/>
        </div>
         <div>
	         <label>Description</label>
	         <Field name="RecipeDescription" component="input" type="text" placeholder="Description"/>
        </div>
         <div>
	         <label>Recipe Ingredients</label>
	         <Field name="RecipeIngredients" component="input" type="text" placeholder="Name"/>
        </div>
      </div>
        <button type="submit">Create it!</button>
        <button type="button" onClick={reset}>Start Again</button>
    </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(RecipeForm)