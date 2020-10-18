import React from "react";
import Results from "../Results/Results.js";
import {Button} from "@material-ui/core";

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let tempConfig = [...this.props.configuration.map(color => color.name)];
    let tempUserConfig = [...this.props.userConfig[this.props.rowNum]];
    let results = [];
    this.props.configuration.forEach((item, index) => {
      console.log(item.name, index, this.props.userConfig[this.props.rowNum][index], item === this.props.userConfig[this.props.rowNum][index]);
      if (item.name === this.props.userConfig[this.props.rowNum][index]) {
        results.push("black");
        tempConfig[index] = ""; //remove from user temp
        tempUserConfig[index] = "";
      }
    });
    let tempConfigSec = [...tempConfig];
    let tempUserConfigSec = [...tempUserConfig];

    tempUserConfig.forEach((item, index) => {
      if (tempConfigSec.includes(item) && item) {
        results.push("white");
        tempUserConfigSec.splice(index, 1); //remove from user temp
        tempConfigSec.splice(tempConfigSec.indexOf(item), 1);
      }
    });
    this.props.handleResultsChange(results);
    if(results.join('') === "blackblackblackblack"){
      alert('you won');
      this.props.restart();
    }else if(this.props.rowNum===0){
      this.props.loose();
    }else{
      this.props.onRowChange();
    }
  }

  render() {
    return (
      <>
        {!this.props.userConfig[this.props.rowNum].includes(null) && this.props.activeState && (
          <Button size="small" variant="outlined" color="primary" className="gameboard__check" onClick={this.handleClick}>
            Check
          </Button>
        )}
        <div className="gameboard__user-result">
          <Results colors={this.props.results[this.props.rowNum]}></Results>
        </div>
      </>
    );
  }
}
export default Check;
