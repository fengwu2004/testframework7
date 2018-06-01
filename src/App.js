import React, { Component } from 'react';
import './App.css';
import 'framework7-icons'
import {Stepper} from "./Stepper";

class App extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.f7app = window.f7app
		
		this.doChange = this.doChange.bind(this)
		
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
	
	doChange(value) {
		
		console.log(value.target.checked)
	}
	
	componentDidMount() {
	
		console.log('kk')
	}
	
  render() {
    return (
			<div className="App">
				<label className="toggle toggle-init">
					<input type="checkbox" onInput={this.doChange}/>
						<span className="toggle-icon"></span>
				</label>
			</div>
    );
  }
}

export default App;
