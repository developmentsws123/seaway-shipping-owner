
// function Login() {
//   let loginEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   let loginpassword = /^[A-Za-z]+@[0-9]{2,3}$/;

//   let Lemail = loginEmail.test(document.getElementById('LoginEmail').value);
//   let Lpassword = loginpassword.test(document.getElementById('password').value);
//   if (document.getElementById('LoginEmail').value == '') {
//     alert('Enter Email First then login');
//   } else if (document.getElementById('password').value == '') {
//     alert('Enter password First then login');
//   } else if (Lemail == false) {
//     alert('Invalid Email...Type valid Email then Submit');
//   } else if (Lpassword == false) {
//     alert(
//       "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
//     );
//   } else {
//     document.getElementById('loginform').submit();
//   }
// }
export default Login;
