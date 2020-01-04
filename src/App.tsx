import './App.scss';

import React from 'react';
import { connect } from 'react-redux';

import { increment } from './actions';
import { decrement } from './actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type Props = {
  counter: number,
  incr: () => void,
  decr: () => void
}

class App extends React.Component<Props> {
  render() {
    const props = this.props;
    return (
      <div className="container">
        <h1>counter {props.counter}</h1>
        <button className='btn btn-primary' onClick={props.incr}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className='btn btn-primary' onClick={props.decr}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
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
