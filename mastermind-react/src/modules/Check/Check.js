import React from "react";
import Results from '../Results/Results.js';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {results:[], isClicked:false};
  }

  handleClick() {

    let tempConfig = [...this.props.configuration];
    let tempUserConfig = [...this.props.userConfig];

	this.setState({isClicked: true});
    this.props.configuration.forEach((item, index) => {
      if (item === this.props.userConfig[index]) {
        this.state.results.push("black");
        tempConfig[index] = ''; //remove from user temp
        tempUserConfig[index] = '';
      }
    });
    tempConfig.forEach((item, index) => {
		console.log(tempConfig, tempUserConfig);
      if (tempUserConfig.includes(item) && item) {
        this.state.results.push("white");
        tempConfig.splice(index, 1); //remove from user temp
        tempUserConfig.splice(tempUserConfig.indexOf(item), 1);
      }
	});
	console.log(this.state.results)
  }

  render() {
    return (
      <>
        {!this.props.userConfig.includes(null) && (
          <button className="gameboard__check" onClick={this.handleClick}>
            Check
          </button>
        )}
        <div className="gameboard__user-result">
			<Results colors={this.state.results}></Results>
		</div>
      </>
    );
  }
}
export default Check;
