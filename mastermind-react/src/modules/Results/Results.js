import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    // this.results = [];
  }

  render() {
    return (
      <>
      {console.log(this.props.colors.length, this.props.colors)}
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

// import React from "react";
// import Results from "../Results/Results.js";

// class Check extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isClicked: false };
//     this.handleClick = this.handleClick.bind(this);
//     this.results = [];
//   }

//   handleClick() {
//     let tempConfig = [...this.props.configuration];
//     let tempUserConfig = [...this.props.userConfig];

//     this.setState({ isClicked: true }); // button clicked

//     this.props.configuration.forEach((item, index) => {
//       if (item === this.props.userConfig[index]) {
//         this.results.push("black");
//         tempConfig[index] = ""; //remove from user temp
//         tempUserConfig[index] = "";
//       }
//     });
//     tempConfig.forEach((item, index) => {
//       if (item === tempUserConfig[index] && item) {
//         this.results.push("white");
//         tempConfig.splice(index, 1); //remove from user temp
//         tempUserConfig.splice(index, 1);
//       }
//     });
//     console.log(this.results);
//   }

//   render() {
//     return (
//       <>
//         {!this.props.userConfig.includes(null) && (
//           <button className="gameboard__check" onClick={this.handleClick}>
//             Check
//           </button>
//         )}
//         {this.state.isClicked && (

//           <div className="gameboard__user-result">
//             {["#00000","black","white"].forEach((color, index) => {
// 				return (
//                 <div
//                   className="gameboard__result-slot"
//                   key={index}
//                   data-color={color}
//                 ></div>
// 			)})}
//           </div>
//         )}
//       </>
//     );
//   }
// }
// export default Check;
