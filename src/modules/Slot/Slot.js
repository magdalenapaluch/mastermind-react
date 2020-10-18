import React from 'react';
import StyledSlot from './StyledSlot.js';

class Slot extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
    handleClick(){
        this.props.updateUserConfig(this.props.slotNum, this.props.selectedColor)
    }
    render() {
        return (
            <StyledSlot
            clickable={this.props.activeState}
            onClick={this.handleClick} 
            color={this.props.userConfig[this.props.rowNum][this.props.slotNum]}>   
            </StyledSlot>
        );
    }
}
export default Slot;