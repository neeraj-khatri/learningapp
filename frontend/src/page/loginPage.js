import React from 'react';
import Login from '../component/login'

const Home = () => {
  return (
    <div class="newline">
      <Login/>
      <h1>Login </h1>
      <p>This is a simple React application demonstrating routing with React Router.</p>
      <p>Feel free to explore the different routes!</p>
    </div>
  );
}

export default Home;