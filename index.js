// Libs
import React from 'react';
import ReactDOM from 'react-dom';

//Component
import SampleComponent from './sample'

// CSS
import './css/style.css';

var MyApp = React.createClass({ 

	render: function()
	{
		return ( 
			<SampleComponent />
		)
	}
}); 




ReactDOM.render(<MyApp />, document.getElementById('dvApp')); 
