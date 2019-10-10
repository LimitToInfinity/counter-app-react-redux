import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { counterActions } from "./actions/counterActions";

const App = (props) =>
{

  const { counter, minusAction, resetAction, addAction,  } = props;
  
  return(
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={ () => minusAction() }>-</button>
      <button onClick={ () => resetAction() }>reset</button>
      <button onClick={ () => addAction() }>+</button>
    </div>
  );
}

const mapStateToProps = ({ counter, toDos }) =>
({
  counter,
  toDos,
});

// const mapDispatchToProps = (dispatch) => ({
//   add: (action) => dispatch(action),
// });

export default connect(mapStateToProps, counterActions)(App);