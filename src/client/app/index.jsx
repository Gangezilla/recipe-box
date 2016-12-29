import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	//App needs to hold all state for other objects, be master component.
	constructor(props, context) {
	    super(props, context);
	     this.state = {
	     	recipeName: 'Spaghetti',
	     	image: 'http://placehold.it/100x100'

	     	}
	     }

   render() {
	    return  (
	    	<div className="container">
			    <Recipe name={this.state.recipeName} image={this.state.image}/>
			    <AddRecipe />
	    	</div>
	    );
	  }
}

class Recipe extends React.Component {
	//Recipe holds Ingredient, DeleteRecipe, EditRecipe, AddRecipe components.
	constructor(props, context) {
		super(props, context);
		this.state = {
			ingredient: 'Tomato'
		}
	}
	propTypes: {
			name: React.PropTypes.string,
			image: React.PropTypes.string,
			ingredient: React.PropTypes.string
	}

	render() {
	    return  (
	    	<div className="row">
	    		<h2> {this.props.name} </h2>
	    		<img src={this.props.image}/>
	    		<Ingredient ingredient={this.state.ingredient}/>
	    	</div>
	    );
	  }
}

class Ingredient extends React.Component {
	//Ingredient is just text, doesn't need to be directly editable.
	propTypes: {
		name: React.PropTypes.string
	}

	render() {
		return (
			<div className="ingredients-header">
				<h2> Ingredients </h2>
				<div className="ingredient">
					<span> {this.props.name} </span>
				</div>
			</div>
		);
	}


}

class DeleteRecipe extends React.Component {
	//DeleteRecipe will remove a Recipe object
}

class EditRecipe extends React.Component {
	//EditRecipe and AddRecipe may end up just being the same thing tbh, but one of them will have some information prefilled.
}

class AddRecipe extends React.Component {
	render() {
		return (
			<button className="add-recipe">
				Add Recipe
			</button>
		)
	}

}

render(<App/>, document.getElementById('app'));