

import React from 'react';
import Pin from '../Pin/Pin.js';

class Configuration extends React.Component {
    
    constructor(props) {
        super(props);
      }
    render() {
        return (
        <div className="gameboard__configuration-wrapper">
            {this.props.colors.map((item)=>{
				return <div className={`gameboard__pin gameboard__pin--${item}`} key={`${item}`} data-color={`${item}`}></div>
			})}
        </div>
        );
    }
}
export default Configuration;