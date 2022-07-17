import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import './style.css'
import axios, { Axios } from "axios";
import './Eventyacht.css'
import { useState } from "react";
function EventYacht() {
    let localdata = localStorage.getItem("data");
    let profiledata = JSON.parse(localdata);
    let OSID = profiledata.OSID;

 

   

    // BASIC EVENT ON YACHT FORM FIELD DATA STATE START FROM HERE

    const[eventnameonyahct,updateeventnameonyacht]=useState('');
    const[eventdaysonyacht,updateeventdaysonyacht]=useState('');
    const[eventstartingdateonyacht,updateventstartingdateonyacht]=useState('');
    const[eventendingdateonyacht,updateeventendingdateonyacht]=useState('');
    const[eventselectinglistingofyacht,updateeventselectinglistingofyacht]=useState('');


    console.log("eventnameonyahct:"+eventnameonyahct);
    console.log("eventdaysonyacht:"+eventdaysonyacht);
    console.log("eventstartingdateonyacht:"+eventstartingdateonyacht);
    console.log("eventendingdateonyacht:"+eventendingdateonyacht);
    console.log("eventselectinglistingofyacht:"+eventselectinglistingofyacht);

     // BASIC EVENT ON YACHT FORM FIELD DATA STATE CLOSE FROM HERE

    //  EVENT ON YACHT BASIC PACKAGE STATE START FROM HERE
    const[basicpackagetotalroundtraveledonyacht,updateroundtraveledbasiconyacht]=useState('');
    const[basicpackageroundsrangeonyacht,updateroundrangebasiconyacht]=useState('');
    const[selectyachtlisting,updateyachtlisting]=useState("no room available");
    console.log(selectyachtlisting);
    const[basicpackageextrafacilitiesonyacht,updateextrafacilitiesoneventbasiconyacht]=useState('');
    const[basicpackageroundsdiscountpriceoneventonyacht,updatediscountpriceoneventyachtbasic]=useState('');


    console.log("basicpackagetotalroundtraveledonyacht:"+basicpackagetotalroundtraveledonyacht);
    console.log("basicpackageroundsrangeonyacht:"+basicpackageroundsrangeonyacht);
    console.log("selectyachtlisting:"+selectyachtlisting);
    console.log("basicpackageextrafacilitiesonyacht:"+basicpackageextrafacilitiesonyacht);
    console.log("basicpackageroundsdiscountpriceoneventonyacht:"+basicpackageroundsdiscountpriceoneventonyacht);


     //  EVENT ON YACHT BASIC PACKAGE STATE CLOSE FROM HERE

      //  EVENT ON YACHT PREMIUM PACKAGE STATE START FROM HERE

     const[premiumpackagetotalroundtraveledonyacht,updateroundtraveledpremiumonyacht]=useState('');
     const[premiumpackageroundsrangeonyacht,updateroundrangepremiumonyacht]=useState('');
     const[selectyachtlistingpremium,updateyachtlistingpremium]=useState("no room available");
     const[premiumpackageextrafacilitiesonyacht,updateextrafacilitiesoneventpremiumonyacht]=useState('');
     const[premiumpackageroundsdiscountpriceoneventonyacht,updatediscountpriceoneventyachtpremiun]=useState('');


     console.log("premiumpackagetotalroundtraveledonyacht:"+premiumpackagetotalroundtraveledonyacht);
    console.log("premiumpackageroundsrangeonyacht:"+premiumpackageroundsrangeonyacht);
    console.log("selectyachtlistingpremium:"+selectyachtlistingpremium);
    console.log("premiumpackageextrafacilitiesonyacht:"+premiumpackageextrafacilitiesonyacht);
    console.log("premiumpackageroundsdiscountpriceoneventonyacht:"+premiumpackageroundsdiscountpriceoneventonyacht);

      //  EVENT ON YACHT PREMIUM PACKAGE STATE CLOSE FROM HERE
 
    function CreateEvent() {
        axios.post("http://localhost:5000/selectalldataforcreateevent", {

            OwnerID: OSID,

        }).then((result) => {
            console.log(result);

            if (result.data.message) {
                alert(result.data.message)
            }
            else {
                console.log(result.data)
                localStorage.setItem("selectyachtalllistingofownerforcreatingevent", JSON.stringify(result.data))

                let selectyachtalllistingofownerforcreatingevent = localStorage.getItem("selectyachtalllistingofownerforcreatingevent");



                let owneryachtlisting = JSON.parse(selectyachtalllistingofownerforcreatingevent)
                console.log(owneryachtlisting);

                document.getElementById("secondrowyacht").style.display = "flex";

                for (let i = 0; i < owneryachtlisting.length; i++) {
                    document.getElementById("formselect").innerHTML += "<Option value=" + owneryachtlisting[i].IMO_number + ">" + owneryachtlisting[i].Type_name + "Listing" + (i + 1) + "</Option>"
                }








            }

        })

    }

    function EventBasicform()
    { 
        let nameofevent=/^[A-Za-z ]+$/;
        let daysofevent=/^[0-9]+$/;

        let eventname=nameofevent.test(document.getElementById("Eventname").value)
        let eventdays=daysofevent.test(document.getElementById("Eventdays").value);
    
        console.log("ali")
        if(document.getElementById("Eventname").value=="")
        {
            alert("Enter your event name");
            document.getElementById("Eventname").focus();
        }
        else if(document.getElementById("Eventdays").value=="")
        {
            alert("Enter your event days");
            document.getElementById("Eventdays").focus();
        }
        else if(document.getElementById("startingdate").value=="")
        {
            alert("Enter starting date");
            document.getElementById("startingdate").focus();
        }
        else if(document.getElementById("endingdate").value=="")
        {
            alert("Enter ending date");
            document.getElementById("endingdate").focus();
        }
        else if(document.getElementById("formselect").value=="")
        {
            alert("Select your listing in which you want to create event");
            document.getElementById("formselect").focus();
        }
        else if(eventname==false)
        {
            alert("follow following pattern::only alphabets are allowed")
            document.getElementById("Eventname").focus()
        }
        else if(eventdays==false)
        {
            alert("follow following pattern::only digits in this field which i focus");
            document.getElementById("Eventdays").focus();
        }
        else 
        {
            let selectyachtalllistingofownerforcreatingevent = localStorage.getItem("selectyachtalllistingofownerforcreatingevent"); 

            let owneryachtlisting = JSON.parse(selectyachtalllistingofownerforcreatingevent)
            console.log(owneryachtlisting);
    
            for(let i=0;i<owneryachtlisting.length;i++)
            {
                if(document.getElementById("formselect").value==owneryachtlisting[i].IMO_number)
                {
                    if(owneryachtlisting[i].Room=="Yes")
                    {
                        updateyachtlisting("");
                        updateyachtlistingpremium("");



                        document.getElementById("roomdetail").placeholder="Vip room quantity:2 ,price as per hours and days basic";

                        document.getElementById("roomdetailpremium").placeholder="Vip room quantity:2 ,price as per hours and days premium ";
                        

                    

    
                    }
                    else
                    {
                       
                        document.getElementById("roomdetail").value=selectyachtlisting;
                        document.getElementById("roomdetailpremium").value=selectyachtlistingpremium;
    
                        document.getElementById("roomdetail").disabled=true;
                        document.getElementById("roomdetailpremium").disabled=true;
                    }
                }
            }
            document.getElementById("secondrowyacht").style.display="none";
            document.getElementById("thirdrowforofbasicpakageofevent").style.display="flex";
            document.getElementById("createeventrow").style.display="none";


        }
        console.log(document.getElementById("formselect").value);
    }

    function GotoEventPremiumPackage()
    {
        let numberpattern=/^[0-9]+$/;
        let roundrangepattern=/^[0-9]{2,5}$/;

        let roundquantityparticularoneteam=numberpattern.test(document.getElementById("howmanyround").value);

        let roundrange=roundrangepattern.test(document.getElementById("roundrange").value)

        let roundprice=numberpattern.test(document.getElementById("discountprice").value)


        if(document.getElementById("howmanyround").value=="")
        {
            alert("Enter many round did you traveled on particular team")
            document.getElementById("howmanyround").focus();
        }
        else if(document.getElementById("roundrange").value=="")
        {
            alert("Enter rounds range");
            document.getElementById("roundrange").focus();
        }
        else if(document.getElementById("roomdetail").value=="")
        {
            alert("Enter detail of vip room and normal room quantity and price must");
            document.getElementById("roomdetail").focus();
        }
        else if(document.getElementById("extrafacilities").value=="")
        {
            alert("Enter extrafacilities in yacht event basic package");
            document.getElementById("extrafacilities").focus();
        }
        else if(document.getElementById("discountprice").value=="")
        {
            alert("Enter price of round as per round quantity (discount price)");
            document.getElementById("discountprice").focus();
        }
        else if(roundquantityparticularoneteam==false)
        {
            alert("Enter only digits in this round traveled particular onen team");
            document.getElementById("howmanyround").focus();
        }
        else if(roundrange==false)
        {
            alert("Enter only digits but minumum digits is 2")
            document.getElementById(roundrange).focus()
        }
        else if(roundprice==false)
        {
            alert("Enter price in digits enter only digits in discount round price field");
            document.getElementById("discountprice").focus();
        }
        else if(document.getElementById("roomdetail").value.length >255)
        {
            alert("your lenght is greater than 255")
            document.getElementById("roomdetail").focus();
        }
        else if(document.getElementById("extrafacilities").value.length >255)
        {
            alert("your length is greater than 255")
            document.getElementById("extrafacilities").focus();
        }
        else 
        {
            document.getElementById("fourthrowforofbasicpakageofevent").style.display="flex";
            document.getElementById("thirdrowforofbasicpakageofevent").style.display="none";
        }

    }

    function Gobacktoeventsimpleform()
    {
        document.getElementById("thirdrowforofbasicpakageofevent").style.display="none";
        document.getElementById("secondrowyacht").style.display="flex";
    }

    function SubmitFormEventYacht()
    {
        let numberpattern=/^[0-9]+$/;
        let roundrangepattern=/^[0-9]{2,5}$/;

        let roundquantityparticularoneteam=numberpattern.test(document.getElementById("howmanyroundpremium").value);

        let roundrange=roundrangepattern.test(document.getElementById("roundrangepremium").value)

        let roundprice=numberpattern.test(document.getElementById("discountpricepremium").value)


        if(document.getElementById("howmanyroundpremium").value=="")
        {
            alert("Enter many round did you traveled on particular team")
            document.getElementById("howmanyroundpremium").focus();
        }
        else if(document.getElementById("roundrangepremium").value=="")
        {
            alert("Enter rounds range");
            document.getElementById("roundrangepremium").focus();
        }
        else if(document.getElementById("roomdetailpremium").value=="")
        {
            alert("Enter detail of vip room and normal room quantity and price must");
            document.getElementById("roomdetailpremium").focus();
        }
        else if(document.getElementById("extrafacilitiespremium").value=="")
        {
            alert("Enter extrafacilities in yacht event premium package");
            document.getElementById("extrafacilitiespremium").focus();
        }
        else if(document.getElementById("discountpricepremium").value=="")
        {
            alert("Enter price of round as per round quantity (discount price)");
            document.getElementById("discountpricepremium").focus();
        }
        else if(roundquantityparticularoneteam==false)
        {
            alert("Enter only digits in this round traveled particular onen team");
            document.getElementById("howmanyroundpremium").focus();
        }
        else if(roundrange==false)
        {
            alert("Enter only digits but minumum digits is 2")
            document.getElementById("roundrangepremium").focus()
        }
        else if(roundprice==false)
        {
            alert("Enter price in digits enter only digits in discount round price field");
            document.getElementById("discountpricepremium").focus();
        }
        else if(document.getElementById("roomdetailpremium").value.length >255)
        {
            alert("your lenght is greater than 255")
            document.getElementById("roomdetailpremium").focus();
        }
        else if(document.getElementById("extrafacilitiespremium").value.length >255)
        {
            alert("your length is greater than 255")
            document.getElementById("extrafacilitiespremium").focus();
        }
        else 
        {
            axios.post("http://localhost:5000/Eventonyachtdata",{

            YachtEventName:eventnameonyahct,
            YachtEventDays:eventdaysonyacht,
            YachtEventstartingdate:eventstartingdateonyacht,
            YachtEventEndingDate:eventendingdateonyacht,
            YachtEventListing:eventselectinglistingofyacht,
            YachtEventOwnerID:OSID,


            Basicyachttotalrounded:basicpackagetotalroundtraveledonyacht,
            Basicyachtroundedrange:basicpackageroundsrangeonyacht,
            Basicyachtroomfacilitiesdetail:selectyachtlisting,
            Basicyachtextrafacilities:basicpackageextrafacilitiesonyacht,
            Basicyachtroundprice:basicpackageroundsdiscountpriceoneventonyacht,


            
            premiumyachttotalrounded:premiumpackagetotalroundtraveledonyacht,
            premiumyachtroundedrange:premiumpackageroundsrangeonyacht,
            premiumyachtroomfacilitiesdetail:selectyachtlistingpremium,
            premiumyachtextrafacilities:premiumpackageextrafacilitiesonyacht,
            premiumyachtroundprice:premiumpackageroundsdiscountpriceoneventonyacht,



            }).then((result)=>
            {
                console.log(result);
            })
            alert("yacht event form is proper fill");
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
                <div className="row justify-content-md-start justify-content-between px-0">
                    <div className="col-lg-2 col-3 d-md-block d-none"><Navbar></Navbar></div>
                    <div className="col-lg-10 col-md-9  col-8 content border border-dark p-0">

                        {/* FIRST ROW FOR CREATE EVENT IN YACHT START FROM HERE */}


                        <div className="row createeventrow" id="createeventrow">
                            <div className="col-12 text-center py-2" id="createeventbutton">
                                <button className="btn btn-secondary" onClick={CreateEvent}>Create Event</button>
                            </div>
                        </div>

                        {/* FIRST ROW FOR CREATE EVENT IN YACHT CLOSE FROM HERE */}

                        {/* SECOND ROW FOR CREATE EVENT IN YACHT START FROM HERE */}

                        <div className="row secondroweventyacht justify-content-center py-4" id="secondrowyacht">

                            <div className="col-6 border border-dark" id="eventformcolumn ">
                                {/* first row in secondroweventyachteventformcolumn start from here */}
                                <div className="row" id="firstrowofsecondroweventyacht">

                                    {/* first column in first row of secondroweventyacht start from here */}
                                    <div className="col border border-dark py-2">

                                        <input type="text" placeholder="Enter name of Event" id="Eventname" className="form-control" value={eventnameonyahct} onChange={(e)=>{updateeventnameonyacht(e.target.value)}}></input>
                                    </div>



                                    {/* first column in first row of secondroweventyacht close from here */}

                                    {/* second column in first of secondroweventyacht start from here */}

                                    <div className="col border border-dark py-2">

                                        <input type="text" placeholder="Enter How many days event are" className="form-control" id="Eventdays" value={eventdaysonyacht} onChange={(e)=>{updateeventdaysonyacht(e.target.value)}}></input>

                                    </div>

                                    {/* second column in first of secondroweventyacht close from here */}


                                </div>
                                {/* first row in secondroweventyachteventformcolumn close from here */}

                                {/* second row in secondroweventyachteventformcolumn start from here */}

                                <div className="row" id="secondrowofsecondroweventyachtformcolumn">
                                    {/* first column in second row of secondroweventyachtformcolumn start from here */}



                                    <div className="col border border-dark py-2">

                                        <label className="form-label" for="startingdate"> Event Starting Date</label>

                                        <input type="date" className="form-control" id="startingdate" value={eventstartingdateonyacht} onChange={(e)=>{updateventstartingdateonyacht(e.target.value)}}></input>

                                    </div>

                                    {/* first column in second row of secondroweventyachtformcolumn close from here */}

                                    {/* second column in secondrow of secondroweventyachteventformcolumn start from here */}


                                    <div className="col border border-dark py-2">
                                        <label className="form-label" for="endingdate"> Event Ending Date</label>
                                        <input type="date" className="form-control" id="endingdate" value={eventendingdateonyacht} onChange={(e)=>{updateeventendingdateonyacht(e.target.value)}}></input>
                                    </div>


                                    {/* second column in secondrow of secondroweventyachteventformcolumn close from here */}


                                </div>


                                {/* second row in secondroweventyachteventformcolumn close from here */}
                                <div className="row" id="thirdrowforselect">

                                    <div className="col border border-dark py-2">
                                        <label for="formselect" className="form-label">Select your listing in which you done Event</label>
                                        <select className="form-select" id="formselect" onChange={(e)=>{updateeventselectinglistingofyacht(e.target.value)}}></select>
                                    </div>
                                </div>

                                <div className="row" id="fourthrowforbutton">
                                    <div className="col text-center py-2">
                                        <button className="btn btn-secondary" onClick={EventBasicform}>Next</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* SECOND ROW FOR CREATE EVENT IN YACHT CLOSE FROM HERE */}

                        {/* THIRD ROW FOR CREATE EVENT IN YACHT START FROM HERE */}
                        <div className="row justify-content-center py-4" id="thirdrowforofbasicpakageofevent">

                            <div className="col-8 border border-dark" id="basicpackageeventform">

                                <div className="row">

                                    <div className="col-12 text-center py-2" id="heading"><h3>Basic Package Event Form</h3></div>

                                </div>

                                {/* basicpackageformcolumn row start from here */}

                                <div className="row ">
                                    {/* first column basic package event form start from here */}
                                    <div className="col border border-dark py-2" id="roundcolumn">

                                        <label for="howmanyround" className="form-label">Enter round traveled one team in basic package</label>

                                        <input type="text" placeholder="Enter how many round traveled one team(qua)" className="form-control" id="howmanyround" value={basicpackagetotalroundtraveledonyacht} onChange={(e)=>{updateroundtraveledbasiconyacht(e.target.value)}}></input>

                                    </div>
                                    {/* first column basic package event form close from here */}

                                    {/* second column basic package event form start from here */}

                                    <div className="col border border-dark py-2" id="roundrangecolumn">

                                        <label for="roundrange" className="form-label">Enter round range</label>

                                        <input type="text" placeholder="Enter round range" className="form-control" id="roundrange" value={basicpackageroundsrangeonyacht} onChange={(e)=>{updateroundrangebasiconyacht(e.target.value)}}></input>

                                    </div>

                                    {/* second column basic package event form close from here */}

                                </div>
                                {/* basicpackageformcolumn row close from here */}


                                {/* basic package form column second row start from here */}
                                <div className="row" id="secondrowbasicpackageformcolumn">

                                    {/* first column second row start from here */}
                                    <div className="col border border-dark py-2" id="roomdetailcolumn">

                                        <label className="form-label">Enter Vip room and normal room detail(quantity and price)</label>
                                        <textarea type="text" className="form-control" placeholder="e.g Vip room quantity:2 ,price as per hours and days" id="roomdetail" rows="2" value={selectyachtlisting} onChange={(e)=>{updateyachtlisting(e.target.value)}}></textarea>
                                    </div>
                                    {/* first column second row close from here */}

                                    {/* second column second row start from here */}
                                    <div className="col border border-dark py-2" id="extrafacilitiescolumn">

                                        <label for="extrafacilities" className="form-label" >More Extra Facilities in Basic package(Enter detail) </label>
                                        <textarea type="text" className="form-control" placeholder="e.g Kitchen,chef,tender,firsaid" id="extrafacilities" rows="2" value={basicpackageextrafacilitiesonyacht} onChange={(e)=>{updateextrafacilitiesoneventbasiconyacht(e.target.value)}}></textarea>

                                    </div>
                                    {/* second column second row close from here */}



                                </div>
                                {/* basic package form column second row close from here */}

                                {/* basic package form column third row start from here */}

                                <div className="row">
                                    <div className="col-12 border border-dark py-2" id="discountpricecolumn">

                                        <label for="discountprice" className="form-label"> Discount price of round as per round quantity
                                        </label>


                                        <input type="text" placeholder="Enter discount price of round as per round quantity" className="form-control" id="discountprice" value={basicpackageroundsdiscountpriceoneventonyacht} onChange={(e)=>{updatediscountpriceoneventyachtbasic(e.target.value)}}></input>

                                    </div>
                                </div>


                                {/* basic package form column third row close from here */}

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
                        {/* THIRD ROW FOR CREATE EVENT IN YACHT CLOSE FROM HERE */}


                        {/* FOURTH ROW FOR CREATE EVENT IN YACHT START FROM HERE */}

                        <div className="row justify-content-center py-4 " id="fourthrowforofbasicpakageofevent">

                            <div className="col-8 border border-dark" id="premiumpackageeventform">

                                <div className="row">

                                    <div className="col-12 text-center py-2" id="heading"><h3>Premium Package Event Form</h3></div>

                                </div>

                                {/* basicpackageformcolumn row start from here */}

                                <div className="row ">
                                    {/* first column basic package event form start from here */}
                                    <div className="col border border-dark py-2" id="roundcolumn">

                                        <label  className="form-label">Enter round traveled one team in premium pack</label>

                                        <input type="text" placeholder="Enter how many round traveled one team(qua)" className="form-control" id="howmanyroundpremium" value={premiumpackagetotalroundtraveledonyacht} onChange={(e)=>{updateroundtraveledpremiumonyacht(e.target.value)}}></input>

                                    </div>
                                    {/* first column basic package event form close from here */}

                                    {/* second column basic package event form start from here */}

                                    <div className="col border border-dark py-2" id="roundrangecolumn">

                                        <label for="roundrange" className="form-label">Enter round range</label>

                                        <input type="text" placeholder="Enter round range" className="form-control" id="roundrangepremium" value={premiumpackageroundsrangeonyacht} onChange={(e)=>{updateroundrangepremiumonyacht(e.target.value)}}></input>

                                    </div>

                                    {/* second column basic package event form close from here */}

                                </div>
                                {/* basicpackageformcolumn row close from here */}


                                {/* basic package form column second row start from here */}
                                <div className="row" id="secondrowbasicpackageformcolumn">

                                    {/* first column second row start from here */}
                                    <div className="col border border-dark py-2" id="roomdetailcolumn">

                                        <label for="roomdetail" className="form-label">Enter Vip room and normal room detail(quantity and price)</label>
                                        <textarea type="text" className="form-control" placeholder="e.g Vip room quantity:2 ,price as per hours and days" id="roomdetailpremium" rows="2"
                                        value={selectyachtlistingpremium} onChange={(e)=>{updateyachtlistingpremium(e.target.value)}}></textarea>
                                    </div>
                                    {/* first column second row close from here */}

                                    {/* second column second row start from here */}
                                    <div className="col border border-dark py-2" id="extrafacilitiescolumn">

                                        <label for="extrafacilities" className="form-label" >More Extra Facilities in Basic package(Enter detail) </label>

                                        <textarea type="text" className="form-control" placeholder="e.g Kitchen,chef,tender,firsaid" id="extrafacilitiespremium" rows="2" value={premiumpackageextrafacilitiesonyacht} onChange={(e)=>{updateextrafacilitiesoneventpremiumonyacht(e.target.value)}}></textarea>

                                    </div>
                                    {/* second column second row close from here */}



                                </div>
                                {/* basic package form column second row close from here */}

                                {/* basic package form column third row start from here */}

                                <div className="row">
                                    <div className="col-12 border border-dark py-2" id="discountpricecolumn">

                                        <label for="discountprice" className="form-label"> Discount price of round as per round quantity</label>
                                        <input type="text" placeholder="Enter discount price of round as per round quantity" className="form-control" id="discountpricepremium" value={premiumpackageroundsdiscountpriceoneventonyacht}
                                        onChange={(e)=>{updatediscountpriceoneventyachtpremiun(e.target.value)}}></input>

                                    </div>
                                </div>


                                {/* basic package form column third row close from here */}

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
                        {/* FOURTH ROE FOR CREATE EVENT IN YACHT CLOSE FROM HERE */}






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
export default EventYacht;