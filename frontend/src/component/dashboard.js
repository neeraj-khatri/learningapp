import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset,incrementByAmount } from '../features/counter/users/userSlice.js';



const Dashboard = () => {

  const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    function payload(){
    
       dispatch(incrementByAmount(500))
       
    }


  return (
    <div>
      <h1>Dashboard {count}</h1>
      <p>This is a simple React application demonstrating routing with React Router.</p>
      <p>Feel free to explore the different routes!</p>
       <button onClick={payload}>🔁 Payload</button>
    </div>
  );
}

export default Dashboard;