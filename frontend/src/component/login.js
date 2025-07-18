import React, {useState} from 'react';


const Login = () => {
  
const [role, setRole] = React.useState("student");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function formSubmit(e) {
    e.preventDefault(); // Prevent form refresh

    const payload = {
      role,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: "include",
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



function handleRole(e){

 setRole(e.target.value);

}

function handleEmail(e){
   setEmail(e.target.value); 
}

function handlePassword(e){
   setPassword(e.target.value); 
}

  return (
    <div class="newline">
      <form >
        <input type="text" onChange={handleEmail} placeholder="email"></input><br></br>
        <input type="text" onChange={handlePassword} placeholder="password"></input><br></br><br></br>
      
        <select  onChange={handleRole} name="role" style={{width: "170px",height: "30px"}}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select><br></br><br></br>

        <button onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;