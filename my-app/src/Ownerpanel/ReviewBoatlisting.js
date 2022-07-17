import Signup from "../signupform";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import './ReviewBoatlisting.css';
import axios, { Axios } from "axios";

import './style.css';
function ReviewBoatlisting() {


    let localdata = localStorage.getItem("data");
    let profiledata = JSON.parse(localdata)
    let OSID = profiledata.OSID;
    console.log("OSID:" + OSID);
    function ShowListingofboat() {
        axios.post("http://localhost:5000/SelectdataofBoat", {

            ownerId: OSID,


        }).then((result) => {
            if (result.data.message) {
                alert(result.data.message)
            }
            else {
                console.log(result)
                console.log(result.data.length)

                localStorage.setItem("boatlisting", JSON.stringify(result.data))

                let boatlisting = localStorage.getItem("boatlisting");

                let boatownerlisting = JSON.parse(boatlisting)

                console.log(boatownerlisting);

                document.getElementById("secondrowboatlisting").style.display="flex";
                document.getElementById("secondrowboatlistingfirstcolumn").style.display="block";
                document.getElementById("secondrowboatlistingsecondcolumn").style.display="block";

                for (let i = 0; i < boatownerlisting.length; i++) {
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<h3>Boat Listing No  "   + (i + 1) + "</h3>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Name:</b>" + boatownerlisting[i].Name + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Length:</b>" + boatownerlisting[i].Lenght + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Titleof_Vessel:</b>" + boatownerlisting[i].Titleof_Vessel + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Color of Boat:</b>" + boatownerlisting[i].Color + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>OperatorName:</b>" + boatownerlisting[i].Operator_Name + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Location:</b>" + boatownerlisting[i].Sea_Location + "<br></br>";
                    document.getElementById("secondrowboatlistingfirstcolumn").innerHTML += "<b>Imo Number:</b>" + boatownerlisting[i].IMO_number + "<br></br>";

                }

                for (let i = 0; i < boatownerlisting.length; i++) {
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<h3>Boat Day Trip Listing No  " + (i + 1) + "</h3>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>DayTripStartingTime:</b>" + boatownerlisting[i].daytrip_starttime + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Daytrip_endtime:</b>" + boatownerlisting[i].daytrip_endtime + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Round_name:</b>" + boatownerlisting[i].Round_name + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Round_range:</b>" + boatownerlisting[i].Round_range + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Round_price:</b>" + boatownerlisting[i].Round_price + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Extrafacilityfishing:</b>" + boatownerlisting[i].Extrafacilityfishing + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Extrafacilitylifejacket:</b>" + boatownerlisting[i].Extrafacilitylifejacket + "<br></br>";
                    document.getElementById("secondrowboatlistingsecondcolumn").innerHTML += "<b>Extrafacilityparachute:</b>" + boatownerlisting[i].Extrafacilityparachute + "<br></br>";


                }

            }

        })
    }
    function HideListingofboat() {
        localStorage.removeItem("boatlisting");
        document.getElementById("secondrowboatlisting").style.display="none";
        document.getElementById("secondrowboatlistingfirstcolumn").style.display="none";
        document.getElementById("secondrowboatlistingsecondcolumn").style.display="none";
    }
    return (
        <div>
            <Header></Header>
            <div className="container-fluid ">
                <div className="row justify-content-md-start justify-content-between">
                    <div className="col-lg-2 col-3 d-md-block d-none"><Navbar></Navbar></div>
                    <div className="col-lg-10 col-md-9 col-8 content border border-dark ">
                        <div className="row justify-content-center">

                            {/* BOAT LISTING FIRST ROW START FROM HERE */}
                            <div className="col-12 py-2 text-center" id="buttoncolumn">
                                <button className="btn btn-secondary" onClick={ShowListingofboat}>Show Listing of Boat</button>
                                <button className="btn btn-secondary" onClick={HideListingofboat}>Hide Listing of Boat</button>
                            </div>



                        </div>

                        {/* BOAT LISTING FIRST ROW CLOSE FROM HERE */}

                        {/* BOAT LISTING SECOND ROW START FROM HERE */}
                        <div className="row secondrowboatlisting border border-dark" id="secondrowboatlisting">
                            <div className="col-6 border border-dark" id="secondrowboatlistingfirstcolumn"></div>
                            <div className="col-6 border border-dark" id="secondrowboatlistingsecondcolumn"></div>
                        </div>
                        {/* BOAT LISTING SECOND ROW CLOSE FROM HERE */}


                    </div>




                    <div className="col-md-2  col-sm-3 col-4  resnav p-0" id="res">
                        <ul className="nav nav-tabs bg-dark border-bottom-0 flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0  py-2 fs-5"><i class="bi bi-bell"></i></a></li>
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0 py-2 fs-5"><i class="bi bi-chat-dots"></i></a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link p-0 py-2 fs-5" data-bs-toggle="dropdown" aria-expanded="false">MyAccount&raquo;</a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a href="#" className="nav-link p-0 py-2 fs-5">My Profile</a></li>
                                    <li><a href="#" className="nav-link p-0 py-2 fs-5">Change Password</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/dashboard" className="nav-link p-0 py-2 fs-5">DashBoard</a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link p-0 py-2 fs-5" data-bs-toggle="dropdown" aria-expanded="false">Listing&raquo;</a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a href="/Yacht" className="nav-link p-0 py-2 fs-5">Yacht</a></li>
                                    <li><a href="/Boat" className="nav-link p-0 py-2 fs-5">Boat</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/Event" className="nav-link p-0 py-2 fs-5">Event</a></li>
                            <li className="nav-item"><a href="/ReviewListing" className="nav-link p-0 py-2 fs-5">Review Listing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link p-0 py-2 fs-5">Setting</a></li>
                            <li className="nav-item"><a href="#" className="nav-link p-0 py-2 fs-5">Log out</a></li>

                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )

}
export default ReviewBoatlisting;