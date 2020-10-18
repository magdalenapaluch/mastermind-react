import React from 'react';
import StyledPin from "./StyledPin.js";

class Pin extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleColorChange = this.handleColorChange.bind(this);
      }
    handleColorChange = () => {
        this.props.onColorChange(this.props.color);
	  };
    render() {
        return (
        <StyledPin clickable={true} color={this.props.color} onClick={this.handleColorChange}>{this.props.letter}</StyledPin>
        );
    }
}
export default Pin;