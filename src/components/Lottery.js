import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
export default class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 10,
    maxNum: 100
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls })
    };
  }

  generateBalls = () =>
    Array.from({ length: this.props.numBalls }, () =>
      Math.floor(Math.random() * this.props.maxNum + 1)
    );

  handleClick = () => {
    this.setState({ nums: this.generateBalls() });
  };

  render() {
    const balls = this.state.nums.map((num, index) => (
      <LotteryBall key={index} num={num} />
    ));

    return (
      <div className="Lottery">
        {this.props.title && <h2>{this.props.title}</h2>}
        <div className="Lottery-balls">{balls}</div>
        <button className="Lottery-button" onClick={this.handleClick}>
          Generate
        </button>
      </div>
    );
  }
}
