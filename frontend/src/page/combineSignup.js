import React from 'react';
import { Link } from 'react-router-dom';


const CombineSignup = () => {
  return (
    <div class="navbar-outer">
          <ul class="navbar">
            <li style={{ listStyle: "none"}}>
                <Link to="/teacherSignup">
                <img height = "200px" style={{ borderRadius: "10px" }} width="200px" src="/teacher.jpg" alt="My Pic" /><br></br>
 
                Teacher Signup</Link>
    
            </li>   <br></br>
            <li style={{ listStyle: "none"}}>
                <Link to="/studentSignup"><img style={{ borderRadius: "10px" }} height = "200px" width="200px" src="/student.jpg" alt="My Pic" /><br></br>
                Student Signup</Link>
    
            </li>

            </ul>
    </div>
  );
}

export default CombineSignup;