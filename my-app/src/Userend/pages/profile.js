import UserendHeader from "../Component/header";
import nopath from "./image/NoPath .png";
import NoPath2 from "./image/NoPath2.png";
import "./profile.css";
function UserendProfile() {
  return (
    <div>
      <UserendHeader />

      <div class="container-fluid">

        <div class="row">

          <div class="col-12  bg-primary" id="bgclr"></div>

        </div>
        <div class="container border bordr-dark"id="contaner">
          <div class="row py-3">

            <div className="col-md-4 col-6  py-2 text-center border border-dark">PROFILE</div>
            <div className="col-md-4 col-6  py-2 text-center border border-dark">EDIT PROFILE</div>
            <div className="col-md-4 col-6  py-2 text-center border border-dark">FORGET PASSWORD</div>
            <div className="col-md-4 col-6  py-2 text-center border border-dark">PHONE VARIFICATION</div>
            <div className="col-md-4 col-6  py-2 text-center border border-dark">EMAIL VARIFICATION</div>
            <div className="col-md-4 col-6  py-2 text-center border border-dark">REVIEWS</div>

          </div>{" "}

          {/*row div  */}

          <div class="row mt-4 border border-dark">

            <div class="col-6" id="chose">

              <input type="file" class="form-control"></input>

            </div>

            <div class="col-6" id="col6">

              <div class="row border border-dark p-0 mt-2 justify-content-between">
              
                <div class="col-4">
              
                  <h5>Name:</h5>
              
                </div>
              
                <div class="col-4">Waleed Abbasi</div>
              
              </div>{" "}
              
              {/*class row close */}
              
              <div class="row border border-dark p-0 mt-2 justify-content-between">
              
                <div class="col-4">
              
                  <h5>Role:</h5>
              
                </div>
              
                <div class="col-4">Passenger</div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Age:</h5>
                </div>
                <div class="col-4">20</div>
              </div>{" "}
              {/*class row close */}

              <div class="row border border-dark p-0 mt-2 justify-content-between">

                
                <div class="col-4">
                
                  <h5>Email:</h5>
                
                </div>
                <div class="col-6 text-end">waleedbscs088@gmail.com</div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Email Varification:</h5>
                </div>
                <div class="col-4">varified</div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Contact:</h5>
                </div>
                <div class="col-4">03155454135</div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Phone Varification:</h5>
                </div>
                <div class="col-4">Not varified</div>
              </div>{" "}
              {/*class row close */}
            </div>{" "}
            {/* 1st col-6 div close */}
            <div class="col-6" id="edit">
              {" "}
              {/* 2nd col-6 start */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Name:</h5>
                </div>
                <div class="col-6">
                  {" "}
                  <input
                    type="text"
                    value={"Waleed Abbasi"}
                    disabled
                  ></input>{" "}
                  <i class="bi bi-pencil-square"></i>
                </div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Role:</h5>
                </div>
                <div class="col-6">
                  <input type="text" value={"Passenger"} disabled></input>{" "}
                  <i class="bi bi-pencil-square"></i>{" "}
                </div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Age:</h5>
                </div>
                <div class="col-6">
                  <input type="text" value={"20"} disabled></input>{" "}
                  <i class="bi bi-pencil-square"></i>
                </div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Email:</h5>
                </div>
                <div class="col-6 text-end">
                  <input
                    type="text"
                    value={"waleedbscs088@gmail.com"}
                    disabled
                  ></input>{" "}
                  <i class="bi bi-pencil-square"></i>
                </div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Email Varification:</h5>
                </div>
                <div class="col-4">varified</div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Contact:</h5>
                </div>
                <div class="col-6">
                  <input type="text" value={"03155454135"} disabled></input>{" "}
                  <i class="bi bi-pencil-square"></i>
                </div>
              </div>{" "}
              {/*class row close */}
              <div class="row border border-dark p-0 mt-2 justify-content-between">
                <div class="col-4">
                  <h5>Phone Varification:</h5>
                </div>
                <div class="col-4">Not varified</div>
              </div>{" "}
              {/*class row close */}
            </div>{" "}
            {/*2nd col-6 close */}
            <div class="col-6" id="nopathimg">
              {" "}
              {/*Change password 1stdiv start */}
              <img src={nopath}></img>
            </div>
            <div class="col-6 mt-5" id="changepass">
              {" "}
              {/*Change password 2nddiv start */}
              <div class="row mt-5">
                <div class="col-4">
                  <h5>Current Password:</h5>
                </div>
                <div class="col-4">
                  {" "}
                  <input type="password"></input>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-4">
                  <h5>Current Password:</h5>
                </div>
                <div class="col-4">
                  {" "}
                  <input type="password"></input>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-4">
                  <h5>Current Password:</h5>
                </div>
                <div class="col-4">
                  {" "}
                  <input type="password"></input>
                </div>
              </div>
              <div class="row text-end mt-3 py-2">
                <div class="col-8 text end p-0">
                  <button
                    class="btn btn-primary  border border-dark px-4"
                    id="btn"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>{" "}
            {/*Change password 2nddiv close */}
            <div class="col-6 mt-5" id="varifying">
              <img src={NoPath2}></img>
            </div>
            <div class="col-6 mt-5 border border-dark" id="passvarify">
              <div class="row mt-3">
                <div class="col-4">
                  <h5>Phone Number:</h5>
                </div>
                <div class="col-4 "> 031545352</div>
              </div>

              <div class="row mt-4">
                <div class="col-10 text-end primary">
                  <a href="#">Sand Code:</a>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-4">
                  <h5>Code:</h5>
                </div>
                <div class="col-4 ">
                  {" "}
                  <input type="password"></input>
                </div>
              </div>

              <div class="row text-end mt-5 py-2">
                <div class="col-10 text end p-0">
                  <button
                    class="btn btn-primary  border border-dark px-4"
                    id="btn"
                  >
                    verify
                  </button>
                </div>
              </div>
            </div>
            {/* Email varification */}
            <div class="col-md-6 mt-5" id="varify">
              <img src={NoPath2} className="img-fluid"></img>
            </div>
            <div class="col-md-6 border border-dark mt-5">

              <div class="row mt-3 border border-dark">

                <div class="col-sm-6" id="Emailid">
                  <h5>Email:</h5>
                </div>
                <div class="col-sm-6" id="UserEmail">waleedbscs088@gmail</div>
                </div>

                <div class="row mt-4 border border-dark">
                  <div class="col-12 text-end primary" id="buttonsendcode">
                    <a href="#">Send Code:</a>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-sm-6" id="codelabel">
                    <h5>Code:</h5>
                  </div>
                  <div class="col-sm-6 px-0">
                   
                    <input type="password" className="form-control"></input>
                  </div>
                  </div>
                

                <div class="row py-2 mt-4 border border-dark ">
                  <div class="col-12 text-center border border-dark py-2" id="verificationbutton">
                    <button
                      class="btn btn-primary  border border-dark px-4 py-2"
                      id="btnverify">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            
          </div>{" "}
          {/* 2nd row div close */}
        </div>{" "}
        {/* container div     */}
      </div>
    </div>
  )
}
export default UserendProfile
