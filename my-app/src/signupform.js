import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


// import Submit from './Submit';

import './signupform.css';
import Create from './CreateAccount';
import Home from './Ownerpanel/Home'
// import Login from './login';
function Signup() {

  
  const navigate=useNavigate();
  const [Firstname, first] = useState('');
  const [Lastname, last]=useState('');
  const [username,user]=useState('');
  const [Email,mail]=useState('');
  const [password,secure]=useState('');
  const [confirmpassword,secure1]=useState('');
  const [loginemail, lemail] = useState('')
  const [loginpasswprd,lpassword]=useState('');



  function Submit() {

  

    let F = /^[A-Za-z]+$/;
    let L = /^[A-Za-z]+$/;
    let U = /^[A-Za-z]+@[0-9]{1,3}$/;
    let p = /^[A-Za-z]+@[0-9]{1,3}$/;
    let E = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let FMaxLength = 12;
    let LMaxLength = 12;
    let UMinLength = 7;
  
    let Fname = F.test(document.getElementById('Firstname').value);
    let lname = L.test(document.getElementById('Lastname').value);
    let UName = U.test(document.getElementById('Username').value);
    let p1 = p.test(document.getElementById('Password').value);
    let E1 = E.test(document.getElementById('Email').value);
  
    if (document.getElementById('Firstname').value == '') {
      alert('Enter First Name ');
    } else if (document.getElementById('Lastname').value == '') {
      alert('Enter Last Name');
    } else if (document.getElementById('Username').value == '') {
      alert('Enter Userame');
    } else if (document.getElementById('Email').value == '') {
      alert('Enter Email');
    } else if (document.getElementById('Password').value == '') {
      alert('Enter password');
    } else if (document.getElementById('confirmpassword').value == '') {
      alert('Enter Confirm password');
    } else if (
      document.getElementById('Password').value !=
      document.getElementById('confirmpassword').value
    ) {
      alert('your confirm password does not match');
    } else if (
      document.getElementById('Firstname').value.length < 3 ||
      document.getElementById('Firstname').value.length > FMaxLength
    ) {
      alert('The first name you enter is not in valid length');
    } else if (
      document.getElementById('Lastname').value.length < 3 ||
      document.getElementById('Lastname').value.length > LMaxLength
    ) {
      alert('The last name you enter is not in valid length');
    } else if (document.getElementById('Username').value.length < UMinLength) {
      alert(
        'The username you created is not in valid length enter minimum 7 character',
      );
    } else if (Fname == false) {
      alert('Enter only alphabets on firstname not another character');
    } else if (lname == false) {
      alert('Enter only alphabets on lastname  not another character');
    } else if (UName == false) {
      alert(
        "Follow this pattern which i write in bracket and then make username('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      );
    } else if (E1 == false) {
      alert('Invalid Email...Type valid Email then Submit');
    } else if (p1 == false) {
      alert(
        "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      );
    } else {
      Axios.post("http://localhost:5000/Signup",{
       owFirstname:Firstname,
        owlastname:Lastname,
        owEmail:Email,
        owpassword:password,
        owconpassword:confirmpassword,
        owusername:username,
      }).then((result)=>{ 
        console.log(result.data);
        if(result.data=="Record Successfully Inserted")
        {
          alert("You have successfully login");

        }
        


      });  
      
    };
    
  }
  function Login() {

    let owlEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let owlpassword = /^[A-Za-z]+@[0-9]{2,3}$/;
  
    let Lemail = owlEmail.test(document.getElementById('LoginEmail').value);
    let Lpassword = owlpassword.test(document.getElementById('password').value);
    if (document.getElementById('LoginEmail').value == '') {
      alert('Enter Email First then login');
    } else if (document.getElementById('password').value == '') {
      alert('Enter password First then login');
    } else if (Lemail == false) {
      alert('Invalid Email...Type valid Email then Submit');
    } else if (Lpassword == false) {
      alert(
        "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      );
    } else {
      Axios.post('http://localhost:5000/login',{
        OwloEmail:loginemail,
        Owlopassword:loginpasswprd,
      }).then((response)=>{
   

        if(response.data.message)
        {
          document.getElementById('resp').innerHTML=response.data.message;
          console.log(response.data.message)
          console.log(response);
        }
        else 
        {
          document.getElementById('resp').innerHTML="Successfully login";
          console.log(response.data[0].User_name+response.data[0].Email)
          console.log(response.data[0]);

         for (let key in response.data[0]) {
          console.log(key+":"+response.data[0][key])
         

         
         }
         localStorage.setItem("data",JSON.stringify(response.data[0])) 
      
         

      
      

          
         
         
          navigate("/Home");
    
          


        }

      });
    };
  }
  
  
  return (

    <div id="maindiv">
      <div id="form">
        <div id="heading">
          <h3>Register to Company</h3>
        </div>
        <hr id="hr1"></hr>
        <div id="signup">
          <form
          action="index.js"
          method="POST"
            autoComplete="off"
            id="myform"
          >
            <input
              type="text"
              placeholder="First Name"
              id="Firstname"
              name="Firstname"
              value={Firstname}
              onChange={(e)=>{first(e.target.value)}}
            ></input>

            <input
              type="text"
              placeholder="Last Name"
              id="Lastname"
              name="Lastname"
              value={Lastname}
              onChange={(e)=>{last(e.target.value)}}
            ></input>

            <input
              type="text"
              placeholder="Username"
              id="Username"
              name="username"
              value={username}
              onChange={(e)=>{user(e.target.value)}}
            ></input>

            <input
              type="email"
              placeholder="Email"
              id="Email"
              name="Email"
              value={Email}
              onChange={(e)=>{mail(e.target.value)}}
            ></input>

            <input
              type="password"
              placeholder="Password"
              id="Password"
              name="password1"
              value={password}
              onChange={(e)=>{secure(e.target.value)}}
            ></input>

            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e)=>{secure1(e.target.value)}}
            ></input>
          </form>
          <button onClick={Submit}>Sign up</button>
        </div>
        <div id="getdatausingapi">
          <button id="facebook">
            <i className="fa-brands fa-facebook-f"></i> &nbsp;&nbsp;Sign up with
            Facebook
          </button>
          <button id="google">
            <i className="fa-brands fa-google"></i> &nbsp;&nbsp;Sign up with
            Google
          </button>
        </div>
        {/* <div id="divid"></div> */}

        <div id="Heading1">
          <h3>LOGIN</h3>
        </div>
        <div id="login">
          <hr id="hr"></hr>
          <form>
            <input
              type="text"
              placeholder="Email"
              id="LoginEmail"
              name="LoginEmail"
              value={loginemail}
              onChange={(e)=>lemail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={loginpasswprd}
              onChange={(e)=>lpassword(e.target.value)}
            ></input>
          </form>
          <button onClick={Login}>login</button>
        </div>

        <div id="logingetdataapi">
          <button id="facebook1">
            <i className="fa-brands fa-facebook-f"></i> &nbsp;&nbsp;Sign up with
            Facebook
          </button>
          <button id="google1">
            <i className="fa-brands fa-google"></i> &nbsp;&nbsp;Sign up with
            Google
          </button>
          <button id="CreateAccount" onClick={Create}>
            Create Account
          </button>
        </div>
      </div>
      <div id="resp"></div>
    
    </div>
  );
}

export default Signup;
