import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form'
import RecipeFormContainer from '../containers/addRecipeForm-container.jsx'
import EditFormContainer from '../containers/editRecipeForm-container.jsx'

//props go in here.

const RecipeIndex = ({
	openRecipeModal, closeRecipeModal, isAddRecipeOpen, headerMessage, addNewRecipe, Recipes, editRecipe, deleteRecipe, editR, buttonMessage, modalStatus, isEditRecipeOpen, openEditModal
	 }) => {
	//ternary statement for if we don't have any recipes.
	return (
		<div>
			<h2> working real well! </h2>
			<span className={Recipes.length == 0 ? 'norecipes-message' : 'is-hidden'}> Why don't you try adding something here? </span>
			<div className={Recipes !== [] ? 'recipe-container' : 'is-hidden'}>
				{Recipes.map(function(recipe) {
					return (
					<div className="recipe-box">
						<span className="recipe-name"
							  key={recipe.RecipeName}>
							  {recipe.RecipeName} - {recipe.ID}
						</span>
						<span className="recipe-description"
							  key={recipe.RecipeDescription}>
							  {recipe.RecipeDescription}
						</span>
						<span> Need to make a function to loop through ingredients... and display them </span>
						<button onClick={() => deleteRecipe(recipe.ID)}> Delete </button>
						<button onClick={() => openEditModal(recipe.ID)}> Edit </button>
					</div>
						)
				}.bind(this))}
			</div>
			<p> next, need to have a button in here with an onclick to generate a new recipe </p>
			<button onClick={() => openRecipeModal()}> Add a new recipe </button>

		<Modal
			isOpen={isAddRecipeOpen}
		  	style=""
		  	contentLabel="Recipe Setup"
		>
		  	<h1>{headerMessage}</h1>
		  	<RecipeFormContainer status={modalStatus}/>
		  	<button onClick= {() => closeRecipeModal()}>Close</button>
		</Modal>

		<Modal
			isOpen={isEditRecipeOpen}
		  	style=""
		  	contentLabel="Edit Recipe"
		>
		  	<h1>Edit your recipe!</h1>
		  	<h1> Time to edit  </h1>
		  	<EditFormContainer />
		  	<button onClick= {() => closeRecipeModal()}>Close</button>
		</Modal>
		</div>
	)
}


// RecipeIndex.propTypes = {
// 	onAddRecipeClick: PropTypes.function,
// 	isAddRecipeOpen: PropTypes.boolean,
// }

export default RecipeIndex