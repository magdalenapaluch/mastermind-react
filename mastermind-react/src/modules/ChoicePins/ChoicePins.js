import React from 'react';
import Pin from '../Pin/Pin.js';
import SelectedPin from '../SelectedPin/SelectedPin.js';

class ChoicePins extends React.Component {

	constructor(props) {
		super(props);
		this.handleColorSelection = this.handleColorSelection.bind(this);
		this.state = {selectedColor:null};
	}

	handleColorSelection(passedColor){
		console.log(passedColor, '2');
		this.setState({selectedColor: passedColor});
	}
	  
  	render() {
		const possibleColors = ['red', 'green', 'blue', 'pink', 'brown', 'orange', 'black', 'white']
		return (
		<div className="ChoicePins">
			<div className="gameboard__pins-wrapper">
				<div className="gameboard__pins">
					{possibleColors.map((item)=>{
						return <Pin color={`${item}`} key={`${item}`}  onColorChange={this.handleColorSelection}></Pin>
					})}
				</div>
				<SelectedPin color={`${this.state.selectedColor}`}  onColorChange={this.handleColorSelection}></SelectedPin>
			</div>
		</div>
    );
  }
}
export default ChoicePins;