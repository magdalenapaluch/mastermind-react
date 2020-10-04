import React from 'react';
import ChoicePins from '../ChoicePins/ChoicePins.js';
import SlotRow from '../SlotRow/SlotRow.js';

class Boardgame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selectedColor:null};
	}
	
	handleColorState(passedColor){
		this.setState({selectedColor: passedColor});
	}
  render() {
    return (
      <div className="boardgame">
		  	
			{[...Array(8)].map((x, i) =>
				<SlotRow key={`${i}`}></SlotRow>
			)}
          	<ChoicePins></ChoicePins>
      </div>
    );
  }
}
export default Boardgame;