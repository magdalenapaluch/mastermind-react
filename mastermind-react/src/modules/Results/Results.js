import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    // this.results = [];
  }

  render() {
    return (
      <>
        {this.props.colors.map((x, i) => (
          <div
            className="gameboard__result-slot"
            key={i}
            data-color={this.props.colors[i]}
          ></div>
        ))}
        {[...Array(4 - this.props.colors.length)].map((x, i) => (
          <div className="gameboard__result-slot" key={i}></div>
        ))}
      </>
    );
  }
}
export default Results;