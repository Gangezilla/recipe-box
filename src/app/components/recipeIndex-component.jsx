import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


//props go in here.
const RecipeIndex = ({ onAddRecipeClick }) => {
	return (
		<div>
			<h2> working real well! </h2>
			<p>Need to have a ul in here that will map through our recipes </p>
			<p> next, need to have a button in here with an onclick to generate a new recipe </p>
			<button onClick={() => onAddRecipeClick()}> Add a new recipe </button>
		</div>
	)
}


// RecipeIndex.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	photo: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// }

export default RecipeIndex