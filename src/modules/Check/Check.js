import React from "react";
import Results from "../Results/Results.js";

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let tempConfig = [...this.props.configuration.map(color => color.name)];
    let tempUserConfig = [...this.props.userConfig[this.props.rowNum]];
    let results = [];
console.log(tempConfig, tempUserConfig, this.props.configuration.length);
    this.props.configuration.forEach((item, index) => {
      console.log(item, index, this.props.userConfig[this.props.rowNum][index], item === this.props.userConfig[this.props.rowNum][index]);
      if (item === this.props.userConfig[this.props.rowNum][index]) {
        results.push("black");
        tempConfig[index] = ""; //remove from user temp
        tempUserConfig[index] = "";
      }
    });
    let tempConfigSec = [...tempConfig];
    let tempUserConfigSec = [...tempUserConfig];

    // console.log(tempUserConfig, tempConfig, tempUserConfigSec, tempConfigSec);
    tempUserConfig.forEach((item, index) => {
      // console.log(tempUserConfigSec, item, tempUserConfigSec.indexOf(item));
      if (tempConfigSec.includes(item) && item) {
        results.push("white");
        tempUserConfigSec.splice(index, 1); //remove from user temp
        tempConfigSec.splice(tempConfigSec.indexOf(item), 1);
      }
    });
    this.props.handleResultsChange(results);
    if(results.join('') == "blackblackblackblack"){
      alert('you won');
    }
    this.props.onRowChange();
  }

  render() {
    return (
      <>
        {!this.props.userConfig[this.props.rowNum].includes(null) && (
          <button className="gameboard__check" onClick={this.handleClick}>
            Check
          </button>
        )}
        <div className="gameboard__user-result">
          <Results colors={this.props.results[this.props.rowNum]}></Results>
        </div>
      </>
    );
  }
}
export default Check;
