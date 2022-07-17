// import React from "react";
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import React, { useState } from 'react'
import Axios from 'axios'
import './style.css'
import './Boat.css'
function Boat() {
  React.useEffect(() => {
    let localdata = localStorage.getItem('data')
    if (localdata) {
      let object = JSON.parse(localdata)
      console.log('object', object)
      setOwnerID(object.OSID)
    }
  }, [])
  const [ownerID, setOwnerID] = useState('')
  // Boat form start from here
  const [ownerBoatname, Boatname] = useState('')
  const [ownerBoatwidth, Boatwidth] = useState('')
  const [ownertitileofboat, titleofboat] = useState('')
  const [ownerBoatcolor, Boatcolor] = useState('')
  const [ownerBoatimonumber, imonumber] = useState('')
  const [ownerBoatseaaddress, seaaddress] = useState('')
  const [VesselOperatorName, operatorname] = useState('')
  const [Ownerboattype, typeofboat] = useState('')
  const [Ownerboatmakemodel, boatmakemodel] = useState('')
  const [Boatimage1, image1] = useState('')
  const [Boatimage2, image2] = useState('')
  const [Boatimage3, image3] = useState('')
  // Boat form close from here

  console.log('ownerBoatname:' + ownerBoatname)
  console.log('ownerBoatwidth:' + ownerBoatwidth)
  console.log('ownertitileofboat:' + ownertitileofboat)
  console.log('ownerBoatcolor:' + ownerBoatcolor)
  console.log('ownerBoatimonumber:' + ownerBoatimonumber)
  console.log('ownerBoatseaaddress:' + ownerBoatseaaddress)
  console.log('VesselOperatorName:' + VesselOperatorName)
  console.log('Ownerboattype:' + Ownerboattype)
  console.log('Boatimage1:' + Boatimage1)
  console.log('Boatimage2:' + Boatimage2)
  console.log('Boatimage3:' + Boatimage3)

  // Boat day trip states start from here
  const [Boatdaytripstarttime, boatdaytripstartingtime] = useState('')
  const [Boatdaytripendtime, boatdaytripendingtime] = useState('')
  const [Boatroundtraveling, boattravelingroundname] = useState('')
  const [Boattravelingrange, travelingrangeboat] = useState('')
  const [Boattravelingroundprice, travelingroundrangeprice] = useState('')
  const [extrafacilitiesoffishing, boatfishingfacility] = useState('')
  const [extrafacilityoflifejacket, boatlifejacketfacility] = useState('')
  const [extrafacilityofparachute, boatparachutefacility] = useState('')

  console.log('Boatdaytripstarttime:' + Boatdaytripstarttime)
  console.log('Boatdaytripendtime:' + Boatdaytripendtime)
  console.log('Boatroundtraveling:' + Boatroundtraveling)
  console.log('Boattravelingrange:' + Boattravelingrange)
  console.log('Boattravelingroundprice:' + Boattravelingroundprice)
  console.log('extrafacilitiesoffishing:' + extrafacilitiesoffishing)
  console.log('extrafacilityoflifejacket:' + extrafacilityoflifejacket)
  console.log('extrafacilityofparachute:' + extrafacilityofparachute)
  // Boat day trip states close from here

  function Gotofurtherboatform() {
    let Boatname = /^[A-Za-z ]+$/
    let Boatwidth = /^[0-9.]+$/
    let Boatcolor = /^[A-Za-z ]+$/
    let Boatimonumber = /^[0-9]{7}$/

    let OwnerBoatname = Boatname.test(
      document.getElementById('yachtname').value,
    )
    let OwnerBoatwidth = Boatwidth.test(document.getElementById('width').value)
    let OwnerBoatheight = Boatname.test(
      document.getElementById('titlefield').value,
    )
    let OwnerBoatcolor = Boatcolor.test(
      document.getElementById('colorofyacht').value,
    )
    let OwnerBoatimonumber = Boatimonumber.test(
      document.getElementById('Imonumber').value,
    )
    let OwnerBoattypename = Boatname.test(
      document.getElementById('EntertypeofboatName').value,
    )
    let OwneroperatornameofBoat = Boatname.test(
      document.getElementById('EnterOperatorName').value,
    )
    let file = /(\.jpg|\.png)$/i

    if (document.getElementById('yachtname').value == '') {
      alert('Enter First Boat Name')
      document.getElementById('yachtname').focus()
    } else if (document.getElementById('width').value == '') {
      alert('Enter width of Boat first')
      document.getElementById('width').focus()
    } else if (document.getElementById('titlefield').value == '') {
      alert('Enter your title of yacht')
      document.getElementById('titlefield').focus()
    } else if (document.getElementById('colorofyacht').value == '') {
      alert('Enter color of Boat')
      document.getElementById('colorofyacht').focus()
    } else if (document.getElementById('seaadress').value == '') {
      alert('Enter your sea location')
    } else if (document.getElementById('Imonumber').value == '') {
      alert('Enter Imo number of our Boat')
      document.getElementById('Imonumber').focus()
    } else if (document.getElementById('EntertypeofboatName').value == '') {
      alert('Enter your boat type first')
      document.getElementById('EntertypeofboatName').focus()
    } else if (document.getElementById('makemodel').value == '') {
      alert('Enter your make/model')
      document.getElementById('makemodel').focus()
    } else if (document.getElementById('EnterOperatorName').value == '') {
      alert('Enter your boat operator name')
      document.getElementById('EnterOperatorName').focus()
    } else if (document.getElementById('image1').value == '') {
      alert('Choose image one')
      document.getElementById('image1').focus()
    } else if (document.getElementById('image2').value == '') {
      alert('Choose image two')
      document.getElementById('image2').focus()
    } else if (document.getElementById('image3').value == '') {
      alert('Choose image three')
      document.getElementById('image3').focus()
    } else if (document.getElementById('yachtname').value.length > 20) {
      alert(
        'your boat name length is greater than 20 only maximum 20 length allowed',
      )
      document.getElementById('yachtname').focus()
    } else if (
      document.getElementById('colorofyacht').value.length < 3 ||
      document.getElementById('colorofyacht').value.length > 8
    ) {
      alert(
        'boat color name length is ' +
          document.getElementById('colorofyacht').value.length +
          'Enter name which length is between 3 and 8',
      )
      document.getElementById('colorofyacht').focus()
    } else if (OwnerBoatname == false) {
      alert('Only Enter Alphabets in boat name')
      document.getElementById('yachtname').focus()
    } else if (OwnerBoatwidth == false) {
      alert('Enter only digits in boat width feild')
    } else if (OwnerBoatheight == false) {
      alert('Enter Only alphabets in boat title feild')
    } else if (OwnerBoatcolor == false) {
      alert('Enter only Alphabets in boat color feild')
    } else if (OwnerBoatimonumber == false) {
      alert('Enter Only digits in Imo number feild which length is 7')
    } else if (OwnerBoattypename == false) {
      alert('Enter only Alphabets in boat type name  field')
    } else if (OwneroperatornameofBoat == false) {
      alert('Enter only alphabets')
      document.getElementById('EnterOperatorName').focus()
    } else if (!file.exec(document.getElementById('image1').value)) {
      alert('Only Jpg and png file are allowed')
      document.getElementById('image1').focus()
    } else if (!file.exec(document.getElementById('image2').value)) {
      alert('Only Jpg and png file are allowed')
      document.getElementById('image2').focus()
    } else if (!file.exec(document.getElementById('image3').value)) {
      alert('Only Jpg and png file are allowed')
      document.getElementById('image3').focus()
    } else {
      let yachtform = document.getElementById('Boatform')
      yachtform.style.display = 'none'

      let yachtamenitiesform = document.getElementById('daytripform')
      yachtamenitiesform.style.display = 'block'
    }
  }

  function Gobacktoboatform() {
    let showboatform = document.getElementById('Boatform')
    showboatform.style.display = 'block'

    let hideboatdaytripform = document.getElementById('daytripform')
    hideboatdaytripform.style.display = 'none'
  }
  function SubmitBoatform() {
    let travelingroundinseaboatdaytrip = /^[A-Za-z]+$/
    let travelingrangeinseaboatdaytrip = /^[0-9]{2,5}$/
    let price = /^[0-9]+$/

    let roundnameboattraveling = travelingroundinseaboatdaytrip.test(
      document.getElementById('boattravelingmileround').value,
    )

    let rangetravelingroundboatdaytrip = travelingrangeinseaboatdaytrip.test(
      document.getElementById('boattravelingmileinsea').value,
    )

    let travelingroundrangeprice = price.test(
      document.getElementById('boattravelingmileprice').value,
    )

    if (document.getElementById('boatavalabilitystartingtime').value == '') {
      alert('Enter your boat day trip availability starting time')
      document.getElementById('boatavalabilitystartingtime').focus()
    } else if (
      document.getElementById('boatavalabilityendingtime').value == ''
    ) {
      alert('Enter your boat day trip availability ending time')
      document.getElementById('boatavalabilityendingtime').focus()
    } else if (document.getElementById('boattravelingmileround').value == '') {
      alert('Enter your boat traveling round name')
      document.getElementById('boattravelingmileround').focus()
    } else if (document.getElementById('boattravelingmileinsea').value == '') {
      alert('Enter your boat traveling range')
      document.getElementById('boattravelingmileinsea').focus()
    } else if (document.getElementById('boattravelingmileprice').value == '') {
      alert('Enter your boat traveling round range price')
      document.getElementById('boattravelingmileprice').focus()
    } else if (
      document.querySelector(
        "input[name='Extrafacilitiesoffishing']:checked",
      ) == null
    ) {
      alert('choose your extra facility of fishing in yes or no')
    } else if (
      document.querySelector(
        "input[name='Extra facility of life jacket']:checked",
      ) == null
    ) {
      alert('choose your extra facility of life jacket in yes or no')
    } else if (
      document.querySelector(
        "input[name='Extra facility of Parachute']:checked",
      ) == null
    ) {
      alert('choose your extra facility of parachute in yes or no')
    } else if (roundnameboattraveling == false) {
      alert('Only Alphabets are in round name field allowed')
      document.getElementById('boattravelingmileround').focus()
    } else if (rangetravelingroundboatdaytrip == false) {
      alert('Only digits are allowed')
      document.getElementById('boattravelingmileinsea').focus()
    } else if (travelingroundrangeprice == false) {
      alert('Only digits are allowed')
      document.getElementById('travelingroundrangeprice').focus()
    } else {
      alert('Your form is proper filled')
      Axios.post('http://localhost:5000/Boat', {
        BoatOwnerID: ownerID,

        // Boat form data start
        NameofBoat: ownerBoatname,
        WidthofBoat: ownerBoatwidth,
        TitleofBoat: ownertitileofboat,
        ColorofBoat: ownerBoatcolor,
        TypeofBoat: Ownerboattype,
        ModelofBoat: Ownerboatmakemodel,
        OperratorofBoat: VesselOperatorName,
        Boatsealocation: ownerBoatseaaddress,
        ImonumberofBoat: ownerBoatimonumber,
        Image1ofBoat: Boatimage1,
        Image2ofBoat: Boatimage2,
        Image3ofBoat: Boatimage3,
        // Boat form data end

        // Boat Day Trip form data start
        starttimeofdaytripboat: Boatdaytripstarttime,
        endtimeofdaytripboat: Boatdaytripendtime,
        roundnameoftravelingrange: Boatroundtraveling,
        rangeoftraveling: Boattravelingrange,
        priceoftravelingrange: Boattravelingroundprice,
        fishingfacility: extrafacilitiesoffishing,
        lifejacketfacility: extrafacilityoflifejacket,
        parachutefacility: extrafacilityofparachute,

        // Boat Day Trip form data end
      }).then((result) => {
        console.log(result)

        localStorage.setItem('Boatlistingdata', JSON.stringify(result.data[0]))
      })
    }
  }
  return (
    <div>
      <Header></Header>
      <div className="container-fluid ">
        <div className="row justify-content-md-start justify-content-between">
          <div className="col-lg-2 col-3  d-md-block d-none">
            <Navbar></Navbar>
          </div>
          <div className="col-lg-10 col-md-9 col-8 content ">
            <div
              className="row mainrowofboatcontent  justify-content-center align-content-center "
              id="mainrowofboatcontent"
            >
              {/* Boat form start from here */}
              <div
                className="col-lg-10 col-12 border border-dark Baotvesselsame"
                id="Boatform"
              >
                {/* first row in yacht vessel same specification */}
                <div className="row firstrow ">
                  <div className="col border border-dark yachtheading text-center">
                    <h3>Boat Form</h3>{' '}
                  </div>
                </div>

                {/* first row in yacht vessel same specification close from here */}

                {/* second row start form here */}

                <div className="row secondrow py-2 border border-dark">
                  {/* second row first column start from here*/}

                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Boat Name Here"
                      id="yachtname"
                      value={ownerBoatname}
                      onChange={(e) => {
                        Boatname(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* second row first column close here */}

                  {/* second row second column start here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter width of Boat"
                      id="width"
                      value={ownerBoatwidth}
                      onChange={(e) => {
                        Boatwidth(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* second row second column close here */}
                </div>
                {/* second row close here */}

                {/* third row start form here */}

                <div className="row thirdrow py-2 border border-dark">
                  {/* third row first col start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter title of boat here"
                      id="titlefield"
                      value={ownertitileofboat}
                      onChange={(e) => {
                        titleofboat(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* third row first col close from here */}

                  {/* third row second col start from here */}

                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter color name of your Boat"
                      id="colorofyacht"
                      value={ownerBoatcolor}
                      onChange={(e) => {
                        Boatcolor(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* third row second column close from here */}
                </div>
                {/* third row close from here */}

                <div
                  className="row boattypeandmodelrow border border-dark py-2"
                  id="simplerow"
                >
                  {/* simple row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter type of Boat Name"
                      id="EntertypeofboatName"
                      className="form-control"
                      value={Ownerboattype}
                      onChange={(e) => {
                        typeofboat(e.target.value)
                      }}
                    ></input>
                  </div>
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Make/Model"
                      id="makemodel"
                      value={Ownerboatmakemodel}
                      onChange={(e) => {
                        boatmakemodel(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* simple row first column close from here */}
                </div>

                <div
                  className="row simplerow border border-dark py-2"
                  id="simplerow"
                >
                  {/* simple row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter Operator Name Here"
                      id="EnterOperatorName"
                      className="form-control"
                      value={VesselOperatorName}
                      onChange={(e) => {
                        operatorname(e.target.value)
                      }}
                    ></input>
                  </div>
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Sea location"
                      id="seaadress"
                      value={ownerBoatseaaddress}
                      onChange={(e) => {
                        seaaddress(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* simple row first column close from here */}
                </div>
                {/* simple row close from here */}

                {/* fourth row start from here */}

                <div className="row fourthrow py-2  border border-dark">
                  {/* fourth row first column start from here */}

                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Imo Number of Yacht"
                      id="Imonumber"
                      value={ownerBoatimonumber}
                      onChange={(e) => {
                        imonumber(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* fourth row first column close from here */}

                  {/* fourth row second col start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="file"
                      className="form-control"
                      id="image1"
                      value={Boatimage1}
                      onChange={(e) => {
                        image1(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* fourth row second col close from here */}
                </div>

                {/* fourth row close from here */}

                {/* fifth row start from here */}
                <div className="row fifthrow py-2 border border-dark">
                  {/* fifth row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="file"
                      className="form-control"
                      id="image2"
                      value={Boatimage2}
                      onChange={(e) => {
                        image2(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* fifth row first column close form here */}

                  {/* fifth row second column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="file"
                      className="form-control"
                      id="image3"
                      value={Boatimage3}
                      onChange={(e) => {
                        image3(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* fifth row second column close from here */}
                </div>
                {/* fifth row close from here */}

                {/* sixth row start from here */}
                <div className="row sixthrow  py-2  justify-content-center border border-dark">
                  <div className="col-lg-6 col-12 text-center py-2">
                    <button
                      className="btn btn-secondary px-3 fs-5"
                      onClick={Gotofurtherboatform}
                    >
                      Next
                    </button>
                  </div>
                </div>
                {/* sixth row close from here */}
              </div>
              {/* Boat form close  from here */}

              {/* Boat day trip form start from here */}
              <div
                className="col-lg-10 col-12 border border-dark daytripform"
                id="daytripform"
              >
                {/* Heading row of yacht day trip form start from here */}
                <div
                  className="row headingrow border border-dark py-2"
                  id="headingrow"
                >
                  <div className="col text-center">
                    <h3>Boat Day Trips</h3>
                  </div>
                </div>
                {/* Heading row of yacht day trip form close from here */}

                {/* daytrip firstrow start from here */}

                <div
                  className="row daytripfirstrow border border-dark py-2"
                  id="daytripfirstrow"
                >
                  {/* daytrip first column start from here  */}

                  <div
                    className="col-lg col-12 daytripfirstcolumn"
                    id="daytripfirstcolumn"
                  >
                    <label className="form-label">Day Trip Start Time</label>

                    <input
                      type="time"
                      className="form-control"
                      id="boatavalabilitystartingtime"
                      min="6:00"
                      max="17:00"
                      value={Boatdaytripstarttime}
                      onChange={(e) => {
                        boatdaytripstartingtime(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* day trip first column close from here */}

                  {/* day trip second column start from here */}
                  <div
                    className="col-lg col-12 daytripsecondcolumn"
                    id="daytripsecondcolumn"
                  >
                    <label className="form-label">Day Trip End Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="boatavalabilityendingtime"
                      value={Boatdaytripendtime}
                      onChange={(e) => {
                        boatdaytripendingtime(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* day trip second column close from here */}
                </div>
                {/* daytrip firstrow close from here */}
                {/* day trip second row start from here */}
                <div
                  className="row daytripsecondrow border border-dark py-2"
                  id="daytripsecondrow"
                >
                  {/* second row first column start from here */}
                  <div
                    className="col-lg col-12 daytripthirdcolumn"
                    id="daytripthirdcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter name of round boat traveling range"
                      className="form-control"
                      id="boattravelingmileround"
                      value={Boatroundtraveling}
                      onChange={(e) => {
                        boattravelingroundname(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* second row first column close from here */}

                  {/* second row second column start from here */}
                  <div
                    className="col-lg col-12 daytripfourthcolumn"
                    id="daytripfourthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter range of boat traveling "
                      className="form-control"
                      id="boattravelingmileinsea"
                      value={Boattravelingrange}
                      onChange={(e) => {
                        travelingrangeboat(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* second row second column close from here */}
                </div>
                {/* day trip second row close from here */}

                {/* day trip third row start from here */}
                <div
                  className="row daytripthirdrow border border-dark py-2"
                  id="daytripthirdrow"
                >
                  {/* third row first column start from here */}
                  <div
                    className="col-lg col-12 daytripfifthcolumn"
                    id="daytripfifthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter price of boat traveling round range in sea"
                      className="form-control"
                      id="boattravelingmileprice"
                      value={Boattravelingroundprice}
                      onChange={(e) => {
                        travelingroundrangeprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* third row first column close from here */}

                  {/* third row second column start from here */}
                  <div
                    className="col-lg col-12   daytripsixthcolumn py-2"
                    id="daytripsevethcolumn"
                  >
                    <label className="form-label">
                      (Extra Facility of Fishing availability)
                    </label>
                    &nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extrafacilitiesoffishing"
                        value="Yes"
                        id="Extrafacilitiesfishingyes"
                        onChange={(e) => {
                          boatfishingfacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilitiesfishingyes"
                        className="form-check-label"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extrafacilitiesoffishing"
                        value="no"
                        id="Extrafacilitiesfishingno"
                        onChange={(e) => {
                          boatfishingfacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilitiesfishingno"
                        className="form-check-label"
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* third row second column close from here */}
                </div>

                {/* day trip fourth row start from here */}
                <div
                  className="row daytripfourthrow border border-dark py-2"
                  id="daytripfourthrow"
                >
                  {/* day trip fourth row first column start from here */}
                  <div
                    className="col-lg col-12  daytripseventhcolumn py-2"
                    id="daytripseventhcolumn"
                  >
                    <label className="form-label">
                      (Extra facility of life jacket )
                    </label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extra facility of life jacket"
                        value="Yes"
                        id="Extrafacilityoflifejacketyes"
                        onChange={(e) => {
                          boatlifejacketfacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilityoflifejacketyes"
                        className="form-check-label"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extra facility of life jacket"
                        value="no"
                        id="Extrafacilityoflifejacketno"
                        onChange={(e) => {
                          boatlifejacketfacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilityoflifejacketno"
                        className="form-check-label"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip fourth row first column close from here */}

                  {/* day trip fourth row second column start from here */}
                  <div
                    className="col-lg col-12 daytripparachutecolumn py-2"
                    id="daytripparachutecolumn"
                  >
                    <label className="form-label">
                      (Extra facility of Parachute)
                    </label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extra facility of Parachute"
                        value="Yes"
                        id="ExtrafacilityofParachuteyes"
                        onChange={(e) => {
                          boatparachutefacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="ExtrafacilityofParachuteyes"
                        className="form-check-label"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extra facility of Parachute"
                        value="no"
                        id="ExtrafacilityofParachuteno"
                        onChange={(e) => {
                          boatparachutefacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="ExtrafacilityofParachuteno"
                        className="form-check-label"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip fourth row second column close from here */}
                </div>
                {/* day trip fourth row close from here */}

                {/* day trip fifth row start from here */}
                <div
                  className="row daytripbuttonrow border border-dark py-2"
                  id="daytripbuttonrow"
                >
                  {/* daytrip seventh row only colunm start from here */}
                  <div
                    className="col daytripbuttoncolumn text-center"
                    id="daytripbuttoncolumn"
                  >
                    <button
                      className="btn btn-secondary"
                      onClick={Gobacktoboatform}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-secondary ms-1"
                      onClick={SubmitBoatform}
                    >
                      Submit
                    </button>
                  </div>
                  {/* daytrip seventh row only colunm close from here */}
                </div>
              </div>

              {/* Boat day trip form close from here */}
            </div>
          </div>

          <div className="col-md-2  col-sm-3 col-4  resnav p-0" id="res">
            <ul className="nav nav-tabs bg-dark border-bottom-0 flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link p-0  py-2 fs-5">
                  <i className="bi bi-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link p-0 py-2 fs-5">
                  <i className="bi bi-chat-dots"></i>
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
export default Boat
