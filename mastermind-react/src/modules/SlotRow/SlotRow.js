import React from 'react';
import Slot from '../Slot/Slot.js';

class SlotRow extends React.Component {
  render() {
    return (
      <div className="gameboard__user-config-wrapper">
		  	<div className="gameboard__user-config">
                {[...Array(4)].map((x, i) =>
                    <Slot key={`${i}`}></Slot>
                )}
            </div>
      </div>
    );
  }
}
export default SlotRow;