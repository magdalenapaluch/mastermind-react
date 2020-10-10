import React from 'react';
import Slot from '../Slot/Slot.js';
import Check from '../Check/Check.js';

class SlotRow extends React.Component {
  constructor(props) {
    super(props);
    this.state= {activeRow:this.props.currentRow}
  }

  updateUserConfig(num, color){
	  this.props.updateUserConfig(num,color)
  }
  // handleResultsChange(results){
  //   this.props.handleResultsChange(results)
  // }

  render() {
    return (
      <div className={
        this.props.currentRow === this.props.rowNum ? 
		  'active gameboard__user-config-wrapper' : 
		  'disabled gameboard__user-config-wrapper'
      }  key={this.props.currentRow}
	  >
		  	<div className="gameboard__user-config">
                {[...Array(4)].map((x, i) =>
                    <Slot key={i} slotNum={i} rowNum={this.props.rowNum} selectedColor={this.props.selectedColor} updateUserConfig={this.props.updateUserConfig} userConfig={this.props.userConfig}></Slot>
                )}
            </div>
            <Check userConfig={this.props.userConfig} rowNum={this.props.rowNum} currentRow={this.props.currentRow} onRowChange={this.props.onRowChange} configuration={this.props.configuration} handleResultsChange={this.props.handleResultsChange} results={this.props.results}></Check>
      </div>
    );
  }
}
export default SlotRow;