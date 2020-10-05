import React from "react";
import Results from "../Results/Results.js";

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('change');
    let tempConfig = [...this.props.configuration];
    let tempUserConfig = [...this.props.userConfig[this.props.rowNum]];
    let results = [];

    this.props.configuration.forEach((item, index) => {
      if (item === this.props.userConfig[this.props.rowNum][index]) {
        results.push("black");
        tempConfig[index] = ""; //remove from user temp
        tempUserConfig[index] = "";
      }
    });
    tempConfig.forEach((item, index) => {
      // console.log(tempConfig, tempUserConfig);
      if (tempUserConfig.includes(item) && item) {
        results.push("white");
        tempConfig.splice(index, 1); //remove from user temp
        tempUserConfig.splice(tempUserConfig.indexOf(item), 1);
      }
    });
    this.props.handleResultsChange(results);
    if(results === ["black","black","black","black"]){
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
