import React from "react";
import Slot from "../Slot/Slot.js";
import Check from "../Check/Check.js";
import StyledSlotRow from "./StyledSlotRow.js";
import StyledSlotWrapper from "./StyledSlotWrapper.js";

class SlotRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeRow: this.props.currentRow };
  }

  updateUserConfig(num, color) {
    this.props.updateUserConfig(num, color);
  }

  render() {
    return (
      <StyledSlotWrapper activeState={this.props.currentRow === this.props.rowNum ? true : false}
        key={this.props.currentRow}
      >
        <StyledSlotRow>
          {[...Array(4)].map((x, i) => (
            <Slot
              key={i}
              slotNum={i}
              rowNum={this.props.rowNum}
              selectedColor={this.props.selectedColor}
              updateUserConfig={this.props.updateUserConfig}
              userConfig={this.props.userConfig}
              activeState={this.props.currentRow === this.props.rowNum ? true : false}
            ></Slot>
          ))}
        </StyledSlotRow>
        <Check
          restart = {this.props.restart}
          userConfig={this.props.userConfig}
          rowNum={this.props.rowNum}
          currentRow={this.props.currentRow}
          onRowChange={this.props.onRowChange}
          configuration={this.props.configuration}
          handleResultsChange={this.props.handleResultsChange}
          results={this.props.results}
          loose={this.props.loose}
          activeState={this.props.currentRow === this.props.rowNum ? true : false}
        ></Check>
      </StyledSlotWrapper>
    );
  }
}
export default SlotRow;
