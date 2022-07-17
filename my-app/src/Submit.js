// import Axios from 'axios';
// import Signup from './signupform';
// function Submit() {
//   let F = /^[A-Za-z]+$/;
//   let L = /^[A-Za-z]+$/;
//   let U = /^[A-Za-z]+@[0-9]{1,3}$/;
//   let p = /^[A-Za-z]+@[0-9]{1,3}$/;
//   let E = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   let FMaxLength = 12;
//   let LMaxLength = 12;
//   let UMinLength = 7;

//   let Fname = F.test(document.getElementById('Firstname').value);
//   let lname = L.test(document.getElementById('Lastname').value);
//   let UName = U.test(document.getElementById('Username').value);
//   let p1 = p.test(document.getElementById('Password').value);
//   let E1 = E.test(document.getElementById('Email').value);

//   if (document.getElementById('Firstname').value == '') {
//     alert('Enter First Name ');
//   } else if (document.getElementById('Lastname').value == '') {
//     alert('Enter Last Name');
//   } else if (document.getElementById('Username').value == '') {
//     alert('Enter Userame');
//   } else if (document.getElementById('Email').value == '') {
//     alert('Enter Email');
//   } else if (document.getElementById('Password').value == '') {
//     alert('Enter password');
//   } else if (document.getElementById('confirmpassword').value == '') {
//     alert('Enter Confirm password');
//   } else if (
//     document.getElementById('Password').value !=
//     document.getElementById('confirmpassword').value
//   ) {
//     alert('your confirm password does not match');
//   } else if (
//     document.getElementById('Firstname').value.length < 3 ||
//     document.getElementById('Firstname').value.length > FMaxLength
//   ) {
//     alert('The first name you enter is not in valid length');
//   } else if (
//     document.getElementById('Lastname').value.length < 3 ||
//     document.getElementById('Lastname').value.length > LMaxLength
//   ) {
//     alert('The last name you enter is not in valid length');
//   } else if (document.getElementById('Username').value.length < UMinLength) {
//     alert(
//       'The username you created is not in valid length enter minimum 7 character',
//     );
//   } else if (Fname == false) {
//     alert('Enter only alphabets on firstname not another character');
//   } else if (lname == false) {
//     alert('Enter only alphabets on lastname  not another character');
//   } else if (UName == false) {
//     alert(
//       "Follow this pattern which i write in bracket and then make username('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
//     );
//   } else if (E1 == false) {
//     alert('Invalid Email...Type valid Email then Submit');
//   } else if (p1 == false) {
//     alert(
//       "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
//     );
//   } else {
//     Axios.post("http://localhost:5000/Signup",{
//       owFirstname:Firstname,
//       owlastname:Lastname,
//       owEmail:Email,
//       owpassword:password,
//       owconpassword:confirmpassword,
//       owusername:username,
//     }).then((response)=>{
//       console.log(response);

//     });  
//     document.getElementById('Firstname').value ='';
//   document.getElementById('Lastname').value ='';
//   document.getElementById('Username').value ='';
//   document.getElementById('Email').value ='';
//   document.getElementById('Password').value ='';
//   document.getElementById('confirmpassword').value ='';
    
//   }
  
  
// }

// export default Submit;