import React from 'react';

class Slot extends React.Component {
	constructor(props) {
        super(props);
	}
    handleClick(){
        console.log('click');
    }
    render() {
        return (
            <div className="gameboard__user-config-slot" onClick={this.handleClick} data-color=''></div>
        );
    }
}
export default Slot;