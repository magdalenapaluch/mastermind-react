

import React from 'react';
import StyledSlotRow from "../SlotRow/StyledSlotRow.js";
import StyledPin from '../Pin/StyledPin.js';

class Configuration extends React.Component {
    
    render() {
        return (
        <StyledSlotRow padding={true}>
            {this.props.colors.map((item)=>{
				return <StyledPin clickable={false} key={`${item.name}`}></StyledPin>
			})}
        </StyledSlotRow>
        );
    }
}
export default Configuration;