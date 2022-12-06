import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
    err: null,
  });
  const handleClick = (e) => {
    setState((prevState) => calculate(prevState, e.target.textContent));
  };
  return (
    <div className="container">
      <div className="CalcHeading">
        <h1>Lets Do Some Maths</h1>
      </div>
      <div className="MainCalc">
        <form>
          <div className="input">
            {state.next || state.operation || state.total || state.err || 0}
          </div>
        </form>
        <div className="btn">
          <button type="button" onClick={handleClick} name="AC">
            AC
          </button>
          <button type="button" onClick={handleClick} name="+/-">
            +/-
          </button>
          <button type="button" onClick={handleClick} name="%">
            %
          </button>
          <button className="d" onClick={handleClick} type="button" name="÷">
            ÷
          </button>
          <button type="button" onClick={handleClick} name="9">
            9
          </button>
          <button type="button" onClick={handleClick} name="8">
            8
          </button>
          <button type="button" onClick={handleClick} name="7">
            7
          </button>
          <button className="d" onClick={handleClick} type="button" name="x">
            x
          </button>
          <button type="button" onClick={handleClick} name="6">
            6
          </button>
          <button type="button" onClick={handleClick} name="5">
            5
          </button>
          <button type="button" onClick={handleClick} name="4">
            4
          </button>
          <button className="d" onClick={handleClick} type="button" name="-">
            -
          </button>
          <button type="button" onClick={handleClick} name="3">
            3
          </button>
          <button type="button" onClick={handleClick} name="2">
            2
          </button>
          <button type="button" onClick={handleClick} name="1">
            1
          </button>
          <button className="d" onClick={handleClick} type="button" name="+">
            +
          </button>
        </div>
        <div className="last">
          <button type="button" onClick={handleClick} name="0">
            0
          </button>
          <button type="button" onClick={handleClick} name=".">
            .
          </button>
          <button className="d" onClick={handleClick} type="button" name="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
