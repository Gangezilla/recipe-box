import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form'
import RecipeForm from './addRecipeForm-component.jsx'

//props go in here.
const RecipeIndex = ({ openRecipeModal, closeRecipeModal, isAddRecipeOpen }) => {
	return (
		<div>
			<h2> working real well! </h2>
			<p>Need to have a ul in here that will map through our recipes </p>
			<p> next, need to have a button in here with an onclick to generate a new recipe </p>
			<button onClick={() => openRecipeModal()}> Add a new recipe </button>

		<Modal
			isOpen={isAddRecipeOpen}
		  	style=""
		  	contentLabel="Add New Recipe"
		>
		  	<h1>Adding a new recipe!</h1>
		  	<RecipeForm />
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