import React from 'react';
import '../App.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" />
        </form>
        <div className="btn">
          <button type="button" name="0">
            AC
          </button>
          <button type="button" name="0">
            +/-
          </button>
          <button type="button" name="0">
            %
          </button>
          <button className="d" type="button" name="0">
            ÷
          </button>
          <button type="button" name="0">
            9
          </button>
          <button type="button" name="0">
            8
          </button>
          <button type="button" name="0">
            7
          </button>
          <button className="d" type="button" name="0">
            x
          </button>
          <button type="button" name="0">
            6
          </button>
          <button type="button" name="0">
            5
          </button>
          <button type="button" name="0">
            4
          </button>
          <button className="d" type="button" name="0">
            -
          </button>
          <button type="button" name="0">
            3
          </button>
          <button type="button" name="0">
            2
          </button>
          <button type="button" name="0">
            1
          </button>
          <button className="d" type="button" name="0">
            +
          </button>
        </div>
        <div className="last">
          <button type="button" name="0">
            0
          </button>
          <button type="button" name="0">
            .
          </button>
          <button className="d" type="button" name="0">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
