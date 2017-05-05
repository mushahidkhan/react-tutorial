import React, { Component } from 'react'
import Step3 from './Step'
import Completed from './Completed'
 
export default class AppBody extends Component {
	render() {
		return (
			<div className="step">
				<Step3/>
				<Completed/>
			</div>
		)
	}
}

