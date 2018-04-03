import React from 'react';

const Greeting = () => {
	return(
		<h1>Hello!</h1>  //literal html sitting in js
	)
}

export default Greeting

//////////////////////////////////////////////////////////////////////////
import React from 'react';
import Greeting from './Greeting'

const Wrapper = () => {
	return (
		<div>
			<Greeting />
		</div>
	)
}

// pinkandgold.party

////////////////////////////////////////////////////////////////////////////
//import reactdom
ReactDOM.render(React.createElement('h3', null, "Hello World"), document.getElementById('root'))
ReactDOM.render(<h2>Hello World</h2>, document.getElementById('root'))
////////////////////////////////////////////////////

function Welcome(props){
	return <h1>Hello, {props.name}</h1>
}

function App(){
	return(
		<div>
			<Welcome name ="Sara" />
			<Welcome name ="Cahal" />
			<Welcome name ="Edite" />
		</div>
  	)
}

///eventbrite for advanced react