import React from 'react';

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
            <div className="gameboard__user-config-slot" 
            onClick={this.handleClick} 
            data-color={this.props.userConfig[this.props.rowNum][this.props.slotNum]}>   
            </div>
        );
    }
}
export default Slot;