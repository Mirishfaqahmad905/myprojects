import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1
      };
    case 'decrement':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const Reduxes = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux in React JS</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement </button>
    </>
  );
};

export default Reduxes;
