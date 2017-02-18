import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

//props go in here.
const Recipe = ({name, photo, description, ingredients}) => {
	return (
		<h2> working! </h2>
	)
}


Recipe.propTypes = {
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	ingredients: PropTypes.object.isRequired,
}

export default Recipe