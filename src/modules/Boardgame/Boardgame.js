import React from 'react';
import ChoicePins from '../ChoicePins/ChoicePins.js';
import SlotRow from '../SlotRow/SlotRow.js';
import Configuration from '../Configuration/Configuration.js';

class Boardgame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedColor:null,currentRow:7, userConfig:[[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null],[null, null, null, null]],  results: [[],[], [], [], [], [], [], []]};
		this.possibleColors = [
			{name:'red', letter:"Q", keyCode: 81}, 
			{name:'green', letter:"W", keyCode: 87}, 
			{name:'blue', letter:"E", keyCode: 69}, 
			{name:'pink', letter:"R", keyCode: 82}, 
			{name:'brown', letter:"A", keyCode: 65},
			{name:'orange', letter:"S", keyCode: 83}, 
			{name:'black', letter:"D", keyCode: 68}, 
			{name:'white', letter:"F", keyCode: 70}
		];
		this.handleColorState = this.handleColorState.bind(this);
		this.handleRowchange = this.handleRowchange.bind(this);
		this.updateUserConfig = this.updateUserConfig.bind(this);
		this.handleResultsChange = this.handleResultsChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.randomColors = [...this.possibleColors].sort(() => .5 - Math.random()).slice(0,4);
	}
	
	handleColorState(passedColor){
		this.setState({selectedColor: passedColor});
	}
	handleRowchange(){
		this.setState({currentRow: this.state.currentRow-1});
	}
	handleResultsChange(results){
		console.log(results);
		let newArray = this.state.results;
		newArray[this.state.currentRow] = results;
		this.setState({results: newArray});
		
	}
	updateUserConfig(num, color){
		let newArray = [...this.state.userConfig];
		newArray[this.state.currentRow][num] = color;
		this.setState({userConfig: newArray});
	}

	handleKeyPress(event){
		this.handleColorState(this.possibleColors.find(o => o.keyCode === event.keyCode).name);

	  }
	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyPress, false);
	}
	
  render() {
    return (
      <div className="boardgame">
		  	<Configuration colors={this.randomColors}></Configuration>
			{[...Array(8)].map((x, i) =>
				<SlotRow key={`${i}`} rowNum={i} updateUserConfig={this.updateUserConfig} currentRow={this.state.currentRow} selectedColor={this.state.selectedColor} userConfig={this.state.userConfig} configuration={this.randomColors} onRowChange={this.handleRowchange} handleResultsChange={this.handleResultsChange}results={this.state.results}></SlotRow>
			)}
          	<ChoicePins handleColorChange={this.handleColorState} possibleColors={this.possibleColors} selectedColor={this.state.selectedColor}></ChoicePins>
      </div>
    );
  }
}
export default Boardgame;