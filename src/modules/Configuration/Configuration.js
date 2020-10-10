

import React from 'react';

class Configuration extends React.Component {
    
    constructor(props) {
        super(props);
      }
    render() {
        return (
        <div className="gameboard__configuration-wrapper">
            {this.props.colors.map((item)=>{
				return <div className={`gameboard__pin gameboard__pin--${item.name}`} key={`${item.name}`}></div>
			})}
        </div>
        );
    }
}
export default Configuration;