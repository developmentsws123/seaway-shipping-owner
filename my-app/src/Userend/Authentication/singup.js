import { useState } from 'react';
import './signup.css'
function Signup1() {
  let [FirstName,First]=useState("");
  let [LastName,Last]=useState("");
  let [Email,email]=useState("");
  let [Password,pass]=useState("");
  let [ConformPassword,Confirm]=useState("");


  return (
    <div class="container-fluid background  ">
    <div class="row align-content-center justify-content-center border border-dark">
      <div class="col-6 signup border border-dark">

         <h1>Sign Up</h1>


         <div class="row mt-5">
<form>
           <div class="col-lg-12 mt-3 col-md-12 col-sm-12">
           <label for="InputName" class="form-label"><h5>First Name:</h5> </label>
           <input type="text" class="form-control" id="InputName"  placeholder="First Name" value={FirstName} onChange={(e)=>{First(e.target.value)}}></input>

         </div>
         
           <div class="col-lg-12 mt-3 col-md-12 col-sm-12">
           <label for="InputName" class="form-label"><h5>Last Name:</h5></label>
           <input type="text" class="form-control" id="InputName"  placeholder="Last Name" value={LastName}onChange={(e)=>{Last(e.target.value)}}></input>

         </div>
         
           <div class="col-lg-12 mt-3 col-md-12 col-md-12">
           <label for="Email" class="form-label"><h5>Email:</h5></label>
           <input type="email" class="form-control" id="Email"  placeholder="Email" value={Email}onChange={(e)=>{email(e.target.value)}}></input>
         
         </div>
         
           <div class="col-lg-12 mt-3 col-md-12 col-sm-12">
           <label for="password" class="form-label"><h5>Password:</h5></label>           
         <input type="password" class="form-control" id="InputName"  placeholder="Password" value={Password}onChange={(e)=>{pass(e.target.value)}}></input>

         </div>
                   <div class="col-lg-12 mt-3 col-md-12 col-sm-12">
           <label for="password" class="form-label"> <h5>Conform Password:</h5></label>
           <input type="text" class="form-control" id="password"  placeholder="Password" value={ConformPassword}onChange={(e)=>{Confirm(e.target.value)}}></input>

         </div>
         

       
  <div class="col-lg-12 mt-3 col-md-12 col-sm-12">
  <button type="submit" class="btn btn-primary mt-2 fs-5">Submit</button>
  </div>

  <button type="submit" class="fbbtn btn-primary col-lg-12 mt-3 col-md-12 col-sm-12"><i class="bi bi-facebook"></i> Login with facebook </button>
  <button type="submit" class="whappbtn btn-green col-lg-12 mt-3 col-md-12 col-sm-12" ><i class="bi bi-whatsapp text-success"></i>login with whatsapp </button>
</form>
</div>
</div>        
</div>
</div>
          
  )
}
export default Signup1;