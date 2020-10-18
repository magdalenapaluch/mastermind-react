import React from "react";
import StyledResults from './StyledResults.js';
import StyledResultSlot from './StyledResultSlot.js';

class Results extends React.Component {

  render() {
    return (
      <StyledResults>
        {/* generate as many as is in the array */}
        {this.props.colors.map((x, i) => (
          <StyledResultSlot color={this.props.colors[i]} key={i} ></StyledResultSlot>
        ))}
        {/* generate the rest (the empty ones), so in sum there is four */}
        {[...Array(4 - this.props.colors.length)].map((x, i) => (
          <StyledResultSlot key={i}></StyledResultSlot>
        ))}
      </StyledResults>
    );
  }
}
export default Results;