import "./login.css";
function Login() {
  return (
    <div class="container-fluid userlogin background  ">
      <div class="row login align-content-center justify-content-center border border-dark">
        <div class="col-4 login border border-dark">
          <form>
           <h1 >Login</h1>

            <div class="row">
              <div class="col-12 mt-3">
              <label for="InputEmail1" class="form-label"><h5>Email address </h5></label>
              </div>
            <div class="row"> <div class="col-12 mt-3">
            <input type="email" class="form-control form control-lg" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
            </div>
            </div>
            </div>
            <div class="row mt-3"> <div class="col-12 "><label for="InputPassword1" class="form-label"><h5>Password</h5></label>
</div>
<div class="col-12 mt-3">
<input type="password" class="form-control" id="InputPassword1" placeholder="password"></input>
</div>
  </div>
 <div class="row mt-3"> <div class="col-12"><button type="submit" class="btn btn-primary">Submit</button>
</div>
 </div>
   <div class="row mt-3">
    <div class="col-12"><i class="bi bi-facebook fs-5 p-4" id="face"></i>  <i class="bi bi-whatsapp text-success fs-5" id="whats"></i>
</div>

   </div>
          </form>
          
           </div>
        </div>
      </div>

  );
}
export default Login;
