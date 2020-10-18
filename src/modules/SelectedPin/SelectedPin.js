import React from "react";
import StyledPin from "../Pin/StyledPin.js";

class SelectedPin extends React.Component {
  render() {
    return (
      <StyledPin
        className="gameboard__pin gameboard__pin--selected"
        color={this.props.color}
      ></StyledPin>
    );
  }
}
export default SelectedPin;
