import React from 'react';

class Slot extends React.Component {
	constructor(props) {
		super(props);
        this.state = {currentColor:null};
		this.handleClick = this.handleClick.bind(this);
	}
    handleClick(){
        this.props.updateUserConfig(this.props.slotNum, this.props.selectedColor)
		this.setState({currentColor: this.props.selectedColor});
    }
    render() {
        return (
            <div className="gameboard__user-config-slot" 
            onClick={this.handleClick} 
            data-color={`${this.state.currentColor}`}>   
            </div>
        );
    }
}
export default Slot;