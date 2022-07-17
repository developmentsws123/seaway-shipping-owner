import UserendHeader from '../Component/header'
import UserendNavebar from '../Component/navebar'
import UserendFooter from '../Component/footer'
import boat from '../images/boat.jpg'
import Boat1 from '../images/boatpic1.jpg'
import Boat2 from '../images/boatpic2.jpg'
import Boat3 from '../images/boatpic3.jpg'
import Boat4 from '../images/boatpic4.jpg'
import Boat5 from '../images/boat19.jpg'
import Boat6 from '../images/boatpic6.jpg'
import Boat7 from '../images/boatpic7.jpg'
import Boat8 from '../images/boatpic12.jpg'
import Boat9 from '../images/boat22.jpg'
import { useNavigate } from 'react-router-dom'

import './boat.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
function UserBoat() {
  const navigate = useNavigate()

  const [post, updatepost] = useState([])
  const [BoatName, OwnerBoatname] = useState(null)
  const [Boatlength, OwnerBoatlength] = useState(null)
  const [BoatTitle, OwnerBoatTitle] = useState(null)
  const [BoatColor, OwnerBoatColor] = useState(null)
  const [BoatOperatorname, OwnerBoatOperatorname] = useState(null)
  const [BoatSealocation, OwnerBoatSealocation] = useState(null)
  const [BoatImonumber, OwnerBoatImonumber] = useState(null)
  const [Boatimg1, OwnerBoatimg1] = useState(null)
  const [Boatimg2, OwnerBoatimg2] = useState(null)
  const [Boatimg3, OwnerBoatimg3] = useState(null)
  const [BoatStarttingtime, OwnerBoatStarttingtime] = useState(null)
  const [BoatEndingtime, OwnerBoatEndingtime] = useState(null)
  const [BoatRoundname, OwnerBoatRoundname] = useState(null)
  const [BoatRoundrange, OwnerBoatRoundrange] = useState(null)
  const [BoatRoundprice, OwnerBoatRoundprice] = useState(null)
  const [BoatFishingFacilities, OwnerBoatFishingFacilities] = useState(null)
  const [BoatParachuteFacilities, OwnerBoatParachuteFacilities] = useState(null)
  const [BoatLifeJacket, OwnerBoatLifeJacket] = useState(null)
  const [GuestCapacity, UpdateGuestCapacity] = useState(null)
  const [ChooseTime, UpdateChooseTime] = useState(null)
  const [SelectBaotExtrafacilities, Updateboatextrafacilities] = useState(
    'Fishingfacility',
  )
  const [UserFirstname, updateUserFirstname] = useState(null)
  const [UserLastname, updateUserLastname] = useState(null)
  const [UserUsername, updateUserUsername] = useState(null)
  const [UserGmail, updateUserGmail] = useState(null)
  const [UserPassword, updateUserPassword] = useState(null)
  const [UserConfirmPassword, updateUserConfirmPassword] = useState(null)
  const [UserloginUsername, updateUserloginUsername] = useState(null)
  const [UserloginPassword, updateUserloginPassword] = useState(null)
  const [userID, updateUserID] = useState(null)
  console.log(userID)

  console.log('GuestCapacity:' + GuestCapacity)
  console.log('ChooseTime:' + ChooseTime)
  console.log('SelectBaotExtrafacilities:' + SelectBaotExtrafacilities)

  useEffect(() => {
    axios
      .post('http://localhost:5000/selectalldataofboatonload', {})
      .then((result) => {
        console.log(result)
        updatepost(result.data)
      })

    // boatdetail();
  }, [])

  const fetchPostDetails = (postDetails) => {
    document.getElementById('Boatpagecrousel').style.display = 'none'
    document.getElementById('boatprofile').style.display = 'none'
    document.getElementById('boatpostdetail').style.display = 'flex'

    OwnerBoatname(postDetails.Name)
    OwnerBoatlength(postDetails.Length)
    OwnerBoatTitle(postDetails.Titleof_Vessel)
    OwnerBoatColor(postDetails.Color)
    OwnerBoatOperatorname(postDetails.Operator_Name)
    OwnerBoatSealocation(postDetails.Sea_Location)
    OwnerBoatImonumber(postDetails.IMO_number)
    OwnerBoatStarttingtime(postDetails.daytrip_starttime)
    OwnerBoatEndingtime(postDetails.daytrip_endtime)
    OwnerBoatRoundname(postDetails.Round_name)
    OwnerBoatRoundrange(postDetails.Round_range)
    OwnerBoatRoundprice(postDetails.Round_price)
    OwnerBoatFishingFacilities(postDetails.Extrafacilityfishing)
    OwnerBoatParachuteFacilities(postDetails.Extrafacilityparachute)
    OwnerBoatLifeJacket(postDetails.Extrafacilitylifejacket)
  }

  function SubmitUserSignup() {
    let F = /^[A-Za-z]+$/
    let L = /^[A-Za-z]+$/
    let U = /^[A-Za-z]+@[0-9]{1,3}$/
    let p = /^[A-Za-z]+@[0-9]{1,3}$/
    let E = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    let FMaxLength = 12
    let LMaxLength = 12
    let UMinLength = 7

    let Fname = F.test(document.getElementById('Firstname').value)
    let lname = L.test(document.getElementById('Lastname').value)
    let UName = U.test(document.getElementById('Username').value)
    let p1 = p.test(document.getElementById('Password').value)
    let E1 = E.test(document.getElementById('Email').value)

    if (document.getElementById('Firstname').value == '') {
      alert('Enter First Name ')
    } else if (document.getElementById('Lastname').value == '') {
      alert('Enter Last Name')
    } else if (document.getElementById('Username').value == '') {
      alert('Enter Userame')
    } else if (document.getElementById('Email').value == '') {
      alert('Enter Email')
    } else if (document.getElementById('Password').value == '') {
      alert('Enter password')
    } else if (document.getElementById('confirmpassword').value == '') {
      alert('Enter Confirm password')
    } else if (
      document.getElementById('Password').value !=
      document.getElementById('confirmpassword').value
    ) {
      alert('your confirm password does not match')
    } else if (
      document.getElementById('Firstname').value.length < 3 ||
      document.getElementById('Firstname').value.length > FMaxLength
    ) {
      alert('The first name you enter is not in valid length')
    } else if (
      document.getElementById('Lastname').value.length < 3 ||
      document.getElementById('Lastname').value.length > LMaxLength
    ) {
      alert('The last name you enter is not in valid length')
    } else if (document.getElementById('Username').value.length < UMinLength) {
      alert(
        'The username you created is not in valid length enter minimum 7 character',
      )
    } else if (Fname == false) {
      alert('Enter only alphabets on firstname not another character')
    } else if (lname == false) {
      alert('Enter only alphabets on lastname  not another character')
    } else if (UName == false) {
      alert(
        "Follow this pattern which i write in bracket and then make username('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      )
    } else if (E1 == false) {
      alert('Invalid Email...Type valid Email then Submit')
    } else if (p1 == false) {
      alert(
        "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      )
    } else {
      alert('your form is proper filled')

      axios
        .post('http://localhost:5000/Usersignup', {
          usFirstname: UserFirstname,
          uslastname: UserLastname,
          usEmail: UserGmail,
          uspassword: UserPassword,
          usconpassword: UserConfirmPassword,
          ususername: UserUsername,
        })
        .then((result) => {
          console.log(result.data)
          if (result.data == 'Record Successfully Inserted') {
            alert('You have successfully login')
            document.getElementById('signupform').style.display = 'none'
            document.getElementById('Loginform').style.display = 'block'
          }
        })
    }
  }

  function Login() {
    let U = /^[A-Za-z]+@[0-9]{1,3}$/
    let userloginpassword = /^[A-Za-z]+@[0-9]{1,3}$/

    let Lusername = U.test(document.getElementById('loginusername').value)
    let Lpassword = userloginpassword.test(
      document.getElementById('loginpassword').value,
    )
    if (document.getElementById('loginusername').value == '') {
      alert('Enter Username First then login')
    } else if (document.getElementById('loginpassword').value == '') {
      alert('Enter password First then login')
    } else if (Lusername == false) {
      alert(
        "Follow this pattern which i write in bracket and then make Username('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')'),",
      )
    } else if (Lpassword == false) {
      alert(
        "Follow this pattern which i write in bracket and then make password('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
      )
    } else {
      alert('form is filled')
      axios
        .post('http://localhost:5000/userlogin', {
          userloginusernamel: UserloginUsername,
          userloginpassword: UserloginPassword,
        })
        .then((response) => {
          if (response.data.message) {
            console.log(response.data.message)
            console.log(response)
          } else {
            console.log(response.data[0].User_name + response.data[0].Email)
            console.log(response.data[0])

            localStorage.setItem('Userdata', JSON.stringify(response.data[0]))

            document.getElementById('Loginform').style.display = 'none'
            document.getElementById('selectboatform').style.display = 'block'

            updateUserID(response.data[0].USID)
            console.log(userID)
          }
        })
    }
  }
  function Openloginform() {
    document.getElementById('Loginform').style.display = 'block'
  }
  function GoToUserSignup() {
    document.getElementById('Loginform').style.display = 'none'
    document.getElementById('signupform').style.display = 'block'
  }

  function Submitformofbookingboat() {
    let U = /^[0-9]$/
    let guestcapacity = U.test(document.getElementById('GuestCapacity').value)

    if (document.getElementById('GuestCapacity').value == '') {
      alert('enter your guest capacity')
      document.getElementById('GuestCapacity').focus()
    } else if (document.getElementById('Chooseyourtime').value == '') {
      alert('choose time')
      document.getElementById('Chooseyourtime').focus()
    } else if (document.getElementById('selectfacilities').value == '') {
      alert('select extra facilities')
      document.getElementById('selectfacilities').focus()
    } else if (guestcapacity == false) {
      alert('enter only digits here')
      document.getElementById('GuestCapacity').focus()
    } else {
      axios
        .post('http://localhost:5000/sendboatbookingdata', {
          BoatGuestCapacity: GuestCapacity,
          BoatBookingTime: ChooseTime,
          Boatselectfacility: SelectBaotExtrafacilities,
          Boatbookinguserid: userID,
          BoatbookingImo: BoatImonumber,
        })
        .then((result) => {
          console.log(result)
          if (result.data.message == 'Record inserted') {
            alert('Record inserted')
          }
        })
    }
  }

  return (
    <div>
      <UserendHeader />
      <UserendNavebar></UserendNavebar>
      <div class="container-fluid" id="applysliderzindex">
        <div class="row" id="Boatpagecrousel">
          <div
            className="col-12 border border-dark text-center px-0"
            id="sliderboat"
          >
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={Boat9}
                    class="d-block w-100 img-fluid"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src={Boat2}
                    class="d-block w-100 img-fluid"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src={Boat5}
                    class="d-block w-100 img-fluid"
                    alt="..."
                  ></img>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* slider container-fluid close from here */}

      <div className="container-fluid">
        <div className="row" id="boatowmerprofile">
          <div className="col-12 " id="boatlisting"></div>
        </div>
      </div>

      <div className="container" id="applyzindex">
        <div className="row" id="boatprofile">
          {post.map((posts) => (
            <div className="col-4 px-0 mb-2 ">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" id="crousel">
                  <div class="carousel-item active">
                    {/* <img src={Boat9} class="d-block w-100 img-fluid" alt="..."></img> */}
                    <div class="card">
                      <img src={Boat2} class="card-img-top" alt="..."></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          <h5>Type_name:</h5>
                          {posts.Type_name}
                          <h5>Boat Name:</h5>
                          {posts.Name}
                          <h5>Boat_IMONumber:</h5>
                          {posts.IMO_number}
                        </p>
                        <button
                          class="btn btn-primary"
                          id="viewdetail"
                          onClick={() => fetchPostDetails(posts)}
                        >
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    {/* <img src={Boat2} class="d-block w-100 img-fluid" alt="..."></img> */}
                    <div class="card">
                      <img src={Boat5} class="card-img-top" alt="..."></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          <h5>Type_name:</h5>
                          {posts.Type_name}
                          <h5>Boat Name:</h5>
                          {posts.Name} <h5>Boat_IMONumber:</h5>
                          {posts.IMO_number}
                        </p>
                        <button
                          class="btn btn-primary"
                          id="viewdetail"
                          onClick={() => fetchPostDetails(posts)}
                        >
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    {/* <img src={Boat5} class="d-block w-100 img-fluid" alt="..."></img> */}
                    <div class="card">
                      <img src={Boat9} class="card-img-top" alt="..."></img>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          <h5>Type_name:</h5>
                          {posts.Type_name}
                          <h5>Boat Name:</h5>
                          {posts.Name}
                          <h5>Boat_IMONumber:</h5>
                          {posts.IMO_number}
                        </p>
                        <button
                          href="#"
                          class="btn btn-primary"
                          id="viewdetail"
                          onClick={() => fetchPostDetails(posts)}
                        >
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" id="boatownerpostdetail">
        <div className="row mt-3 justify-content-center" id="boatpostdetail">
          <div className="col-4 border border-dark" id="boatspecification">
            <h4>Boat Specification</h4>
            <h5>Name:</h5>
            {BoatName}
            <h5>Length</h5>
            {Boatlength}
            <h5>Boat Title</h5>
            {BoatTitle}
            <h5>Boat Color</h5>
            {BoatColor}
            <h5>BoatOperatorname</h5>
            {BoatOperatorname}
            <h5>Boat Sea Location</h5>
            {BoatSealocation}
            <h5>BoatImonumber</h5>
            {BoatImonumber}
          </div>

          <div className="col-4 border border-dark" id="BoatDayTripAmenties">
            <h4>Boat Day Trip Amenties</h4>
            <h5>Boat DayTrip Starting Time</h5>
            {BoatStarttingtime}
            <h5>Boat DayTripEndingTime</h5>
            {BoatEndingtime}
            <h5>Boat Round name</h5>
            {BoatRoundname}
            <h5>Boat Round range</h5>
            {BoatRoundrange}
            <h5>Boat Round price</h5>
            {BoatRoundprice}
            <h5>Boat Fishing Facilities</h5>
            {BoatFishingFacilities}
            <h5>Boat Parachute Facilities</h5>
            {BoatParachuteFacilities}
            <h5>Boat Life Jacket</h5>
            {BoatLifeJacket}
          </div>
          <div
            className="col-4 border border-dark text-center"
            id="selectbookingbutton"
          >
            {' '}
            <button
              className="btn btn-primary mb-3 mt-3 "
              onClick={Openloginform}
            >
              Select Boat Booking
            </button>
            <div className="row">
              <div className="col-12" id="selectboatform">
                <div className="row py-3 border border-dark">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Guest Capacity"
                      id="GuestCapacity"
                      value={GuestCapacity}
                      onChange={(e) => {
                        UpdateGuestCapacity(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div className="row py-3 border border-dark">
                  <div className="col">
                    <input
                      type="time"
                      className="form-control"
                      id="Chooseyourtime"
                      value={ChooseTime}
                      onChange={(e) => {
                        UpdateChooseTime(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div className="row py-2 border border-dark">
                  <div className="col text-start">
                    <label className="form-label py-2">
                      Select Boat Extra Facilities
                    </label>
                    <select
                      className="form-select"
                      id="selectfacilities"
                      onChange={(e) => {
                        Updateboatextrafacilities(e.target.value)
                      }}
                    >
                      <option selected value="Fishingfacility">
                        OwnerBoatFishingFacility
                      </option>
                      <option value="lifejacketfacility">
                        OwnerBoatLifeJacketFacility
                      </option>
                      <option value="parachutefacility">
                        OwnerBoatParachuteFacility
                      </option>
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col text-center" id="formsubmit">
                    <button
                      className="btn btn-primary"
                      onClick={Submitformofbookingboat}
                    >
                      Form Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-8 border border-dark" id="signupform">
            <div className="row py-1 ">
              <div className="col text-center" id="Signupcolumn">
                <h4>Signup</h4>
              </div>
            </div>

            <div className="row py-1">
              <div className="col border border-dark" id="firstname">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your firstname here"
                  className="form-control"
                  id="Firstname"
                  value={UserFirstname}
                  onChange={(e) => {
                    updateUserFirstname(e.target.value)
                  }}
                ></input>
              </div>
              <div className="col border border-dark" id="lastname">
                <label className="form-label">Last Name</label>

                <input
                  type="text"
                  placeholder="Enter your Lastname here"
                  className="form-control"
                  id="Lastname"
                  value={UserLastname}
                  onChange={(e) => {
                    updateUserLastname(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className="row py-1 ">
              <div className="col border border-dark" id="username">
                <label className="form-label">User Name</label>

                <input
                  type="text"
                  placeholder="Enter your Username here"
                  className="form-control"
                  id="Username"
                  value={UserUsername}
                  onChange={(e) => {
                    updateUserUsername(e.target.value)
                  }}
                ></input>
              </div>
              <div className="col border border-dark" id="Gmail">
                <label className="form-label">Gmail</label>
                <input
                  type="text"
                  placeholder="Enter your Mail here"
                  className="form-control"
                  id="Email"
                  value={UserGmail}
                  onChange={(e) => {
                    updateUserGmail(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className="row py-1 ">
              <div className="col border border-dark" id="password">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={UserPassword}
                  onChange={(e) => {
                    updateUserPassword(e.target.value)
                  }}
                ></input>
              </div>
              <div className="col border border-dark" id="Confirmpassword">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  value={UserConfirmPassword}
                  onChange={(e) => {
                    updateUserConfirmPassword(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className="row py-1 ">
              <div className="col border border-dark" id="signupsubmitbutton">
                <button
                  className="btn btn-secondary"
                  onClick={SubmitUserSignup}
                >
                  Signup
                </button>
              </div>
            </div>

            <div className="row py-1">
              <div className="col border border-dark" id="signupresetbutton">
                <button className="btn btn-secondary">Reset</button>
              </div>
            </div>
          </div>

          <div className="col-6 border border-dark" id="Loginform">
            <div className="row py-1 ">
              <div className="col text-center py-2" id="logincolumn">
                <h4>login</h4>
              </div>
            </div>

            <div className="row mb-2 mt-2">
              <div className="col px-0 border border-dark" id="loginUsername">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Username Here"
                  id="loginusername"
                  value={UserloginUsername}
                  onChange={(e) => {
                    updateUserloginUsername(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className="row mb-1">
              <div
                className="col  px-0  border border-dark"
                id="login1password"
              >
                <label className="form-label">password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  id="loginpassword"
                  value={UserloginPassword}
                  onChange={(e) => {
                    updateUserloginPassword(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className="row py-1 ">
              <div className="col px-0  border border-dark" id="loginbutton">
                <button className="btn btn-secondary" onClick={Login}>
                  Login
                </button>
              </div>
            </div>

            <div className="row py-1">
              <div className="col px-0  border border-dark" id="loginreset">
                <button className="btn btn-secondary">Reset</button>
              </div>
            </div>

            <div className="row py-1">
              <div
                className="col px-0 border border-dark"
                id="signupcreatebutton"
              >
                <button className="btn btn-secondary" onClick={GoToUserSignup}>
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserendFooter />
    </div>
  )
}
export default UserBoat
