import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset,incrementByAmount } from '../features/counter/counterSlice';


const StoreComponent = () => {


  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

function payload(){

   dispatch(incrementByAmount(500))
   
}

  return (
    <div class="newline">
     
     <h1> Store Welcome </h1>

      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔁 Reset</button>
      <button onClick={payload}>🔁 Payload</button>


    </div>
  );
}

export default StoreComponent;