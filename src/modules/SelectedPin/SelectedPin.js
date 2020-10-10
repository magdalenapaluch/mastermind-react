import React from 'react';

class SelectedPin extends React.Component {
  	render() {
    return (
		<div className="gameboard__pin gameboard__pin--selected" data-color={`${this.props.color}`}></div>
    );
  }
}
export default SelectedPin;