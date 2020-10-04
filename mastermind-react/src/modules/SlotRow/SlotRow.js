import React from 'react';
import Slot from '../Slot/Slot.js';
import Check from '../Check/Check.js';

class SlotRow extends React.Component {
  constructor(props) {
		super(props);
  }

  updateUserConfig(num, color){
	this.props.updateUserConfig(num,color)
  }

  render() {
    return (
      <div className={
		  this.props.currentRow === this.props.rowNum ? 
		  'active gameboard__user-config-wrapper' : 
		  'disabled gameboard__user-config-wrapper'
		  }
	  >
		  	<div className="gameboard__user-config">
                {[...Array(4)].map((x, i) =>
                    <Slot key={i} slotNum={i} selectedColor={this.props.selectedColor} updateUserConfig={this.props.updateUserConfig}></Slot>
                )}
            </div>
            <Check userConfig={this.props.userConfig} configuration={this.props.configuration}></Check>
      </div>
    );
  }
}
export default SlotRow;