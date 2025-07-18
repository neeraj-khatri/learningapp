import React from 'react';
import { useState } from 'react';



const Signup = () => {
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");


function handleName(e){
   setName(e.target.value);
}

function handleUsername(e){
   setUsername(e.target.value);
}

function handlePassword(e){
   setPassword(e.target.value);
}


function handleEmail(e){
   setEmail(e.target.value);
}

  async function formSubmit(e) {
    e.preventDefault(); // Prevent form refresh

    const payload = {
      name,
      email,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/teacherSignup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        // Optionally clear form
        
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div class="newline">
        <h1>Sign Up Teacher</h1>
      <form>
        <input type="name" onChange={handleName} placeholder="name" name="name"></input><br></br>
        <input type="name" onChange={handleEmail} placeholder="email" name="email"></input><br></br>
        <input type="text" onChange={handleUsername} placeholder="username" name="username"></input> <br></br>
        <input type="text" onChange={handlePassword} placeholder="password" name="password"></input><br></br>
        <button onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;