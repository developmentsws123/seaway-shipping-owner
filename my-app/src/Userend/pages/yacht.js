import UserendHeader from '../Component/header'
import UserendNavebar from '../Component/navebar'
import UserendFooter from '../Component/footer'
import img from '../images/yach3.jpg'
import boat from '../images/boat.jpg'
import pic1 from '../images/bg.jpg'
import pic2 from '../images/daytrips4.jpg'
import pic3 from '../images/cooperate Event.png'
import pic4 from '../images/overnight4.jpeg'
import pic5 from '../images/overnight3.png'
import pic6 from '../images/overnight1.jpeg'
import pic7 from '../images/yachtpic.jpg'
import pic8 from '../images/yachtpic2.jpg'
import pic9 from '../images/yachtpic3.jpg'
import { LineWave } from 'react-loader-spinner'
import axios, { Axios } from 'axios'
import './yacht.css'
import { useEffect, useState } from 'react'

import CustomModal from '../../Components/Modal'
function UserYacht() {
  const [posts, setPosts] = useState([])
  const [Traveling_round_name, updatetravelingroundname] = useState(null)
  const [Traveling_mileprice, updatetravelingmileprice] = useState(null)
  const [Traveling_mile, updatetravelingmile] = useState(null)
  const [Roomavailability, updateroom] = useState(null)
  const [Night_Traveling_round_name, updatenighttravelingroundname] = useState(
    null,
  )
  const [Night_Traveling_mileprice, updatenighttravelingmileprice] = useState(
    null,
  )
  const [Night_Traveling_mile, updatenighttravelingmile] = useState(null)
  console.log(Roomavailability)

  const [GuestCapacityinyacht, updateguestcapacity] = useState(null)
  const [
    UserTimeperiodinyachtbooking,
    updateUsertimeperiodinyachtbooking,
  ] = useState(null)
  const [yachtImonumber, OwneryachtImonumber] = useState(null)
  const [tripscategoryinyacht, updatetripscategory] = useState('Daytrip')
  const [selectRoomCategory, updateselectroomcategory] = useState('viproom')
  const [Daytripnormalroom, updateDaytripnormalroom] = useState('1hour')
  const [Daytripviproom, updateDaytripviproom] = useState('1hour')
  const [Nighttripnormalroom, updateNighttripnormalroom] = useState('1Day')
  const [Nighttripviproom, updateNighttripviproom] = useState('1Day')
  const [UserFirstname, updateUserFirstname] = useState(null)
  const [UserLastname, updateUserLastname] = useState(null)
  const [UserUsername, updateUserUsername] = useState(null)
  const [UserGmail, updateUserGmail] = useState(null)
  const [UserPassword, updateUserPassword] = useState(null)
  const [UserConfirmPassword, updateUserConfirmPassword] = useState(null)
  const [UserloginUsername, updateUserloginUsername] = useState(null)
  const [UserloginPassword, updateUserloginPassword] = useState(null)
  const [userid, updateuserid] = useState(null)
  console.log(userid)

  console.log('tripscategoryinyacht:' + tripscategoryinyacht)
  console.log('selectRoomCategory:' + selectRoomCategory)
  console.log('Daytripnormalroom:' + Daytripnormalroom)
  console.log('Daytripviproom:' + Daytripviproom)
  console.log('Nighttripnormalroom:' + Nighttripnormalroom)
  console.log('Nighttripviproom:' + Nighttripviproom)

  console.log('UserFirstname:' + UserFirstname)
  console.log('UserLastname:' + UserLastname)
  console.log('UserUsername:' + UserUsername)
  console.log('UserGmail:' + UserGmail)
  console.log('UserPassword:' + UserPassword)
  console.log('UserConfirmPassword:' + UserConfirmPassword)
  console.log('UserloginUsername:' + UserloginUsername)
  console.log('UserloginPassword:' + UserloginPassword)

  const [isLoading, setIsLoading] = useState(false)

  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  useEffect(() => {
    axios
      .post('http://localhost:5000/selectalldataofyachtonload', {})
      .then((result) => {
        console.log(result)
        setPosts(result.data)
      })

    // boatdetail();
  }, [])

  const fetchPostDetails = (postDetails) => {
    setIsLoading(true)

    updatetravelingroundname(postDetails.Traveling_round_name)
    updatetravelingmile(postDetails.Traveling_mile)
    updatetravelingmileprice(postDetails.Traveling_mileprice)
    updatenighttravelingroundname(postDetails.Night_TravelingRoundName)
    updatenighttravelingmile(postDetails.Night_Travelingmile)
    updatenighttravelingmileprice(postDetails.Night_Travelingmileprice)
    updateroom(postDetails.Room)
    OwneryachtImonumber(postDetails.IMO_number)

    document.getElementById('slider').style.display = 'none'
    document.getElementById('yachtprofiles').style.display = 'none'
    document.getElementById('postdetail').style.display = 'flex'
    document.getElementById('nightandselectbookinggform').style.display = 'flex'
    document.getElementById('yachtspecification').innerHTML +=
      '<h5>Name:</h5>' +
      postDetails.Name +
      '<h5>Length:</h5>' +
      postDetails.Lenght +
      '<h5>Height:</h5>' +
      postDetails.Titleof_Vessel +
      '<h5>Color:</h5>' +
      postDetails.Color +
      '<h5>Imo_number:</h5>' +
      postDetails.IMO_number +
      '<h5>Operator_Name:</h5>' +
      postDetails.Operator_Name +
      '<h5>Sea_Location:</h5>' +
      postDetails.Sea_Location
    document.getElementById('yachtamenities').innerHTML +=
      '<h5>Room:</h5>' +
      postDetails.Room +
      '<h5>Room_Quantity:</h5>' +
      postDetails.Room_Quantity +
      '<h5>Vip_Room_Quantity:</h5>' +
      postDetails.Vip_Room_Quantity +
      '<h5>Vip_Room_Maximum_Capacity:</h5>' +
      postDetails.Vip_Room_Maximum_Capacity +
      '<h5>Normal_Room_Quantity:</h5>' +
      postDetails.Normal_Room_Quantity +
      '<h5>Normal_Room_Maximum_Capacity:</h5>' +
      postDetails.Normal_Room_Maximum_Capacity +
      '<h5>Floor:</h5>' +
      postDetails.Floor +
      '<h5>Deck:</h5>' +
      postDetails.Deck +
      '<h5>Deck_Capacity:</h5>' +
      postDetails.Deck_Capacity +
      '<h5>Kitchen:</h5>' +
      postDetails.Kitchen +
      '<h5>Chef:</h5>' +
      postDetails.Chef +
      '<h5>Safety:</h5>' +
      postDetails.Safety +
      '<h5>First_Aid:</h5>' +
      postDetails.First_Aid +
      '<h5>Life_Jacket:</h5>' +
      postDetails.Life_Jacket
    document.getElementById('yachtdaytrip').innerHTML +=
      '<h5>Day Trip Starting_time:</h5>' +
      postDetails.Starting_time +
      '<h5>Day Trip Ending_time:</h5>' +
      postDetails.Ending_time +
      '<h5>Traveling_round_name:</h5>' +
      postDetails.Traveling_round_name +
      '<h5>Traveling_mile:</h5>' +
      postDetails.Traveling_mile +
      '<h5>Traveling_mileprice:</h5>' +
      postDetails.Traveling_mileprice +
      '<h5>Extra_Facilities_daytrips:</h5>' +
      postDetails.Extra_Facilities_daytrips +
      '<h5>Jet_Ski_Availability:</h5>' +
      postDetails.Jet_Ski +
      '<h5>Jet_Skiprice:</h5>' +
      postDetails.Jet_Skiprice +
      '<h5>Tender:</h5>' +
      postDetails.Tender +
      '<h5>Tender_price:</h5>' +
      postDetails.Tender_price +
      '<h5>Parachute:</h5>' +
      postDetails.Parachute +
      '<h5>Safety:</h5>' +
      postDetails.Parachute_price +
      '<h5>Parachute_price:</h5>' +
      postDetails.Parachute_price +
      '<h5>Room_Avalabilty_daytrip:</h5>' +
      postDetails.Room_Avalabilty_daytrip +
      '<h5>Viproomhoursstaydaytrip:</h5>' +
      postDetails.Viproomhoursstaydaytrip +
      '<h5>Vipperhoursprice:</h5>' +
      postDetails.Vipperhoursprice +
      '<h5>Normalhoursstaydaytrip:</h5>' +
      postDetails.Normalhoursstaydaytrip +
      '<h5>Normalperhoursprice:</h5>' +
      postDetails.Normalperhoursprice +
      '<h5>More_Extrafacilities:</h5>' +
      postDetails.More_Extrafacilities
    document.getElementById('yachtnighttrip').innerHTML +=
      '<h5>Night_StartingTime:</h5>' +
      postDetails.Night_StartingTime +
      '<h5>Night_EndingTime:</h5>' +
      postDetails.Night_EndingTime +
      '<h5>Night_TravelingRoundName:</h5>' +
      postDetails.Night_TravelingRoundName +
      '<h5>Night_Travelingmile:</h5>' +
      postDetails.Night_Travelingmile +
      '<h5>Night_Travelingmileprice:</h5>' +
      postDetails.Night_Travelingmileprice +
      '<h5>Night_ExtraFacilities:</h5>' +
      postDetails.Night_ExtraFacilities +
      '<h5>Description_Extrafacilities:</h5>' +
      postDetails.Description_Extrafacilities +
      '<h5>Night_stayfacilityinroom:</h5>' +
      postDetails.Night_stayfacilityinroom +
      '<h5>DaysstayinViproom:</h5>' +
      postDetails.DaysstayinViproom +
      '<h5>RoomPerdayPriceVip:</h5>' +
      postDetails.RoomPerdayPriceVip +
      '<h5>DaysstayinNormalroom:</h5>' +
      postDetails.DaysstayinNormalroom +
      '<h5>RoomPerdayPricenormal:</h5>' +
      postDetails.RoomPerdayspriceNormal

    setIsLoading(false)

    // try {
    //   axios
    //     .post('http://localhost:5000/selectalldataofyachtonload', {
    //       IMO_number: imo,
    //     })
    //     .then((res) => {
    //       console.log('res.data[0]', res.data[0])
    //       // here set data\((
    //       setPostDetails(res.data[0])
    //       handleShow()
    //       // setIsLoading(false)
    //     })
    // } catch (error) {
    //   // setIsLoading(false)
    //   console.log(error)
    // }
  }

  function ShowRoomCategory() {
    console.log('ali')
    if (Roomavailability == 'Yes') {
      if (document.getElementById('tripscategory').value == 'DayTrip') {
        document.getElementById('RoomVipandNormal').style.display = 'flex'
        document.getElementById('DayTripRoundDetail').style.display = 'flex'
        document.getElementById('NightTripRoundDetail').style.display = 'none'

        if (document.getElementById('roomnormalandvip').value == 'NormalRoom') {
          document.getElementById('daytripnormalroomrow').style.display = 'flex'
          document.getElementById('Nighttripnormalroomrow').style.display =
            'none'
          document.getElementById('Nighttripviproomrow').style.display = 'none'
          document.getElementById('daytripviproomrow').style.display = 'none'
        } else if (
          (document.getElementById('daytripnormalroomrow').value = 'VipRoom')
        ) {
          document.getElementById('daytripviproomrow').style.display = 'flex'
          document.getElementById('daytripnormalroomrow').style.display = 'none'
          document.getElementById('Nighttripnormalroomrow').style.display =
            'none'
          document.getElementById('Nighttripviproomrow').style.display = 'none'
        }
      } else if (
        document.getElementById('tripscategory').value == 'NightTrip'
      ) {
        document.getElementById('RoomVipandNormal').style.display = 'flex'
        document.getElementById('NightTripRoundDetail').style.display = 'flex'
        document.getElementById('DayTripRoundDetail').style.display = 'none'

        if (document.getElementById('roomnormalandvip').value == 'NormalRoom') {
          document.getElementById('Nighttripnormalroomrow').style.display =
            'flex'
          document.getElementById('Nighttripviproomrow').style.display = 'none'
          document.getElementById('daytripviproomrow').style.display = 'none'
          document.getElementById('daytripnormalroomrow').style.display = 'none'
        } else if (
          document.getElementById('roomnormalandvip').value == 'VipRoom'
        ) {
          document.getElementById('Nighttripnormalroomrow').style.display =
            'none'
          document.getElementById('Nighttripviproomrow').style.display = 'flex'
          document.getElementById('daytripviproomrow').style.display = 'none'
          document.getElementById('daytripnormalroomrow').style.display = 'none'
        }
      }
    } else if (Roomavailability == 'No') {
      if (document.getElementById('tripscategory').value == 'DayTrip') {
        document.getElementById('DayTripRoundDetail').style.display = 'flex'
        document.getElementById('NightTripRoundDetail').style.display = 'none'
      } else if (
        document.getElementById('tripscategory').value == 'NightTrip'
      ) {
        document.getElementById('NightTripRoundDetail').style.display = 'flex'
        document.getElementById('DayTripRoundDetail').style.display = 'none'
      }
    }
  }
  function Openlogin() {
    document.getElementById('Loginform1').style.display = 'block'
  }
  function GoToUserSignup() {
    document.getElementById('Loginform1').style.display = 'none'
    document.getElementById('signupform').style.display = 'block'
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

            updateuserid(response.data[0].USID)

            document.getElementById('Loginform1').style.display = 'none'
            document.getElementById('selectbookingofyachtform').style.display =
              'block'
          }
        })
    }
  }
  function FormSubmitofYachbooking() {
    let guestcapacity = /^[0-9]$/
    let capacity = guestcapacity.test(
      document.getElementById('Entercapacity').value,
    )

    if (document.getElementById('Entercapacity').value == '') {
      alert('Enter your Guest Capacity')
      document.getElementById('Entercapacity').focus()
    } else if (document.getElementById('time').value == '') {
      alert('Choose your yacht booking time')
      document.getElementById('time').focus()
    } else if (document.getElementById('tripscategory').value == '') {
      alert('selecttripscategory')
      document.getElementById('tripscategory').focus()
    } else if (Roomavailability == 'Yes') {
      if (
        document.getElementById('tripscategory').value == 'DayTrip' &&
        document.getElementById('roomnormalandvip').value == 'NormalRoom'
      ) {
        if (document.getElementById('daytripnormalroom').value == '') {
          alert('select Normal Room Daytrip')
          document.getElementById('daytripnormalroom').focus()
        } else {
          alert(
            'form filled with guest capacity,choose time,daytrip,normalroomdaytrip and daytripdetails',
          )
          axios
            .post('http://localhost:5000/Daytripnormal', {
              Bookingyachtguestcapacity: GuestCapacityinyacht,
              Bookingyachttimechoose: UserTimeperiodinyachtbooking,
              yachttripCategories: tripscategoryinyacht,
              yacthroomcategories: selectRoomCategory,
              normalroomdaytripquantity: Daytripnormalroom,
              Roundnameyachtdayrip: Traveling_round_name,
              Roundrangeyachtdaytrip: Traveling_mile,
              Roundpriceyachtdaytrip: Traveling_mileprice,
              Imonumberyacht: yachtImonumber,
              UserID: userid,
            })
            .then((result) => {
              console.log(result)
              if (result.data.message) {
                alert(result.data.message)
              }
            })
        }
      } else if (
        document.getElementById('tripscategory').value == 'DayTrip' &&
        document.getElementById('roomnormalandvip').value == 'VipRoom'
      ) {
        if (document.getElementById('Daytripviproomquantity').value == '') {
          alert('select yacht daytrip vip room hours')
        } else {
          alert(
            'form filled with guest capacity,choose time,daytrip,viproomdaytrip and daytripdetails',
          )
          axios
            .post('http://localhost:5000/Daytripvip', {
              Bookingyachtguestcapacity: GuestCapacityinyacht,
              Bookingyachttimechoose: UserTimeperiodinyachtbooking,
              yachttripCategories: tripscategoryinyacht,
              yacthroomcategories: selectRoomCategory,
              viproomdaytripquantity: Daytripviproom,
              Roundnameyachtdayrip: Traveling_round_name,
              Roundrangeyachtdaytrip: Traveling_mile,
              Roundpriceyachtdaytrip: Traveling_mileprice,
              Imonumberyacht: yachtImonumber,
              UserID: userid,
            })
            .then((result) => {
              console.log(result)
              if (result.data.message) {
                alert(result.data.message)
              }
            })
        }
      } else if (
        document.getElementById('tripscategory').value == 'NightTrip' &&
        document.getElementById('roomnormalandvip').value == 'NormalRoom'
      ) {
        if (
          document.getElementById('Nighttripnormalroomquantitydays').value == ''
        ) {
          alert('select night trip normal room quantity days')
        } else {
          alert(
            'form filled with guest capacity,choose time,nighttrip,normalroomnighttrip and nighttripdetails',
          )
          axios
            .post('http://localhost:5000/Nighttripnormal', {
              Bookingyachtguestcapacity: GuestCapacityinyacht,
              Bookingyachttimechoose: UserTimeperiodinyachtbooking,
              yachttripCategories: tripscategoryinyacht,
              yacthroomcategories: selectRoomCategory,
              normalroomnighttripquantity: Nighttripnormalroom,
              Roundnameyachtdayrip: Traveling_round_name,
              Roundrangeyachtdaytrip: Traveling_mile,
              Roundpriceyachtdaytrip: Traveling_mileprice,
              Imonumberyacht: yachtImonumber,
              UserID: userid,
            })
            .then((result) => {
              console.log(result)
              if (result.data.message) {
                alert(result.data.message)
              }
            })
        }
      } else if (
        document.getElementById('tripscategory').value == 'NightTrip' &&
        document.getElementById('roomnormalandvip').value == 'VipRoom'
      ) {
        if (
          document.getElementById('Nighttripviproomquantitydays').value == ''
        ) {
          alert('select night trip vip room quantity days')
        } else {
          alert(
            'form filled with guest capacity,choose time,nighttrip,viproomnighttrip and nighttripdetails',
          )
          axios
            .post('http://localhost:5000/Nighttripvip', {
              Bookingyachtguestcapacity: GuestCapacityinyacht,
              Bookingyachttimechoose: UserTimeperiodinyachtbooking,
              yachttripCategories: tripscategoryinyacht,
              yacthroomcategories: selectRoomCategory,
              viproomnighttripquantity: Nighttripviproom,
              Roundnameyachtdayrip: Traveling_round_name,
              Roundrangeyachtdaytrip: Traveling_mile,
              Roundpriceyachtdaytrip: Traveling_mileprice,
              Imonumberyacht: yachtImonumber,
              UserID: userid,
            })
            .then((result) => {
              console.log(result)
              if (result.data.message) {
                alert(result.data.message)
              }
            })
        }
      }
    } else if (Roomavailability == 'No') {
      if (capacity == false) {
        alert('enter only digits here')
        document.getElementById('Entercapacity').focus()
      } else if (document.getElementById('tripscategory').value == 'DayTrip') {
        alert('formfilled')
        axios
          .post('http://localhost:5000/Roomnodaytripdetail', {
            Bookingyachtguestcapacity: GuestCapacityinyacht,
            Bookingyachttimechoose: UserTimeperiodinyachtbooking,
            yachttripCategories: tripscategoryinyacht,
            Roundnameyachtdayrip: Traveling_round_name,
            Roundrangeyachtdaytrip: Traveling_mile,
            Roundpriceyachtdaytrip: Traveling_mileprice,
            Imonumberyacht: yachtImonumber,
            UserID: userid,
          })
          .then((result) => {
            console.log(result)
            if (result.data.message) {
              alert(result.data.message)
            }
          })
      } else if (
        document.getElementById('tripscategory').value == 'NightTrip'
      ) {
        alert('formfilledproperly')
        axios
          .post('http://localhost:5000/Roomnonighttripdetail', {
            Bookingyachtguestcapacity: GuestCapacityinyacht,
            Bookingyachttimechoose: UserTimeperiodinyachtbooking,
            yachttripCategories: tripscategoryinyacht,
            Roundnameyachtdayrip: Traveling_round_name,
            Roundrangeyachtdaytrip: Traveling_mile,
            Roundpriceyachtdaytrip: Traveling_mileprice,
            Imonumberyacht: yachtImonumber,
            UserID: userid,
          })
          .then((result) => {
            console.log(result)
            if (result.data.message) {
              alert(result.data.message)
            }
          })
      }
    }
  }
  return (
    <>
      <div id="back">
        <UserendHeader />
        <UserendNavebar />
        {!isLoading ? (
          <>
            <div className="container-fluid">
              <div className="row" id="slider">
                <div className="col-12 px-0" id="slider">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={pic4} class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src={pic9} class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src={pic8} class="d-block w-100" alt="..."></img>
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

            <div class="container-fluid ">
              <div
                class="row justify-content-between"
                id="yachtprofilesall"
              ></div>
            </div>
            <div className="container" id="profiles">
              <div className="row " id="yachtprofiles">
                {posts.map((post) => (
                  <div className="col-4 px-0 mb-2" key={post.IMO_number}>
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          {/* <img src="..." class="d-block w-100" alt="..."> */}
                          <div className="card">
                            <img src={img} class="card-img-top" alt="..."></img>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                <h5>Type_name:</h5>
                                {post.Type_name}
                                <h5>Boat Name:</h5>
                                {post.Name}
                                <h5>Boat_IMONumber:</h5>
                                {post.IMO_number}
                              </p>
                              <button
                                className="btn btn-primary"
                                id="viewdetail"
                                onClick={() => fetchPostDetails(post)}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          {/* <img src="..." class="d-block w-100" alt="..."> */}
                          <div className="card">
                            <img
                              src={pic7}
                              class="card-img-top"
                              alt="..."
                            ></img>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                <h5>Type_name:</h5>
                                {post.Type_name}
                                <h5>Boat Name:</h5>
                                {post.Name}
                                <h5>Boat_IMONumber:</h5>
                                {post.IMO_number}
                              </p>
                              <button
                                className="btn btn-primary"
                                id="viewdetail"
                                onClick={() => fetchPostDetails(post)}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          {/* <img src="..." class="d-block w-100" alt="..."> */}
                          <div className="card">
                            <img
                              src={pic2}
                              class="card-img-top"
                              alt="..."
                            ></img>
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                <h5>Type_name:</h5>
                                {post.Type_name}
                                <h5>Boat Name:</h5>
                                {post.Name}
                                <h5>Boat_IMONumber:</h5>
                                {post.IMO_number}
                              </p>
                              <button
                                className="btn btn-primary"
                                id="viewdetail"
                                onClick={() => fetchPostDetails(post)}
                              >
                                View Details
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
          </>
        ) : (
          <div className="w-100 d-flex justify-content-center align-item-center loader-container">
            <LineWave
              color="blue"
              height={110}
              width={110}
              ariaLabel="three-circles-rotating"
            />
          </div>
        )}

        <div className="container" id="individualpost">
          <div className="row mt-3" id="postdetail">
            <div className="col-4 border border-dark" id="yachtspecification">
              <h4>Yacht Specification</h4>
            </div>
            <div className="col-4 border border-dark" id="yachtamenities">
              <h4>Yacht Amenties</h4>
            </div>
            <div className="col-4 border border-dark" id="yachtdaytrip">
              <h4>Yacht DayTrips</h4>
            </div>
          </div>
          <div
            className="row justify-content-center"
            id="nightandselectbookinggform"
          >
            <div className="col-4 border border-dark" id="yachtnighttrip">
              <h4>Yacht NightTrip</h4>
            </div>
            <div className="col-6 border border-dark">
              <div className="row justify-content-center " id="selectbooking">
                <div
                  className="col-12 border border-dark text-center py-2"
                  id="buttoncolumn"
                >
                  <button className="btn btn-primary" onClick={Openlogin}>
                    Select Booking
                  </button>
                </div>
                <div className="col-12" id="selectbookingofyachtform">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        placeholder="Enter your capacity"
                        class="form-control"
                        id="Entercapacity"
                        value={GuestCapacityinyacht}
                        onChange={(e) => {
                          updateguestcapacity(e.target.value)
                        }}
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        type="time"
                        class="form-control"
                        id="time"
                        value={UserTimeperiodinyachtbooking}
                        onChange={(e) => {
                          updateUsertimeperiodinyachtbooking(e.target.value)
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="row border border-dark py-2">
                    <div className="col">
                      <select
                        className="form-select"
                        onClick={ShowRoomCategory}
                        id="tripscategory"
                        onChange={(e) => {
                          updatetripscategory(e.target.value)
                        }}
                      >
                        <option selected value="DayTrip">
                          DayTrip
                        </option>
                        <option value="NightTrip">NightTrip</option>
                      </select>
                    </div>
                  </div>

                  <div
                    class="row border border-dark py-2"
                    id="RoomVipandNormal"
                  >
                    <div class="col">
                      <select
                        class="form-select"
                        id="roomnormalandvip"
                        onChange={(e) => {
                          updateselectroomcategory(e.target.value)
                        }}
                      >
                        <option value="VipRoom">VipRoom</option>
                        <option value="NormalRoom">NormalRoom</option>
                      </select>
                    </div>
                  </div>

                  <div
                    class="row py-2 border border-dark"
                    id="daytripnormalroomrow"
                  >
                    <div class="col">
                      <label class="form-label">
                        Enter how many Hours stay day trip Normal
                      </label>
                      <select
                        class="form-select"
                        id="daytripnormalroom"
                        onChange={(e) => {
                          updateDaytripnormalroom(e.target.value)
                        }}
                      >
                        <option selected value="1 hour">
                          1 hour
                        </option>
                        <option value="2hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4hours">4 hours</option>
                        <option value="5hours">5 hours</option>
                        <option value="6 hours">6hours</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row py-2 border border-dark"
                    id="daytripviproomrow"
                  >
                    <div class="col">
                      <label class="form-label">
                        Enter how many Hours stay day trip Vip
                      </label>
                      <select
                        class="form-select"
                        id="Daytripviproomquantity"
                        onChange={(e) => {
                          updateDaytripviproom(e.target.value)
                        }}
                      >
                        <option selected value="1 hour">
                          1 hour
                        </option>
                        <option value="2hours">2 hours</option>
                        <option value="3 hours">3 hours</option>
                        <option value="4hours">4 hours</option>
                        <option value="5hours">5 hours</option>
                        <option value="6 hours">6hours</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row py-2 border border-dark"
                    id="Nighttripnormalroomrow"
                  >
                    <div class="col">
                      <label class="form-label">
                        Enter how many Days stay Night trip Normal Room
                      </label>
                      <select
                        class="form-select"
                        id="Nighttripnormalroomquantitydays"
                        onChange={(e) => {
                          updateNighttripnormalroom(e.target.value)
                        }}
                      >
                        <option selected value="1Day">
                          1 Day
                        </option>
                        <option value="2Days">2 Days</option>
                        <option value="3Days">3 Days</option>
                        <option value="4Days">4 Days</option>
                        <option value="5Days">5 Days</option>
                        <option value="6Days">6Days</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="row py-2 border border-dark"
                    id="Nighttripviproomrow"
                  >
                    <div class="col">
                      <label class="form-label">
                        Enter how many Days stay Night trip Vip Room
                      </label>
                      <select
                        class="form-select"
                        id="Nighttripviproomquantitydays"
                        onChange={(e) => {
                          updateNighttripviproom(e.target.value)
                        }}
                      >
                        <option selected value="1Day">
                          1 Day
                        </option>
                        <option value="2Days">2 Days</option>
                        <option value="3Days">3 Days</option>
                        <option value="4Days">4 Days</option>
                        <option value="5Days">5 Days</option>
                        <option value="6Days">6 Days</option>
                      </select>
                    </div>
                  </div>
                  <div class="row py-2" id="DayTripRoundDetail">
                    <div class="col">
                      <label class="form-label">Day Trip Round Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Roundnamedaytrips"
                        value={Traveling_round_name}
                        disabled
                      ></input>
                    </div>
                    <div class="col">
                      <label class="form-label">Day Trip Round Range</label>
                      <input
                        type="text"
                        class="form-control "
                        id="DaytripRoundrange"
                        value={Traveling_mile}
                        disabled
                      ></input>
                    </div>
                    <div class="col">
                      <label class="form-label">Day Trip Round Price</label>
                      <input
                        type="text"
                        class="form-control "
                        id="DaytripRoundrange"
                        value={Traveling_mileprice}
                        disabled
                      ></input>
                    </div>
                  </div>
                  <div class="row" id="NightTripRoundDetail">
                    <div class="col">
                      <label class="form-label">Night Trip Round Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="Roundnamenighttrips"
                        value={Night_Traveling_round_name}
                        disabled
                      ></input>
                    </div>
                    <div class="col">
                      <label class="form-label">Night Trip Round Range</label>
                      <input
                        type="text"
                        class="form-control"
                        id="DaytripRoundrange"
                        value={Night_Traveling_mile}
                        disabled
                      ></input>
                    </div>
                    <div class="col">
                      <label class="form-label">Night_Travelingmileprice</label>
                      <input
                        type="text"
                        class="form-control "
                        id="Night_Travelingmileprice"
                        value={Night_Traveling_mileprice}
                        disabled
                      ></input>
                    </div>
                  </div>
                  <div className="row justify-content-center border border-dark py-2">
                    <div className="col-4 text-center" id="yachtbookingform">
                      <button
                        className="btn btn-primary"
                        onClick={FormSubmitofYachbooking}
                      >
                        Form Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 border border-dark" id="signupform1">
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

            <div className="col-6 border border-dark" id="Loginform1">
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
                  <button
                    className="btn btn-secondary"
                    onClick={GoToUserSignup}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container end here */}

        <UserendFooter />
      </div>
      {/* <CustomModal
        show={show}
        handleClose={handleClose}
        postDetails={postDetails}
      /> */}
    </>
  )
}
export default UserYacht
