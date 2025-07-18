const TeacherSignupModel = require('../models/teacherSignupModel'); // Adjust the path as necessary
const studentSignupModel = require('../models/studentSignupModel');
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const SECRET_KEY = "my_secret";

  const { role, email, password } = req.body;

  if (!role || !email || !password) {
    return res.status(400).json({ message: "Role, username, and password are required" });
  }

  if(role == "student"){
    console.log("Student login attempt:", { role, email, password }); 

    const user = await studentSignupModel.findOne({ email: email, password: password  });

    if (user) {
      const token = jwt.sign(
      { email: email, role:"student"  },
      SECRET_KEY,
      { expiresIn: "1h" } // token valid for 1 hour
    );
    
    res.cookie("token", token, {
      httpOnly: true,       // can't be accessed from JS
      secure: true,         // only sent on HTTPS (set to false in dev if needed)
      sameSite: "Strict",   // CSRF protection
      maxAge: 1000 * 60 * 60, // 1 hour
    });

    res.status(200).json({ message: "Login successful", token });

    console.log("Username already exists");
    } else {
      console.log("Username is available");
    }
  }

  if(role=="teacher"){
    console.log("Teacher login attempt:", { role, email, password });
  }


  

}

async function teacherSignupHandler(req, res) {

//console.log(req.body);
const { name,email,username,password } = req.body;
//console.log(name,email,username,password);
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const newUser = new TeacherSignupModel({ 
        name,
        email,
        username,
        password
     }); 
    await newUser.save();
    res.json({ message: "Name saved to MongoDB", user: newUser });
  } catch (err) {
    console.error("Error saving to DB:", err);
    res.status(500).json({ message: "Error saving to MongoDB" });
  }


}


async function studentSignupHandler(req, res) {

//console.log(req.body);
const { name,email,username,password } = req.body;
//console.log(name,email,username,password);
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  try {
    const newUser = new studentSignupModel({ 
        name,
        email,
        username,
        password
     }); 
    await newUser.save();
    res.json({ message: "Name saved to MongoDB", user: newUser });
  } catch (err) {
    console.error("Error saving to DB:", err);
    res.status(500).json({ message: "Error saving to MongoDB" });
  }


}

module.exports = {
    teacherSignupHandler,
    studentSignupHandler,
    login,
}