import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import React, { useState } from 'react';
import './style.css';
import './profile.css'

import axios, { Axios } from "axios";
function Profie() {
    let localdata = localStorage.getItem("data");
    let profiledata = JSON.parse(localdata)
    let Firstname = profiledata.First_name;
    let Lastname = profiledata.Last_name;
    let Username = profiledata.User_name;
    let Email = profiledata.Email;
    let OSID = profiledata.OSID;
    console.log("OSID:" + OSID);
    

    const [UpdateFirstname, setfirstname] = useState(Firstname);
    const [UpdateLastname, setlastname] = useState(Lastname);
    const [UpdateUsername, setusername] = useState(Username);
    const [UpdateEmail, setmail] = useState(Email);

    console.log("UpdateFirstname:"+UpdateFirstname);
    console.log("UpdateLastname:"+UpdateLastname);
    console.log("UpdateUsername:"+UpdateUsername);
    console.log("UpdateEmail:"+UpdateEmail);

    const uploadedImage = React.useRef(null)


    const Changefile = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };
    function DisabledFirstname() {
        let first_name = document.getElementById("first_name");
        first_name.disabled = false;

    }
    function DisabledLastname() {
        let last_name = document.getElementById("last_name");
        last_name.disabled = false;
    }
    function DisabledUsername() {
        let user_name = document.getElementById("user_name");
        user_name.disabled = false;
    }
    function DisabledGmail() {
        let gmail_name = document.getElementById("gmail_name");
        gmail_name.disabled = false;
    }
    function Firstnamedata() {
        let ownername = /^[A-Za-z ]+$/;

        let NameofOwner = ownername.test(document.getElementById("first_name").value)

        if (document.getElementById("first_name").value == "") {
            alert("Fill firstname box first then save ")
                (document.getElementById("first_name")).focus();
        }
        else if (NameofOwner == false) {
            alert("Only Alphabets are allowed in this field ")
                (document.getElementById("first_name")).focus();
        }
        else if (document.getElementById("first_name").value.length < 3 || document.getElementById("first_name").value.length > 15) {
            alert("Your name length is not valid enter greater than equal to  3 alphabets and less than equal to 15")
        }
        else {
            alert("your firstname is proper filled");
            let disablefirst = document.getElementById("first_name")
            disablefirst.disabled = true;

            axios.post("http://localhost:5000/Updatefirstname",{

            Ownerupdatefirstname:UpdateFirstname,
            OwnerOSID:OSID,


            }).then((result)=>
            {
                console.log(result);

                localStorage.setItem("data",JSON.stringify(result.data[0]))
            });

        }

    }
    function Lastnamedata() {
        let ownername = /^[A-Za-z ]+$/;

        let LastNameofOwner = ownername.test(document.getElementById("last_name").value)

        if (document.getElementById("last_name").value == "") {
            alert("Fill lastname box first then save ")
                (document.getElementById("last_name")).focus();
        }
        else if (LastNameofOwner == false) {
            alert("Only Alphabets are allowed in this field ")
                (document.getElementById("last_name")).focus();
        }
        else if (document.getElementById("last_name").value.length < 3 || document.getElementById("last_name").value.length > 15) {
            alert("Your name length is not valid enter greater than equal to  3 alphabets and less than equal to 15")
        }
        else {
            alert("your lasrname is proper filled");
            let disablefirst = document.getElementById("last_name")
            disablefirst.disabled = true;

            axios.post("http://localhost:5000/UpdateLastname",{
                Ownerupdatelastname:UpdateLastname,
                UpdateOSIDusinglstname:OSID,

            }).then((result)=>
            {
                console.log(result);

                
                localStorage.setItem("data",JSON.stringify(result.data[0]))


            })

           

        }

    }
    function Usernamedata() {
        let U = /^[A-Za-z]+@[0-9]{1,3}$/;
        let UMinLength = 7;

        let UName = U.test(document.getElementById('user_name').value);

        if (document.getElementById("user_name").value == "") {
            alert("Fill lastname box first then save ")
                (document.getElementById("user_name")).focus();
        }
        else if (UName == false) {
            alert(
                "Follow this pattern which i write in bracket and then make username('First Enter any alphabets then @ this symbol and then any three digit like that('Hammad@123')')",
            );
            (document.getElementById("user_name")).focus();
        }
        else if (document.getElementById('user_name').value.length < UMinLength) {
            alert(
                'The username you created is not in valid length enter minimum 7 character',
            );
            (document.getElementById("user_name")).focus();
        }
        else {
            alert("your username is proper filled");
            let disablefirst = document.getElementById("user_name")
            disablefirst.disabled = true;

            axios.post("http://localhost:5000/updateusername",{
                Ownerupdateusername:UpdateUsername,
                UpdateOSIDusingusername:OSID,

            }).then((result)=>
            {
                console.log(result);

                
                localStorage.setItem("data",JSON.stringify(result.data[0]))


            })

        }

    }
    function Gmaildata() 
    {
        let E = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    

        let Email = E.test(document.getElementById('gmail_name').value);

        if (document.getElementById("gmail_name").value == "") {
            alert("Fill Gmail box first then save ")
                (document.getElementById("gmail_name")).focus();
        }
        else if (Email == false) {
            
                alert('Invalid Email...Type valid Email then Submit');
        
            (document.getElementById("gmail_name")).focus();
        }
       
        else {
            alert("your mail box is proper filled");
            let disablefirst = document.getElementById("gmail_name")
            disablefirst.disabled = true;

            axios.post("http://localhost:5000/updatemail",{
                Ownerupdateusermail:UpdateEmail,
                UpdateOSIDusingmail:OSID,

            }).then((result)=>
            {
                console.log(result);

                
                localStorage.setItem("data",JSON.stringify(result.data[0]))

                
            })



        }

    }
    return (
        <div>
            <Header></Header>
            <div className="container-fluid ">
                <div className="row justify-content-md-start justify-content-between">
                    <div className="col-lg-2 col-3 d-md-block d-none "><Navbar></Navbar></div>

                    <div className="col-lg-10 col-md-9 col-8 content  profilediv">

                        {/* PROFILE CONTENT FIRST ROW START FROM HERE */}

                        {/* <div className="row">

                            <div className="col-12 backgroundimage border border-dark z-index-n1"></div>

                        </div> */}

                        {/* PROFILE CONTENT FIRST ROW CLOSE FROM HERE */}

                        {/* SECOND ROW OF CONTENT IMAGE PROFILE START FROM HERE */}



                        <div className="row  justify-content-center imageofprofile  ">

                            <div className="col-1 px-0 profileimage    ">


                                <img ref={uploadedImage} className="rounded-circle" id="img1"></img>
                                <input type="file" className="form-control" id="file" onChange={Changefile}></input>
                                <label for="file" id="choose" className="text-center" >Choose File</label>


                            </div>

                        </div>


                        {/* SECOND ROW OF CONTENT IMAGE PROFILE CLOSE FROM HERE */}

                        {/* THIRD ROW OF DATA PROFILE START FROM HERE */}

                        <div className="row justify-content-center  ">

                            <div className="col-7 manageprofile  bg-dark  border border-light text-light">
                                {/* INSIDE PROFILE START FROM HERE */}

                                <div className="row Profileheadingrow ">

                                    <div className="col-12 text-center">

                                        <h3>My Profile</h3>

                                    </div>

                                </div>

                                {/* INSIDE PROFILE CLOSE FROM HERE */}

                                <div className="row">
                                    {/* SECOND ROW START FROM HERE INSIDE  */}
                                    <div className="col-3 tableforprofile py-3 px-0">

                                        <table className="table ">

                                            <tbody>

                                                <tr className="text-start">
                                                    <td>FirstName</td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td>LastName</td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td>Username</td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td>Gmail</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="col-7 text  py-3 px-0">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td><input type="text" placeholder="Enter your firstname" id="first_name" className="form-control " value={UpdateFirstname} onChange={(e) => { setfirstname(e.target.value) }} disabled></input></td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" placeholder="Enter your lastname" id="last_name" className="form-control" value={UpdateLastname} onChange={(e) => { setlastname(e.target.value) }} disabled></input></td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" placeholder="Enter your username" id="user_name" className="form-control" value={UpdateUsername}
                                                        onChange={(e) => { setusername(e.target.value) }} disabled></input></td>
                                                </tr>
                                                <tr>
                                                    <td><input type="text" placeholder="Enter your gmail" id="gmail_name" className="form-control" value={UpdateEmail} onChange={(e) => { setmail(e.target.value) }} disabled></input></td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>

                                    <div className="col-1 icons">
                                        <table className="table">
                                            <tbody>
                                                <tr className="text-start">
                                                    <td><i class="bi bi-pencil-square iconofedit" onClick={DisabledFirstname}></i></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><i class="bi bi-pencil-square iconofedit" onClick={DisabledLastname}></i></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><i class="bi bi-pencil-square iconofedit" onClick={DisabledUsername}></i></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><i class="bi bi-pencil-square iconofedit" onClick={DisabledGmail}></i></td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>

                                    <div className="col-1 save p-0">
                                        <table className="table">
                                            <tbody>
                                                <tr className="text-start">
                                                    <td><button type="button" onClick={Firstnamedata}>Save</button></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><button type="button" onClick={Lastnamedata}>Save</button></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><button type="button" onClick={Usernamedata}>Save</button></td>
                                                </tr>
                                                <tr className="text-start">
                                                    <td><button type="button" onClick={Gmaildata}>Save</button></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>


                            </div>
                        </div>

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
export default Profie;