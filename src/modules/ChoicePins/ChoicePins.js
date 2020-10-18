import React from 'react';
import Pin from '../Pin/Pin.js';
import SelectedPin from '../SelectedPin/SelectedPin.js';
import {StyledChoicePins, StyledChoicePinsWrapper} from './StyledChoicePins.js';

class ChoicePins extends React.Component {

	constructor(props) {
		super(props);
		this.handleColorSelection = this.handleColorSelection.bind(this);
		this.state = {selectedColor:null};
	}

	handleColorSelection(passedColor){
		this.props.handleColorChange(passedColor);
	}
	  
  	render() {
		return (
		<div className="ChoicePins">
			<StyledChoicePinsWrapper>
				<StyledChoicePins>
					{this.props.possibleColors.map((item)=>{
						return <Pin color={item.name} letter={item.letter} key={item.name} onColorChange={this.handleColorSelection}></Pin>
					})}
				</StyledChoicePins>
				<SelectedPin color={`${this.props.selectedColor}`} ></SelectedPin>
			</StyledChoicePinsWrapper>
		</div>
    );
  }
}
export default ChoicePins;