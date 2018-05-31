import React, { Component } from 'react';
import './App.css';
import 'framework7-icons'
import {Stepper} from "./Stepper";

class App extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.f7app = window.f7app
		
		this.doClick = this.doClick.bind(this)
		
		this.dialog = this.f7app.dialog.create({
			text:'您当前不在场内，请前往停车场',
			buttons:[{
				text:'知道了',
				onClick() {
					
					console.log('ok')
				},
			}]
		})
	}
	
	doClick() {
		
		const { doClickNaviTo, index } = this.props
		
		if (doClickNaviTo) {
			
			doClickNaviTo(index)
		}
	}
	
  render() {
    return (
			<div className="App">
				<Stepper/>
			</div>
    );
  }
}

export default App;
