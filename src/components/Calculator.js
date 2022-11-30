import React from 'react';
/* eslint-disable react/destructuring-assignment */
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
      err: null,
    };
    this.handleClick = (e) => {
      this.setState((prevState) => calculate(prevState, e.target.textContent));
    };
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="input">
            {this.state.next || this.state.operation || this.state.total || this.state.err || 0}
          </div>
        </form>
        <div className="btn">
          <button type="button" onClick={this.handleClick} name="AC">
            AC
          </button>
          <button type="button" onClick={this.handleClick} name="+/-">
            +/-
          </button>
          <button type="button" onClick={this.handleClick} name="%">
            %
          </button>
          <button className="d" onClick={this.handleClick} type="button" name="÷">
            ÷
          </button>
          <button type="button" onClick={this.handleClick} name="9">
            9
          </button>
          <button type="button" onClick={this.handleClick} name="8">
            8
          </button>
          <button type="button" onClick={this.handleClick} name="7">
            7
          </button>
          <button className="d" onClick={this.handleClick} type="button" name="x">
            x
          </button>
          <button type="button" onClick={this.handleClick} name="6">
            6
          </button>
          <button type="button" onClick={this.handleClick} name="5">
            5
          </button>
          <button type="button" onClick={this.handleClick} name="4">
            4
          </button>
          <button className="d" onClick={this.handleClick} type="button" name="-">
            -
          </button>
          <button type="button" onClick={this.handleClick} name="3">
            3
          </button>
          <button type="button" onClick={this.handleClick} name="2">
            2
          </button>
          <button type="button" onClick={this.handleClick} name="1">
            1
          </button>
          <button className="d" onClick={this.handleClick} type="button" name="+">
            +
          </button>
        </div>
        <div className="last">
          <button type="button" onClick={this.handleClick} name="0">
            0
          </button>
          <button type="button" onClick={this.handleClick} name=".">
            .
          </button>
          <button className="d" onClick={this.handleClick} type="button" name="=">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
