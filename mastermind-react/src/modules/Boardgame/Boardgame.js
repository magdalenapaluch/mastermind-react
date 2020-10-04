import React from 'react';
import ChoicePins from '../ChoicePins/ChoicePins.js';
import SlotRow from '../SlotRow/SlotRow.js';
import Configuration from '../Configuration/Configuration.js';

class Boardgame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedColor:null,currentRow:7, userConfig:[null, null, null, null]};
		this.possibleColors = ['red', 'green', 'blue', 'pink', 'brown', 'orange', 'black', 'white'] ;
		this.handleColorState = this.handleColorState.bind(this);
		this.updateUserConfig = this.updateUserConfig.bind(this);
		this.randomColors = [...this.possibleColors].sort(() => .5 - Math.random()).slice(0,4);
	}
	
	handleColorState(passedColor){
		this.setState({selectedColor: passedColor});
	}
	updateUserConfig(num, color){
		let newArray = [...this.state.userConfig];
		newArray[num] = color;
		this.setState({userConfig: newArray});
		console.log(newArray);
	}
	
  render() {
    return (
      <div className="boardgame">
		  	<Configuration colors={this.randomColors}></Configuration>
			{[...Array(8)].map((x, i) =>
				<SlotRow key={`${i}`} rowNum={i} updateUserConfig={this.updateUserConfig} currentRow={this.state.currentRow} selectedColor={this.state.selectedColor} userConfig={this.state.userConfig} configuration={this.randomColors}></SlotRow>
			)}
          	<ChoicePins handleColorChange={this.handleColorState} possibleColors={this.possibleColors} selectedColor={this.state.selectedColor}></ChoicePins>
      </div>
    );
  }
}
export default Boardgame;