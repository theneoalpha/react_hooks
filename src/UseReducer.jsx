// Step 1 : useReducer hook import karenge App component me     
import React, {useReducer} from 'react'



// Step 4 : reducer function banayenge outside the app component

const reducer = (state, action) =>{
    console.log(state, action);

    // Step 4.2 : Actions define karege  

    if(action.type === "Increment"){
        return state+1;
    }
    if(action.type === "Decrement"){
        return state-1;
    }

}
export default function UseReducer() {

    // Step 2 : useReducer banayenge just like useState
    let initialState = 0;

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h1>useReducer hooks {state}</h1>

     {/* Step 3 : dispatch(setState) use karenge button me */}

             {/* <button onClick={()=>dispatch({})}>Increment</button> */}

     {/* Step 3.1 : Dispatch object ke form me data leta hai  */}
     <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>

     <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
    
    </>
  )
}
