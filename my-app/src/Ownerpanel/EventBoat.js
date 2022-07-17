// import Signup from "../signupform";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

import './style.css';
import './eventboat.css';
function EventBoat() {
    let localdata = localStorage.getItem("data");
    let profiledata = JSON.parse(localdata);
    let OSID = profiledata.OSID;

    console.log(OSID)
    useEffect(()=>{
        console.log(count);
    })

    // BASIC EVENT ON BOAT FORM FIELD DATA STATE START FROM HERE
    const[count,updatecount]=useState(0)
    const[eventnameonboat,updateeventnameonboat]=useState('');
    const[eventdaysonboat,updateeventdaysonboat]=useState('');
    const[eventstartingdateonboat,updateventstartingdateonboat]=useState('');
    const[eventendingdateonboat,updateeventendingdateonboat]=useState('');
    const[eventselectinglistingofboat,updateeventselectinglistingofboat]=useState('')
    console.log("eventnameonboat:"+eventnameonboat);
    console.log("eventdaysonboat:"+eventdaysonboat);
    console.log("eventstartingdateonboat:"+eventstartingdateonboat);
    console.log("eventendingdateonboat:"+eventendingdateonboat);
    console.log("eventselectinglistingofboat:"+eventselectinglistingofboat);

     // BASIC EVENT ON BOAT FORM FIELD DATA STATE CLOSE FROM HERE

    //  EVENT ON BOAT BASIC PACKAGE STATE START FROM HERE
    const[basicpackagetotalroundtraveledonboat,updateroundtraveledbasiconboat]=useState('');
    const[basicpackageroundsrangeonboat,updateroundrangebasiconboat]=useState('');
    const[basicpackageextrafacilitiesonboat,updateextrafacilitiesoneventbasiconboat]=useState('');
    const[basicpackageroundsdiscountpriceoneventonboat,updatediscountpriceoneventboatbasic]=useState('');


    console.log("basicpackagetotalroundtraveledonboat:"+basicpackagetotalroundtraveledonboat);
    console.log("basicpackageroundsrangeonboat:"+basicpackageroundsrangeonboat);
    console.log("basicpackageextrafacilitiesonboat:"+basicpackageextrafacilitiesonboat);
    console.log("basicpackageroundsdiscountpriceoneventonboat:"+basicpackageroundsdiscountpriceoneventonboat);


     //  EVENT ON BOAT BASIC PACKAGE STATE CLOSE FROM HERE

      //  EVENT ON BOAT PREMIUM PACKAGE STATE START FROM HERE

     const[premiumpackagetotalroundtraveledonboat,updateroundtraveledpremiumonboat]=useState('');
     const[premiumpackageroundsrangeonboat,updateroundrangepremiumonboat]=useState('');
     const[premiumpackageextrafacilitiesonboat,updateextrafacilitiesoneventpremiumonboat]=useState('');
     const[premiumpackageroundsdiscountpriceoneventonboat,updatediscountpriceoneventboatpremiun]=useState('');


     console.log("premiumpackagetotalroundtraveledonboat:"+premiumpackagetotalroundtraveledonboat);
    console.log("premiumpackageroundsrangeonboat:"+premiumpackageroundsrangeonboat);
    console.log("premiumpackageextrafacilitiesonboat:"+premiumpackageextrafacilitiesonboat);
    console.log("premiumpackageroundsdiscountpriceoneventonboat:"+premiumpackageroundsdiscountpriceoneventonboat);

      //  EVENT ON BOAT PREMIUM PACKAGE STATE CLOSE FROM HERE
 

    function CreateEvent() {
        axios.post("http://localhost:5000/EventBoat", {

            OwnerID: OSID,


        }).then((result) => {
            console.log(result);

            if (result.data.message) {
                alert(result.data.message)
            }
            else {
                console.log(result.data)
                localStorage.setItem("selectboatlistingdata", JSON.stringify(result.data))

                let selectboatlistingdata = localStorage.getItem("selectboatlistingdata");



                let ownerboatlisting = JSON.parse(selectboatlistingdata)
                console.log(ownerboatlisting);



                document.getElementById("secondrowofboat").style.display = "flex";

                for (let i = 0; i < ownerboatlisting.length; i++) {
                    document.getElementById("formselectboat").innerHTML += "<Option value=" + ownerboatlisting[i].IMO_number + ">" + ownerboatlisting[i].Type_name + "Listing" + (i + 1) + "</Option>"
                }








            }

        })

    }
    function EventBasicform() {
        let nameofevent = /^[A-Za-z ]+$/;
        let daysofevent = /^[0-9]+$/;

        let eventname = nameofevent.test(document.getElementById("Eventnameboat").value)
        let eventdays = daysofevent.test(document.getElementById("Eventdaysboat").value);

        console.log("ali")
        if (document.getElementById("Eventnameboat").value == "") {
            alert("Enter your event name");
            document.getElementById("Eventnameboat").focus();
        }
        else if (document.getElementById("Eventdaysboat").value == "") {
            alert("Enter your event days");
            document.getElementById("Eventdaysboat").focus();
        }
        else if (document.getElementById("startingdateboat").value == "") {
            alert("Enter starting date");
            document.getElementById("startingdateboat").focus();
        }
        else if (document.getElementById("endingdateboat").value == "") {
            alert("Enter ending date");
            document.getElementById("endingdateboat").focus();
        }
        else if (document.getElementById("formselectboat").value == "") {
            alert("Select your listing in which you want to create event");
            document.getElementById("formselectboat").focus();
        }
        else if (eventname == false) {
            alert("follow following pattern::only alphabets are allowed")
            document.getElementById("Eventnameboat").focus()
        }
        else if (eventdays == false) {
            alert("follow following pattern::only digits in this field which i focus");
            document.getElementById("Eventdaysboat").focus();
        }
        else {
            document.getElementById("secondrowofboat").style.display = "none";
            document.getElementById("createeventbuttonrow").style.display = "none"
            document.getElementById("thirdrowforofbasicpakageofevent").style.display = "flex";

        }
    }

    function GotoEventPremiumPackage() {
        let numberpattern = /^[0-9]+$/;
        let roundrangepattern = /^[0-9]{2,5}$/;

        let roundquantityparticularoneteam = numberpattern.test(document.getElementById("howmanyroundboat").value);

        let roundrange = roundrangepattern.test(document.getElementById("roundrangeboat").value)

        let roundprice = numberpattern.test(document.getElementById("discountpriceboat").value)


        if (document.getElementById("howmanyroundboat").value == "") {
            alert("Enter many round did you traveled on particular team")
            document.getElementById("howmanyroundboat").focus();
        }
        else if (document.getElementById("roundrangeboat").value == "") {
            alert("Enter rounds range");
            document.getElementById("roundrangeboat").focus();
        }
        else if (document.getElementById("extrafacilitiesboat").value == "") {
            alert("Enter extrafacilities in yacht event basic package");
            document.getElementById("extrafacilitiesboat").focus();
        }
        else if (document.getElementById("discountpriceboat").value == "") {
            alert("Enter price of round as per round quantity (discount price)");
            document.getElementById("discountpriceboat").focus();
        }
        else if (roundquantityparticularoneteam == false) {
            alert("Enter only digits in this round traveled particular onen team");
            document.getElementById("howmanyroundboat").focus();
        }
        else if (roundrange == false) {
            alert("Enter only digits but minumum digits is 2")
            document.getElementById("roundrangeboat").focus()
        }
        else if (roundprice == false) {
            alert("Enter price in digits enter only digits in discount round price field");
            document.getElementById("discountpriceboat").focus();
        }
        else if (document.getElementById("extrafacilitiesboat").value.length > 255) {
            alert("your length is greater than 255")
            document.getElementById("extrafacilitiesboat").focus();
        }
        else {
            document.getElementById("fourthrowforofbasicpakageofevent").style.display="flex";
            document.getElementById("thirdrowforofbasicpakageofevent").style.display = "none";
        }

    }

    function Gobacktoeventsimpleform() {
        document.getElementById("thirdrowforofbasicpakageofevent").style.display = "none";
        document.getElementById("secondrowofboat").style.display = "flex";
    }
    
    function SubmitFormEventYacht()
    {
        let numberpattern=/^[0-9]+$/;
        let roundrangepattern=/^[0-9]{2,5}$/;

        let roundquantityparticularoneteam=numberpattern.test(document.getElementById("howmanyroundpremiumboat").value);

        let roundrange=roundrangepattern.test(document.getElementById("roundrangepremiumboat").value)

        let roundprice=numberpattern.test(document.getElementById("discountpricepremiumboat").value)


        if(document.getElementById("howmanyroundpremiumboat").value=="")
        {
            alert("Enter many round did you traveled on particular team")
            document.getElementById("howmanyroundpremiumboat").focus();
        }
        else if(document.getElementById("roundrangepremiumboat").value=="")
        {
            alert("Enter rounds range");
            document.getElementById("roundrangepremiumboat").focus();
        }
        else if(document.getElementById("extrafacilitiespremiumboat").value=="")
        {
            alert("Enter extrafacilities in yacht event premium package");
            document.getElementById("extrafacilitiespremiumboat").focus();
        }
        else if(document.getElementById("discountpricepremiumboat").value=="")
        {
            alert("Enter price of round as per round quantity (discount price)");
            document.getElementById("discountpricepremiumboat").focus();
        }
        else if(roundquantityparticularoneteam==false)
        {
            alert("Enter only digits in this round traveled particular onen team");
            document.getElementById("howmanyroundpremiumboat").focus();
        }
        else if(roundrange==false)
        {
            alert("Enter only digits but minumum digits is 2")
            document.getElementById("roundrangepremiumboat").focus()
        }
        else if(roundprice==false)
        {
            alert("Enter price in digits enter only digits in discount round price field");
            document.getElementById("discountpricepremiumboat").focus();
        }
        else if(document.getElementById("extrafacilitiespremiumboat").value.length >255)
        {
            alert("your length is greater than 255")
            document.getElementById("extrafacilitiespremiumboat").focus();
        }
        else 
        {
            axios.post("http://localhost:5000/Eventonboatdata",{

            BoatEventName:eventnameonboat,
            BoatEventDays:eventdaysonboat,
            BoatEventstartingdate:eventstartingdateonboat,
            BoatEventEndingDate:eventendingdateonboat,
            BoatEventListing:eventselectinglistingofboat,
            BoatEventOwnerID:OSID,


            BasicBoattotalrounded:basicpackagetotalroundtraveledonboat,
            BasicBoatroundedrange:basicpackageroundsrangeonboat,
            BasicBoatextrafacilities:basicpackageextrafacilitiesonboat,
            BasicBoatroundprice:basicpackageroundsdiscountpriceoneventonboat,


            premiumboattotalrounded:premiumpackagetotalroundtraveledonboat,
            premiumboatroundedrange:premiumpackageroundsrangeonboat,
            premiumboatextrafacilities:premiumpackageextrafacilitiesonboat,
            premiumboatroundprice:premiumpackageroundsdiscountpriceoneventonboat,




            }).then((result)=>{
                console.log(result);
            })
            alert("yacht event form is proper fill");
            updatecount(count+1)
            
        }
   
    }

    function Gobacktobasicpackageformyachtevent()
    { 
        document.getElementById("thirdrowforofbasicpakageofevent").style.display="flex";
        document.getElementById("fourthrowforofbasicpakageofevent").style.display="none";
    }



    return (
        <div>
            <Header></Header>
            <div className="container-fluid ">
                <div className="row justify-content-md-start justify-content-between">
                    <div className="col-lg-2 col-3 d-md-block d-none"><Navbar></Navbar></div>
                    <div className="col-lg-10 col-md-9 col-8 content border border-dark p-0">
                        {/* first Row of boat event start from here*/}
                        <div className="row justify-content-center" id="createeventbuttonrow">
                            <div className="col-12 text-center py-2 " id="buttonofcreateeventofboat">
                               
                                <button className="btn btn-secondary" onClick={CreateEvent}>Create Event</button>

                            </div>
                        </div>
                        {/* first Row of boat event end from here */}

                        {/* SECOND ROW OF BOAT EVENT SIMPLE FORM START FROM HERE */}

                        <div className="row py-4 justify-content-center" id="secondrowofboat">

                            <div className="col-8 border border-dark" id="simpleeventformofboat">

                                <div className="row" id="firstrowofsecondroweventyacht">

                                    {/* first column in first row of secondroweventyacht start from here */}
                                    <div className="col border border-dark py-2" id="eventnameboatcolumn">

                                        <input type="text" placeholder="Enter name of Event" id="Eventnameboat" className="form-control" value={eventnameonboat} onChange={(e)=>{updateeventnameonboat(e.target.value)}}></input>
                                    </div>



                                    {/* first column in first row of secondroweventyacht close from here */}

                                    {/* second column in first of secondroweventyacht start from here */}

                                    <div className="col border border-dark py-2" id="eventdaysboatcolumn">

                                        <input type="text" placeholder="Enter How many days event are" className="form-control" id="Eventdaysboat" value={eventdaysonboat} onChange={(e)=>{updateeventdaysonboat(e.target.value)}}></input>
                                        
                                    </div>

                                    {/* second column in first of secondroweventyacht close from here */}


                                </div>
                                {/* first row in secondroweventyachteventformcolumn close from here */}

                                {/* second row in secondroweventyachteventformcolumn start from here */}

                                <div className="row" id="secondrowofsecondroweventyachtformcolumn">
                                    {/* first column in second row of secondroweventyachtformcolumn start from here */}



                                    <div className="col border border-dark py-2" id="eventstartingdateboatcolumn">

                                        <label className="form-label" for="startingdate"> Event Starting Date</label>

                                        <input type="date" className="form-control" id="startingdateboat" value={eventstartingdateonboat} onChange={(e)=>{updateventstartingdateonboat(e.target.value)}}></input>

                                    </div>

                                    {/* first column in second row of secondroweventyachtformcolumn close from here */}

                                    {/* second column in secondrow of secondroweventyachteventformcolumn start from here */}


                                    <div className="col border border-dark py-2" id="eventendingdateboatcolumn">

                                        <label className="form-label" for="endingdate"> Event Ending Date</label>

                                        <input type="date" className="form-control" id="endingdateboat" value={eventendingdateonboat} onChange={(e)=>{updateeventendingdateonboat(e.target.value)}}></input>

                                    </div>


                                    {/* second column in secondrow of secondroweventyachteventformcolumn close from here */}


                                </div>


                                {/* second row in secondroweventyachteventformcolumn close from here */}

                                <div className="row" id="thirdrowforselect">

                                    <div className="col border border-dark py-2" id="eventselectboatlistingcolumn">

                                        <label for="formselect" className="form-label">Select your listing in which you done Event</label>

                                        <select className="form-select" id="formselectboat"  onChange={(e)=>
                                            updateeventselectinglistingofboat(e.target.value)}></select>

                                    </div>
                                </div>

                                <div className="row" id="fourthrowforbutton">
                                    <div className="col text-center py-2">
                                        <button className="btn btn-secondary" onClick={EventBasicform}>Next</button>
                                    </div>
                                </div>




                            </div>
                        </div>
                        {/* SECOND ROW OF BOAT EVENT SIMPLE FORM CLOSE FROM HERE */}

                        {/* THIRD ROW OF BOAT EVENT BASIC PACKAGE FORM START FROM HERE */}
                        <div className="row justify-content-center py-4" id="thirdrowforofbasicpakageofevent">

                            <div className="col-8 border border-dark" id="basicpackageeventform">

                                <div className="row">

                                    <div className="col-12 text-center py-2" id="heading"><h3>Basic Package Event Form</h3></div>

                                </div>

                                {/* basicpackageformcolumn row start from here */}

                                <div className="row ">
                                    {/* first column basic package event form start from here */}
                                    <div className="col border border-dark py-2" id="roundcolumnboat">

                                        <label className="form-label">Enter round traveled one team in basic package</label>

                                        <input type="text" placeholder="Enter how many round traveled one team(qua)" className="form-control" id="howmanyroundboat" value={basicpackagetotalroundtraveledonboat} onChange={(e)=>{updateroundtraveledbasiconboat(e.target.value)}}></input>

                                    </div>
                                    {/* first column basic package event form close from here */}

                                    {/* second column basic package event form start from here */}

                                    <div className="col border border-dark py-2" id="roundrangecolumnboat">

                                        <label className="form-label">Enter round range</label>

                                        <input type="text" placeholder="Enter round range" className="form-control" id="roundrangeboat" value={basicpackageroundsrangeonboat} onChange={(e)=>{updateroundrangebasiconboat(e.target.value)}}></input>

                                    </div>

                                    {/* second column basic package event form close from here */}

                                </div>
                                {/* basicpackageformcolumn row close from here */}


                                {/* basic package form column second row start from here */}
                                <div className="row" id="secondrowbasicpackageformcolumn">

                                    <div className="col-12 border border-dark py-2" id="discountpricecolumnboat">

                                        <label className="form-label"> Discount price of round as per round quantity</label>

                                        <input type="text" placeholder="Enter discount price of round as per round quantity" className="form-control" id="discountpriceboat" value={basicpackageroundsdiscountpriceoneventonboat} onChange={(e)=>{updatediscountpriceoneventboatbasic(e.target.value)}}></input>

                                    </div>

                                    {/* second column second row start from here */}

                                    <div className="col border border-dark py-2" id="extrafacilitiescolumnboat">

                                        <label for="extrafacilities" className="form-label" >More Extra Facilities in Basic package(Enter detail) </label>

                                        <textarea type="text" className="form-control" placeholder="e.g Kitchen,chef,tender,firsaid" id="extrafacilitiesboat" rows="2" value={basicpackageextrafacilitiesonboat} onChange={(e)=>{updateextrafacilitiesoneventbasiconboat(e.target.value)}}></textarea>

                                    </div>
                                    {/* second column second row close from here */}



                                </div>
                                {/* basic package form column second row close from here */}


                                {/* basic package form column fourth row start from here */}
                                <div className="row">

                                    <div className="col-12 border border-dark text-center py-2" id="basicpackagenextbuttoncolumn">

                                        <button className="btn btn-secondary" onClick={Gobacktoeventsimpleform}>Back</button>

                                        <button className="btn btn-secondary ms-2" onClick={GotoEventPremiumPackage}>Next</button>

                                    </div>

                                </div>
                                {/* basic package form column fourth row close from here */}


                            </div>



                        </div>

                        {/* THIRD ROW OF BOAT EVENT BASIC PACKAGE FORM CLOSE FROM HERE */}

                        {/* FOURTH ROW OF BOAT EVENT PREMIUM PACKAGE FORM START FROM HERE */}

                        <div className="row justify-content-center py-4 " id="fourthrowforofbasicpakageofevent">

                            <div className="col-8 border border-dark" id="premiumpackageeventform">

                                <div className="row">

                                    <div className="col-12 text-center py-2" id="heading"><h3>Premium Package Event Form</h3><h3>{count}</h3></div>

                                </div>

                                {/* basicpackageformcolumn row start from here */}

                                <div className="row ">
                                    {/* first column basic package event form start from here */}
                                    <div className="col border border-dark py-2" id="roundcolumnpremiumboat">

                                        <label className="form-label">Enter round traveled one team in premium pack</label>

                                        <input type="text" placeholder="Enter how many round traveled one team(qua)" className="form-control" id="howmanyroundpremiumboat" value={premiumpackagetotalroundtraveledonboat} onChange={(e)=>{updateroundtraveledpremiumonboat(e.target.value)}}></input>

                                    </div>
                                    {/* first column basic package event form close from here */}

                                    {/* second column basic package event form start from here */}

                                    <div className="col border border-dark py-2" id="roundrangecolumnpremiumboat">

                                        <label for="roundrange" className="form-label">Enter round range</label>

                                        <input type="text" placeholder="Enter round range" className="form-control" id="roundrangepremiumboat" value={premiumpackageroundsrangeonboat} onChange={(e)=>{updateroundrangepremiumonboat(e.target.value)}}></input>

                                    </div>

                                    {/* second column basic package event form close from here */}

                                </div>
                                {/* basicpackageformcolumn row close from here */}


                                {/* basic package form column second row start from here */}
                                <div className="row" id="secondrowbasicpackageformcolumn">

                                    <div className="col-12 border border-dark py-2" id="discountpricecolumnpremiumboat">

                                        <label className="form-label"> Discount price of round as per round quantity</label>

                                        <input type="text" placeholder="Enter discount price of round as per round quantity" className="form-control" id="discountpricepremiumboat" value={premiumpackageroundsdiscountpriceoneventonboat}onChange={(e)=>{updatediscountpriceoneventboatpremiun(e.target.value)}}></input>

                                    </div>


                                    {/* second column second row start from here */}
                                    <div className="col border border-dark py-2" id="extrafacilitiescolumnpremiumboat">

                                        <label className="form-label" >More Extra Facilities in Basic package(Enter detail) </label>
                                        <textarea type="text" className="form-control" placeholder="e.g Kitchen,chef,tender,firsaid" id="extrafacilitiespremiumboat" rows="2" value={premiumpackageextrafacilitiesonboat} onChange={(e)=>{updateextrafacilitiesoneventpremiumonboat(e.target.value)}}></textarea>

                                    </div>
                                    {/* second column second row close from here */}



                                </div>
                                {/* basic package form column second row close from here */}



                                {/* basic package form column fourth row start from here */}
                                <div className="row">
                                    <div className="col-12 border border-dark text-center py-2" id="basicpackagenextbuttoncolumn">
                                        <button className="btn btn-secondary" onClick={Gobacktobasicpackageformyachtevent}>Back</button>
                                        <button className="btn btn-secondary ms-2" onClick={SubmitFormEventYacht}>Submit</button>
                                    </div>
                                </div>
                                {/* basic package form column fourth row close from here */}


                            </div>



                        </div>
                        {/* FOURTH ROW OF BOAT EVENT PREMIUM PACKAGE FORM CLOSE FROM HERE */}

                    </div>




                    <div className="col-md-2  col-sm-3 col-4  resnav p-0" id="res">
                        <ul className="nav nav-tabs bg-dark border-bottom-0 flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0  py-2 fs-5"><i className="bi bi-bell"></i></a></li>
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
export default EventBoat;