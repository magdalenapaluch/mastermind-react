import React from 'react';

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
        <div className={`gameboard__pin gameboard__pin--${this.props.color}`} data-color={`${this.props.color}`}  onClick={this.handleColorChange}>{this.props.letter}</div>
        );
    }
}
export default Pin;