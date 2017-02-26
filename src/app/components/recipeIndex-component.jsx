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
	return (
		<div className="top-container">
		<button className="btn add-new" onClick={() => openRecipeModal()}> Add a New Recipe </button>
			<span className={Recipes.length == 0 ? 'norecipes-message' : 'is-hidden'}> Why don't you try adding something here? </span>
			<div className={Recipes !== [] ? 'recipe-container' : 'is-hidden'}>
				{Recipes.map(function(recipe) {
					console.log(recipe.RecipeIngredients)
					return (
					<div className="recipe-box">
						<span className="recipe-name"
							  key={recipe.RecipeName}>
							  {recipe.RecipeName}
						</span>
						<span className="recipe-description"
							  key={recipe.RecipeDescription}>
							  {recipe.RecipeDescription}
						</span>
						<ul className="recipe-ingredients">
							{recipe.RecipeIngredients.map(function(ingredient) {
								return <li className="ingredient"> {ingredient} </li>
							})}
						</ul>
						<button className="btn delete" onClick={() => deleteRecipe(recipe.ID)}> Delete </button>
						<button className="btn edit" onClick={() => openEditModal(recipe.ID)}> Edit </button>
					</div>
						)
				}.bind(this))}
			</div>
			<button className={Recipes.length == 0 ? 'is-hidden' : 'btn add-new'} onClick={() => openRecipeModal()}> Add a New Recipe </button>

		<Modal
			isOpen={isAddRecipeOpen}
		  	style=""
		  	contentLabel="Recipe Setup"
		>
		  	<h1 className="header-message">{headerMessage}</h1>
		  	<RecipeFormContainer status={modalStatus}/>
		  	<button className="btn close-modal" onClick= {() => closeRecipeModal()}>Close</button>
		</Modal>

		<Modal
			isOpen={isEditRecipeOpen}
		  	style=""
		  	contentLabel="Edit Recipe"
		>
		  	<h1 className="header-message">Edit your recipe!</h1>
		  	<EditFormContainer />
		  	<button className="btn close-modal" onClick= {() => closeRecipeModal()}>Close</button>
		</Modal>
		</div>
	)
}


// RecipeIndex.propTypes = {
// 	onAddRecipeClick: PropTypes.function,
// 	isAddRecipeOpen: PropTypes.boolean,
// }

export default RecipeIndex