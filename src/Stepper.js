import React, { Component } from 'react'

export class Stepper extends Component {
	
	render() {
		return (
			<div className="stepper">
				<div className="stepper-button-minus"></div>
				<div className="stepper-input-wrap">
					<input type="text" readOnly value="10"/>
				</div>
				<div className="stepper-button-plus"></div>
			</div>
		)
	}
}