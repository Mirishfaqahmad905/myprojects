import React, { useReducer } from 'react'

const initialState = { count: 0 }

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

const reducer = (state, action) => {
    if(action.type==='increment'){
         return {count:state.count+1}
        
    }
     else if(action.type=='decrement')
     {
         return {count:state.count-1};
     }
}

export default UseReducer;
