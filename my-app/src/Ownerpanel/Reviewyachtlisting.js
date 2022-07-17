import Signup from '../signupform'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import './Reviewyachtlisting.css'
import axios, { Axios } from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import './style.css'
function Reviewyachtlisting() {
    const[OSID,setOwnerID]=useState('');

   useEffect(() => {
        let localdata = localStorage.getItem('data')
        if (localdata) {
          let object = JSON.parse(localdata)
          console.log('object',object)
          setOwnerID(object.OSID)
        }
      }, [])
    
    
  

  function Showlistingofyacht() {
    axios
      .post('http://localhost:5000/Selectqueryofyachtdata', {
        OwnerID: OSID,
      })
      .then((result) => {
        console.log(result)

        if (result.data.message) {
          alert(result.data.message)
        } else {
          console.log(result.data)

          localStorage.setItem('Yachtlisting', JSON.stringify(result.data))

          let data0 = localStorage.getItem('Yachtlisting')
          let yachtlisting1 = JSON.parse(data0)
          console.log(yachtlisting1)

          console.log('typename:' + yachtlisting1[0].Type_name)

          document.getElementById('secondrow').style.display = 'flex'
          document.getElementById('thirdrow').style.display = 'flex'

          for (let i = 0; i < yachtlisting1.length; i++) {
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<h3>Yacht Specification Listing:' + (i + 1) + '</h3>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>TypeName:</b>' + yachtlisting1[i].Type_name + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Name:</b>' + yachtlisting1[i].Name + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Length:</b>' + yachtlisting1[i].Lenght + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Height:</b>' + yachtlisting1[i].Titleof_Vessel + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Color of Yacht:</b>' + yachtlisting1[i].Color + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>OperatorName:</b>' +
              yachtlisting1[i].Operator_Name +
              '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Location:</b>' + yachtlisting1[i].Sea_Location + '<br></br>'
            document.getElementById('secondrowfirstcolumn').innerHTML +=
              '<b>Imo Number:</b>' + yachtlisting1[i].IMO_number + '<br></br>'
          }

          for (let i = 0; i < yachtlisting1.length; i++) {
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<h3>Yacht Amenties Listing:' + (i + 1) + '</h3>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>RoomAvailability:</b>' + yachtlisting1[i].Room + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Room_Quantity:</b>' +
              yachtlisting1[i].Room_Quantity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Vip_Room_Quantity:</b>' +
              yachtlisting1[i].Vip_Room_Quantity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Vip_Room_Maximum_Capacity:</b>' +
              yachtlisting1[i].Vip_Room_Maximum_Capacity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Normal_Room_Quantity</b>' +
              yachtlisting1[i].Normal_Room_Quantity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Normal_Room_Maximum_Capacity:</b>' +
              yachtlisting1[i].Normal_Room_Maximum_Capacity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Floor:</b>' + yachtlisting1[i].Floor + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Deck:</b>' + yachtlisting1[i].Deck + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Deck_Capacity:</b>' +
              yachtlisting1[i].Deck_Capacity +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Kitchen:</b>' + yachtlisting1[i].Kitchen + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Chef:</b>' + yachtlisting1[i].Chef + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Safety Services:</b>' + yachtlisting1[i].Safety + '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>First_Aid_Safety_  service:</b>' +
              yachtlisting1[i].First_Aid +
              '<br></br>'
            document.getElementById('secondrowsecondcolumn').innerHTML +=
              '<b>Life_Jacket_Safety_Service:</b>' +
              yachtlisting1[i].Life_Jacket +
              '<br></br>'
          }
          for (let i = 0; i < yachtlisting1.length; i++) {
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<h3>Yacht Day Trip Listing:' + (i + 1) + '</h3>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>DayTripStartTime:</b>' +
              yachtlisting1[i].Starting_time +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>DayTripEndTime:</b>' +
              yachtlisting1[i].Ending_time +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>DayTripTravelingroundname:</b>' +
              yachtlisting1[i].Traveling_round_name +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>DayTripTravelingmile:</b>' +
              yachtlisting1[i].Traveling_mile +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>DayTripTraveling_mileprice</b>' +
              yachtlisting1[i].Traveling_mileprice +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Extra_Facilities_daytrips:</b>' +
              yachtlisting1[i].Extra_Facilities_daytrips +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Jet_Ski:</b>' + yachtlisting1[i].Jet_Ski + '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Jet_Skiprice:</b>' +
              yachtlisting1[i].Jet_Skiprice +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Tender:</b>' + yachtlisting1[i].Tender + '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Tender_price:</b>' +
              yachtlisting1[i].Tender_price +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Parachute:</b>' + yachtlisting1[i].Parachute + '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Parachute_price:</b>' +
              yachtlisting1[i].Parachute_price +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Room_Avalabilty_daytrip:</b>' +
              yachtlisting1[i].Room_Avalabilty_daytrip +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Viproomhoursstaydaytrip:</b>' +
              yachtlisting1[i].Viproomhoursstaydaytrip +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Vipperhoursprice:</b>' +
              yachtlisting1[i].Vipperhoursprice +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Normalhoursstaydaytrip:</b>' +
              yachtlisting1[i].Normalhoursstaydaytrip +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>Normalperhoursprice:</b>' +
              yachtlisting1[i].Normalperhoursprice +
              '<br></br>'
            document.getElementById('thirdrowfirstcolumn').innerHTML +=
              '<b>More_Extrafacilities:</b>' +
              yachtlisting1[i].More_Extrafacilities +
              '<br></br>'
          }

          for (let i = 0; i < yachtlisting1.length; i++) {
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<h3>Yacht Night Trip Listing:' + (i + 1) + '</h3>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>NightTripStartTime:</b>' +
              yachtlisting1[i].Night_StartingTime +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>NightTripEndTime:</b>' +
              yachtlisting1[i].Night_EndingTime +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>NightTripTravelingroundname:</b>' +
              yachtlisting1[i].Night_TravelingRoundName +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>NightTripTravelingmile:</b>' +
              yachtlisting1[i].Night_Travelingmile +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>NightTripTraveling_mileprice</b>' +
              yachtlisting1[i].Night_Travelingmileprice +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>Night_ExtraFacilities:</b>' +
              yachtlisting1[i].Night_ExtraFacilities +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>Description_NightExtrafacilities:</b>' +
              yachtlisting1[i].Description_Extrafacilities +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>Night_stayfacilityinroom:</b>' +
              yachtlisting1[i].Night_stayfacilityinroom +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>DaysstayinViproom:</b>' +
              yachtlisting1[i].DaysstayinViproom +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>RoomPerdayPriceVip:</b>' +
              yachtlisting1[i].RoomPerdayPriceVip +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>DaysstayinNormalroom:</b>' +
              yachtlisting1[i].DaysstayinNormalroom +
              '<br></br>'
            document.getElementById('thirdrowsecondcolumn').innerHTML +=
              '<b>RoomPerdayspriceNormal:</b>' +
              yachtlisting1[i].RoomPerdayspriceNormal +
              '<br></br>'
          }
          //   if(yachtlisting1.length==1)
          //   {
          //     console.log(yachtlisting1[0])

          //   }
          //   else if(yachtlisting1.length==5)
          //   {
          //     console.log(yachtlisting1[0])
          //     console.log(yachtlisting1[1])
          //     console.log(yachtlisting1[2])
          //     console.log(yachtlisting1[3])
          //     console.log(yachtlisting1[4])
          //     let text="";

          // for (const key in yachtlisting1[0]) {
          //     text+=key+":"+yachtlisting1[0][key];
          // }

          //     document.getElementById("detailofyachtlisting").innerHTML+="<div class='row'id='firstrowyachtlistingdetail'><div class='col-6 border border-dark'id='yachtlistingrowfirstcolumn1'>"+yachtlisting1[0]+"</div>   <div class='col-6 border border-dark'id='yachtlistingrowfirstcolumn2'>Listing2</div></div>  <div class='row' id='secondrowyachtlistingdetail'>  <div class='col-6 border border-dark'id='yachtlistingrowsecondcolumn1'>Listing3</div><div class='col-6 border border-dark'id='yachtlistingrowsecondcolumn2'>Listing4</div></div><div class='row'><div class='col-6 border border-dark'>Listing5</div></div>"

          //   }
        }
      })
  }
  function HideListingofyacht() {
    localStorage.removeItem('Yachtlisting')
    document.getElementById('secondrow').style.display = 'none'
    document.getElementById('thirdrow').style.display = 'none'
  }

  return (
    <div>
      <Header></Header>
      <div className="container-fluid ">
        <div className="row justify-content-md-start justify-content-between">
          <div className="col-lg-2 col-3 d-md-block d-none">
            <Navbar></Navbar>
          </div>
          <div className="col-lg-10 col-md-9 col-8 content border border-dark">
            <div className="row justify-content-center">
              <div className="col-12" id="detailofyachtlisting">
                <div
                  className="row rowforgettingdataofyacht"
                  id="detailofyachtlisting"
                >
                  <div className="col-12 text-center py-2">
                    <button
                      className="btn btn-secondary"
                      onClick={Showlistingofyacht}
                    >
                      Show Listing Detail
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-secondary"
                      onClick={HideListingofyacht}
                    >
                      Hide Listing Detail
                    </button>
                  </div>
                </div>

                <div className="row secondrow" id="secondrow">
                  <div
                    className="col-6 secondrowfirstcolumn border border-dark"
                    id="secondrowfirstcolumn"
                  ></div>
                  <div
                    className="col-6 secondrowsecondcolumn border border-dark"
                    id="secondrowsecondcolumn"
                  ></div>
                </div>

                <div className="row thirdrow" id="thirdrow">
                  <div
                    className="col-6 thirdrowfirstcolumn border border-dark"
                    id="thirdrowfirstcolumn"
                  ></div>
                  <div
                    className="col-6 thirdrowsecondcolumn border border-dark"
                    id="thirdrowsecondcolumn"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2  col-sm-3 col-4  resnav p-0" id="res">
            <ul className="nav nav-tabs bg-dark border-bottom-0 flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link p-0  py-2 fs-5">
                  <i class="bi bi-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 py-2 fs-5">
                  <i class="bi bi-chat-dots"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link p-0 py-2 fs-5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MyAccount&raquo;
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a href="#" className="nav-link p-0 py-2 fs-5">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link p-0 py-2 fs-5">
                      Change Password
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/dashboard" className="nav-link p-0 py-2 fs-5">
                  DashBoard
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link p-0 py-2 fs-5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Listing&raquo;
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a href="/Yacht" className="nav-link p-0 py-2 fs-5">
                      Yacht
                    </a>
                  </li>
                  <li>
                    <a href="/Boat" className="nav-link p-0 py-2 fs-5">
                      Boat
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/Event" className="nav-link p-0 py-2 fs-5">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a href="/ReviewListing" className="nav-link p-0 py-2 fs-5">
                  Review Listing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 py-2 fs-5">
                  Setting
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 py-2 fs-5">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Reviewyachtlisting
