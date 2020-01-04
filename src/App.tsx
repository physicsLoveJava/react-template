import './App.css';

import React from 'react';
import { connect } from 'react-redux';

import { increment } from './actions';
import { decrement } from './actions';

type Props = {
  counter: number,
  incr: () => void,
  decr: () => void
}

class App extends React.Component<Props> {
  render() {
    const props = this.props;
    return (
      <div className="App">
        <h1>counter {props.counter}</h1>
        <button onClick={props.incr}>+</button>
        <button onClick={props.decr}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    incr: () => {
      dispatch(increment())
    },
    decr: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
