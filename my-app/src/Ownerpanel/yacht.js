import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Home from './Home'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './yacht.css'
import './style.css'
function Yacht() {
  useEffect(() => {
    let localdata = localStorage.getItem('data')
    if (localdata) {
      let object = JSON.parse(localdata)
      console.log('object',object)
      setOwnerID(object.OSID)
    }
  }, [])

  const navigate = useNavigate()

  const [ownerID, setOwnerID] = useState('')

  const [owneryachtname, yachtname] = useState('')
  const [owneryachtwidth, yachtwidth] = useState('')
  const [owneryachtheight, yachtheight] = useState('')
  const [owneryachtcolor, yachtcolor] = useState('')
  const [ownerimonumber, imonumber] = useState('')
  const [owneryachtseaaddress, seaaddress] = useState('')
  const [VesselOperatorName, operatorname] = useState('')
  const [yachtimage1, image1] = useState('')
  const [yachtimage2, image2] = useState('')
  const [yachtimage3, image3] = useState('')

  const [owneryachtRoomyesno, yachtroomchoice] = useState('')
  const [owneryachtroomquantity, yachtroomquantity] = useState('1')
  const [owneryachtviproomquantity, viproomofyachtquantity] = useState('')
  const [onwerviproommaxcapacity, viproommaximumcapacity] = useState('')
  const [ownervipperhoursroomprice, vipperhoursroomprice] = useState('')
  const [owneryachtnormalroomquantity, yachtnormalroomquantity] = useState('')
  const [
    owneryachtnormalroommaxcapacity,
    yachtnormalroommaxcapacity,
  ] = useState('')
  const [
    owneryachtnormalperhoursroomprice,
    yachtnormalperhoursroomprice,
  ] = useState('')
  const [owneryachtfloor, yachtfloor] = useState('')
  const [owneryachtdeck, yachtdeck] = useState('')
  const [ownerdeckcapacity, deckcapacity] = useState('')
  const [yachtkitchenservices, kitchenservices] = useState('')
  const [yachtchefservices, chef] = useState('')
  const [yachtsafetyamenities, safetyamenities] = useState('')
  const [owneryachtaidbox, oyachtaidbox] = useState('')
  const [owneryachtlifejacket, oyachtlifejacket] = useState('')

  const [daytriptotalyachttime, totalyachtavailabilitytime] = useState('')
  const [
    daytripyachtavailabilitystartingtime,
    yachtavailabilitystartingtime,
  ] = useState('')
  const [
    daytripyachtavailabilityendingtime,
    yachtavailabilityendingtime,
  ] = useState('')
  const [yachtnametravelingmileround, travelingmileroundname] = useState('')
  const [yachttravelingmile, travelingmileinseaofyacht] = useState('')
  const [yachtravelingmileprice, travelingmilepriceofyachtinsea] = useState('')
  const [
    extrafacilitiesowithtravelinginsea,
    yachtextrafacilitiesinsea,
  ] = useState('')
  const [yachtextrafacilitiesjetski, extrafacilitiesjetski] = useState('')
  const [
    yachtextrafacilitiesjetskiprice,
    extrafacilitiesjetskiprice,
  ] = useState('')
  const [yachtextrafacilitiestender, extrafacilitiestender] = useState('')
  const [
    yachtextrafacilitiestenderprice,
    extrafacilitiestenderprice,
  ] = useState('')
  const [yachtextrafacilitiesparachute, extrafacilitiesparachute] = useState('')
  const [
    yachtextrafacilitiesparachuteprice,
    extrafacilitiesparachuteprice,
  ] = useState('')
  const [
    moreextrafacilitiesinseawithprice,
    morefacilitiesinseawithprice,
  ] = useState('')
  const [
    daytriproomavailabilitystatus,
    roomavailabilitystatusdaytrip,
  ] = useState('')
  const [daytripviproomhours, howmanyhoursviproomindaytrip] = useState('')
  const [daytripnormalroomhours, howmanyhoursnormalroomindaytrip] = useState('')

  const [overnighttotalyachttime, totalyachtavalabiltytimeovernight] = useState(
    '',
  )
  const [
    overnightyachtavalabilitystarttime,
    yachtavalabilitystartingtime,
  ] = useState('')
  const [
    overnightyachtavalabilityendtime,
    yachtavalabilityendingtime,
  ] = useState('')
  const [
    overnightyachtnametravelingmileround,
    yachttravelingovernightroundname,
  ] = useState('')
  const [
    overnightyachttravelingmileinsea,
    yachttravelingmileinseanight,
  ] = useState('')
  const [
    overnightyachttravelingmileprice,
    yachttravelingmilepriceovernightinsea,
  ] = useState('')
  const [
    overnightextrafacilitiesinyacht,
    yachtovernightextrafacility,
  ] = useState('')
  const [
    textareaovernightyachtextrafacilities,
    descriptionovernightyachtextrafacility,
  ] = useState('')
  const [overnightyachtstayfacilities, yachtnightstayfacilityinroom] = useState(
    '',
  )
  const [maximumstayinviproom, enterhowmanydaystayinviproom] = useState('')
  const [
    overnightstayperviproomprice,
    yachtovernightstayviproomprice,
  ] = useState('')
  const [maximumstayinnormalroom, yachtovernightstayinnormalroom] = useState('')
  const [
    overnightstaypernormalroomprice,
    yachtovernightstaynormalroomprice,
  ] = useState('')

  console.log('ownerID:' + ownerID)
  console.log('owneryachtname:' + owneryachtname)
  console.log('owneryachtwidth:' + owneryachtwidth)
  console.log('owneryachtheight:' + owneryachtheight)
  console.log('owneryachtcolor:' + owneryachtcolor)
  console.log('owneryachtimonumber:' + ownerimonumber)
  console.log('Operator Name:' + VesselOperatorName)
  console.log('yachtimage1:' + yachtimage1)
  console.log('yachtimage2:' + yachtimage2)
  console.log('yachtimage3:' + yachtimage3)
  console.log('owneryachtroomchoiceyesno:' + owneryachtRoomyesno)
  console.log('owneryachtroomquantity:' + owneryachtroomquantity)
  console.log('owneryachtviproomquantity:' + owneryachtviproomquantity)
  console.log('onwerviproommaxcapacity:' + onwerviproommaxcapacity)
  console.log('owneryachtnormalroomquantity:' + owneryachtnormalroomquantity)
  console.log(
    'owneryachtnormalroommaxcapacity:' + owneryachtnormalroommaxcapacity,
  )
  console.log('owneryachtfloor:' + owneryachtfloor)
  console.log('owneryachtdeck:' + owneryachtdeck)
  console.log('ownerdeckcapacity:' + ownerdeckcapacity)

  console.log('owneryachtkitchenservices:' + yachtkitchenservices)
  console.log('yachtchefservices:' + yachtchefservices)
  console.log('yachtsafetyamenities:' + yachtsafetyamenities)
  console.log('owneryachtaidbox:' + owneryachtaidbox)
  console.log('owneryachtlifejacket:' + owneryachtlifejacket)
  console.log('owneryachttotalavalabilitytime:' + daytriptotalyachttime)
  console.log(
    'owneryachtavalabilitystartingtime:' + daytripyachtavailabilitystartingtime,
  )
  console.log(
    'owneryachtavalabilityendingtime:' + daytripyachtavailabilityendingtime,
  )
  console.log('owneryachttravelingmileroundname:' + yachtnametravelingmileround)
  console.log('owneryachttravelingmile:' + yachttravelingmile)
  console.log('owneryachttravelingmileprice:' + yachtravelingmileprice)
  console.log(
    'yachtfacilitiesintravelingsea:' + extrafacilitiesowithtravelinginsea,
  )
  console.log('yachtextrafacilitiesjetski:' + yachtextrafacilitiesjetski)
  console.log(
    'yachtextrafacilitiesjetskiprice:' + yachtextrafacilitiesjetskiprice,
  )
  console.log('yachtextrafacilitiestender:' + yachtextrafacilitiestender)
  console.log(
    'yachtextrafacilitiestenderprice:' + yachtextrafacilitiestenderprice,
  )
  console.log('yachtextrafacilitiesparachute:' + yachtextrafacilitiesparachute)
  console.log(
    'yachtextrafacilitiesparachuteprice:' + yachtextrafacilitiesparachuteprice,
  )
  console.log('daytriproomavailabilitystatus:' + daytriproomavailabilitystatus)
  console.log('ownervipperhoursdaytriproomprice:' + ownervipperhoursroomprice)
  console.log(
    'owneryachtnormalperhoursdaytriproomprice:' +
      owneryachtnormalperhoursroomprice,
  )
  console.log('daytripviproomhours:' + daytripviproomhours)
  console.log('daytripnormalroomhours:' + daytripnormalroomhours)
  console.log('moreextrafaccilities:' + moreextrafacilitiesinseawithprice)

  console.log('overnighttotalyachttime:' + overnighttotalyachttime)
  console.log(
    'overnightyachtavalabilitystarttime:' + overnightyachtavalabilitystarttime,
  )
  console.log(
    'overnightyachtavalabilityendtime:' + overnightyachtavalabilityendtime,
  )
  console.log(
    'overnightyachtnametravelingmileround:' +
      overnightyachtnametravelingmileround,
  )
  console.log(
    'overnightyachttravelingmileinsea:' + overnightyachttravelingmileinsea,
  )
  console.log(
    'overnightyachttravelingmileprice:' + overnightyachttravelingmileprice,
  )
  console.log(
    'overnightextrafacilitiesinyacht:' + overnightextrafacilitiesinyacht,
  )
  console.log(
    'textareaovernightyachtextrafacilities:' +
      textareaovernightyachtextrafacilities,
  )
  console.log('overnightyachtstayfacilities:' + overnightyachtstayfacilities)
  console.log('maximumstayinviproom:' + maximumstayinviproom)
  console.log('overnightstayperviproomprice:' + overnightstayperviproomprice)
  console.log('maximumstayinnormalroom:' + maximumstayinnormalroom)
  console.log(
    'overnightstaypernormalroomprice:' + overnightstaypernormalroomprice,
  )

  function Gotofurtheryachtform() {
    let yachtname = /^[A-Za-z ]+$/
    let yachtwidth = /^[0-9.]+$/
    let yachtheight = /^[0-9.]+$/
    let yachtcolor = /^[A-Za-z ]+$/
    let yachtimonumber = /^[0-9]{7}$/

    let Owneryachtname = yachtname.test(
      document.getElementById('yachtname').value,
    )
    let Owneryachtwidth = yachtwidth.test(
      document.getElementById('width').value,
    )
    let Owneryachtheight = yachtheight.test(
      document.getElementById('heightfield').value,
    )
    let Owneryachtcolor = yachtcolor.test(
      document.getElementById('colorofyacht').value,
    )
    let Owneryachtimonumber = yachtimonumber.test(
      document.getElementById('Imonumber').value,
    )
    let file = /(\.jpg|\.png)$/i

    if (document.getElementById('yachtname').value == '') {
      alert('Enter First Yacht Name')
      document.getElementById('yachtname').focus()
    } else if (document.getElementById('width').value == '') {
      alert('Enter width of yacht first')
      document.getElementById('width').focus()
    } else if (document.getElementById('heightfield').value == '') {
      alert('Enter your height of yacht')
      document.getElementById('heightfeild').focus()
    } else if (document.getElementById('colorofyacht').value == '') {
      alert('Enter color of yacht')
      document.getElementById('colorofyacht').focus()
    } else if (document.getElementById('seaadress').value == '') {
      alert('Enter your sea location')
    } else if (document.getElementById('Imonumber').value == '') {
      alert('Enter Imo number of our yacht')
      document.getElementById('Imonumber').focus()
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
        'your yacht name length is greater than 20 only maximum 20 length allowed',
      )
      document.getElementById('yachtname').focus()
    } else if (
      document.getElementById('colorofyacht').value.length < 3 ||
      document.getElementById('colorofyacht').value.length > 8
    ) {
      alert(
        'your color name length is ' +
          document.getElementById('colorofyacht').value.length +
          'Enter name which length is between 3 and 8',
      )
      document.getElementById('colorofyacht').focus()
    } else if (Owneryachtname == false) {
      alert('Only Enter Alphabets in yacht name')
      document.getElementById('yachtname').focus()
    } else if (Owneryachtwidth == false) {
      alert('Enter only digits in yacht width feild')
    } else if (Owneryachtheight == false) {
      alert('Enter Only digits in yacht height feild')
    } else if (Owneryachtcolor == false) {
      alert('Enter only Alphabets in yacht color feild')
    } else if (Owneryachtimonumber == false) {
      alert('Enter Only digits in Imo number feild which length is 7')
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
      let yachtform = document.getElementById('yachtform')
      yachtform.style.display = 'none'

      let yachtamenitiesform = document.getElementById('yachtamenitiesform')
      yachtamenitiesform.style.display = 'block'
    }
  }
  function Gobacktoyachtform() {
    let yachtform = document.getElementById('yachtform')
    yachtform.style.display = 'block'

    let yachtamenitiesform = document.getElementById('yachtamenitiesform')
    yachtamenitiesform.style.display = 'none'
  }
  function Gotoyachtdaytripform() {
    let pattern = /^[0-9]+$/
    let viproomquantity = pattern.test(
      document.getElementById('ViproomQuantity').value,
    )
    let viproomcapacity = pattern.test(
      document.getElementById('VipRoomMaximumCapacity').value,
    )
    // let viproomprice = pattern.test(document.getElementById("vipperroomprice").value)
    let normalroomquantity = pattern.test(
      document.getElementById('normalroomquantity').value,
    )
    let normalroomcapacity = pattern.test(
      document.getElementById('normalroommaxcapacity').value,
    )
    // let perdaynormalroomprice = pattern.test(document.getElementById("pernormalroomprice").value)
    let floor = pattern.test(
      document.getElementById('howmanyfloorinyacht').value,
    )
    let deck = pattern.test(document.getElementById('howmanydeckinyact').value)
    let deckcapacity = pattern.test(
      document.getElementById('yachtdeckcapacity').value,
    )

    if (document.querySelector('input[name="Room"]:checked') == null) {
      alert('Choose your Room Availability')
      document.getElementById('Roomavailability').focus()
    } else if (document.getElementById('howmanyfloorinyacht').value == '') {
      alert('Enter your yacht floor')
      document.getElementById('howmanyfloorinyacht').focus()
    } else if (document.getElementById('howmanydeckinyact').value == '') {
      alert('Enter how many deck in your yacht')
      document.getElementById('howmanydeckinyact').focus()
    } else if (document.getElementById('yachtdeckcapacity').value == '') {
      alert('Enter your yacht deck capacity')
      document.getElementById('yachtdeckcapacity').focus()
    } else if (
      document.querySelector("input[name='khicken']:checked") == null
    ) {
      alert('Select your khicken service availability')
    } else if (document.querySelector("input[name='chef']:checked") == null) {
      alert('Enter your chef service availability')
    } else if (
      document.querySelector("input[name='safetyamenities']:checked") == null
    ) {
      alert('Enter your yacht safety amenities')
    } else if (
      document.querySelector("input[name='Room']:checked").value == 'Yes'
    ) {
      if (document.getElementById('ViproomQuantity').value == '') {
        alert('enter your yacht vip room quantity')
        document.getElementById('ViproomQuantity').focus()
      } else if (
        document.getElementById('VipRoomMaximumCapacity').value == ''
      ) {
        alert('enter your yacht vip room maximum capacity')
        document.getElementById('VipRoomMaximumCapacity').focus()
      } else if (document.getElementById('normalroomquantity').value == '') {
        alert('Enter your yacht normal room quantity')
        document.getElementById('normalroomquantity').focus()
      } else if (document.getElementById('normalroommaxcapacity').value == '') {
        alert('enter your yacht normal room max capacity')
        document.getElementById('normalroommaxquantity').focus()
      } else if (viproomquantity == false) {
        alert('enter only digits in vip room quantity field')
        document.getElementById('ViproomQuantity').focus()
      } else if (viproomcapacity == false) {
        alert('enter only digits in vip room maximum capacity field')
        document.getElementById('VipRoomMaximumCapacity').focus()
      } else if (normalroomquantity == false) {
        alert('enter only digits in normal room quantity field')
        document.getElementById('normalroomquantity').focus()
      } else if (normalroomcapacity == false) {
        alert('enter only digits in normal room maximum capacity field')
        document.getElementById('normalroommaxcapacity').focus()
      } else if (floor == false) {
        alert('enter only digits in how many floor in yacht field')
        document.getElementById('howmanyfloorinyacht').focus()
      } else if (deck == false) {
        alert('Enter only digits in how many deck in yacht field')
        document.getElementById('howmanydeckinyact').focus()
      } else if (deckcapacity == false) {
        alert('enter only digits in yacht deck capacity field')
        document.getElementById('yachtdeckcapacity').focus()
      } else if (
        document.querySelector("input[name='safetyamenities']:checked").value ==
        'yes'
      ) {
        if (document.querySelector("input[name='Aidbox']:checked") == null) {
          alert(
            'choose your safety amenities Aidbox facilities availability in yes or no ',
          )
        } else if (
          document.querySelector("input[name='lifejacket']:checked") == null
        ) {
          alert(
            'choose your safety amenities lifejackets facilities availability in yes or no',
          )
        } else {
          let Roomquantity = document.getElementById('Roomquantityselectoption')
            .value
          let viproomquantityvalue = eval(
            document.getElementById('ViproomQuantity').value,
          )
          let normalroomquantityvalue = eval(
            document.getElementById('normalroomquantity').value,
          )
          let sumvipandnormalroomquantity =
            viproomquantityvalue + normalroomquantityvalue
          console.log(sumvipandnormalroomquantity)
          if (
            sumvipandnormalroomquantity < Roomquantity ||
            sumvipandnormalroomquantity > Roomquantity
          ) {
            alert(
              'The Vip Room quantity and normal room quantity which you write is not equal to Room quantity which you selected',
            )
          } else {
            let yachtamenitiesform = document.getElementById(
              'yachtamenitiesform',
            )
            yachtamenitiesform.style.display = 'none'

            let yachtdaytripform = document.getElementById('daytripform')
            yachtdaytripform.style.display = 'block'
          }
        }
      } else {
        let Roomquantity = document.getElementById('Roomquantityselectoption')
          .value
        let viproomquantityvalue = eval(
          document.getElementById('ViproomQuantity').value,
        )
        let normalroomquantityvalue = eval(
          document.getElementById('normalroomquantity').value,
        )
        let sumvipandnormalroomquantity =
          viproomquantityvalue + normalroomquantityvalue
        console.log(sumvipandnormalroomquantity)
        if (
          sumvipandnormalroomquantity < Roomquantity ||
          sumvipandnormalroomquantity > Roomquantity
        ) {
          alert(
            'The Vip Room quantity and normal room quantity which you write is not equal to Room quantity which you selected',
          )
        } else {
          let yachtamenitiesform = document.getElementById('yachtamenitiesform')
          yachtamenitiesform.style.display = 'none'

          let yachtdaytripform = document.getElementById('daytripform')
          yachtdaytripform.style.display = 'block'
        }
      }
    } else if (
      document.querySelector("input[name='Room']:checked").value == 'No'
    ) {
      if (floor == false) {
        alert('enter only digits in how many floor in yacht field')
        document.getElementById('howmanyfloorinyacht').focus()
      } else if (deck == false) {
        alert('Enter only digits in how many deck in yacht field')
        document.getElementById('howmanydeckinyact').focus()
      } else if (deckcapacity == false) {
        alert('enter only digits in yacht deck capacity field')
        document.getElementById('yachtdeckcapacity').focus()
      } else if (
        document.querySelector("input[name='safetyamenities']:checked").value ==
        'yes'
      ) {
        if (document.querySelector("input[name='Aidbox']:checked") == null) {
          alert(
            'choose your safety amenities Aidbox facilities without room availability in yes or no ',
          )
        } else if (
          document.querySelector("input[name='lifejacket']:checked") == null
        ) {
          alert(
            'choose your safety amenities lifejackets facilities availability in yes or no',
          )
        } else {
          let yachtamenitiesform = document.getElementById('yachtamenitiesform')
          yachtamenitiesform.style.display = 'none'

          let yachtdaytripform = document.getElementById('daytripform')
          yachtdaytripform.style.display = 'block'
        }
      } else {
        let yachtamenitiesform = document.getElementById('yachtamenitiesform')
        yachtamenitiesform.style.display = 'none'

        let yachtdaytripform = document.getElementById('daytripform')
        yachtdaytripform.style.display = 'block'
      }
    }

    // let yachtamenitiesform = document.getElementById('yachtamenitiesform');
    // yachtamenitiesform.style.display = "none";

    // let yachtdaytripform = document.getElementById("daytripform");
    // yachtdaytripform.style.display = "block";
  }
  function DisplayformofRooms() {
    let roomcolumn = document.getElementById('Roomcolumn')
    roomcolumn.style.display = 'block'

    let thirdrowamenities = document.getElementById('thirdrowamenities')
    thirdrowamenities.style.display = 'flex'

    let fourthrowamenities = document.getElementById('fourthrowamenities')
    fourthrowamenities.style.display = 'flex'

    let fifthrowamenities = document.getElementById('fifthrowamenities')
    fifthrowamenities.style.display = 'flex'

    let overnightsixthrow = document.getElementById('overnightsixthrow')
    overnightsixthrow.style.display = 'flex'

    let overnightninthcolumn = document.getElementById('overnightninthcolumn')
    overnightninthcolumn.style.display = 'block'
  }
  function NoDisplayformofRoom() {
    let roomcolumn = document.getElementById('Roomcolumn')
    roomcolumn.style.display = 'none'

    let thirdrowamenities = document.getElementById('thirdrowamenities')
    thirdrowamenities.style.display = 'none'

    let fourthrowamenities = document.getElementById('fourthrowamenities')
    fourthrowamenities.style.display = 'none'

    let fifthrowamenities = document.getElementById('fifthrowamenities')
    fifthrowamenities.style.display = 'none'

    let overnightsixthrow = document.getElementById('overnightsixthrow')
    overnightsixthrow.style.display = 'none'

    let overnightninthcolumn = document.getElementById('overnightninthcolumn')
    overnightninthcolumn.style.display = 'none'

    let overnighttenthcolumn = document.getElementById('overnighttenthcolumn')
    overnighttenthcolumn.style.display = 'none'

    let overnighteigthrow = document.getElementById('overnighteigthrow')
    overnighteigthrow.style.display = 'none'

    let overnighteleventhcolumn = document.getElementById(
      'overnighteleventhcolumn',
    )
    overnighteleventhcolumn.style.display = 'none'

    let overnight12column = document.getElementById('overnight12column')
    overnight12column.style.display = 'none'

    let overnightseventhrow = document.getElementById('overnightseventhrow')
    overnightseventhrow.style.display = 'none'

    let overnightthirteencolumn = document.getElementById(
      'overnightthirteencolumn',
    )
    overnightthirteencolumn.style.display = 'none'
  }
  function DisplayFormofSafetyAmenities() {
    let safetyamenities = document.getElementById('ninthrowamenities')
    safetyamenities.style.display = 'flex'
  }
  function NoDisplayformofSafetyAmenities() {
    let safetyamenities = document.getElementById('ninthrowamenities')
    safetyamenities.style.display = 'none'
  }
  function Openextrafacilities() {
    let jetski = document.getElementById('daytripeightcolumn')
    jetski.style.display = 'block'

    let tenderrow = document.getElementById('daytripfifthrow')
    tenderrow.style.display = 'flex'

    let parachuterow = document.getElementById('daytripsixthrow')
    parachuterow.style.display = 'flex'

    let moreextrafacilities = document.getElementById('moreextrafacilities')
    moreextrafacilities.style.display = 'block'

    let daytriproomavailabilityrow = document.getElementById(
      'daytripseventhrow',
    )
    daytriproomavailabilityrow.style.display = 'flex'

    // let daytriproomavailabilitystatus=document.getElementById("daytripfiftheencolumn");
    // daytriproomavailabilitystatus.style.display="block";
  }
  function Noopenextrafacilties() {
    let jetski = document.getElementById('daytripeightcolumn')
    jetski.style.display = 'none'

    let tenderrow = document.getElementById('daytripfifthrow')
    tenderrow.style.display = 'none'

    let parachuterow = document.getElementById('daytripsixthrow')
    parachuterow.style.display = 'none'

    let moreextrafacilities = document.getElementById('moreextrafacilities')
    moreextrafacilities.style.display = 'none'

    let daytriproomavailabilityrow = document.getElementById(
      'daytripseventhrow',
    )
    daytriproomavailabilityrow.style.display = 'none'
  }
  function Openjetskipriceinput() {
    let jetskiinput = document.getElementById('daytripninthcolumn')
    jetskiinput.style.display = 'block'
  }
  function Noopenjetskipriceinput() {
    let noopenjetskiinput = document.getElementById('daytripninthcolumn')
    noopenjetskiinput.style.display = 'none'
  }
  function Opentenderpriceinput() {
    let opentenderpriceinput = document.getElementById('daytripeleventhcolumn')
    opentenderpriceinput.style.display = 'block'
  }
  function Noopentenderpriceinput() {
    let noopentenderpriceinput = document.getElementById(
      'daytripeleventhcolumn',
    )
    noopentenderpriceinput.style.display = 'none'
  }
  function Openparachuteinputprice() {
    let openparachuteinput = document.getElementById('daytripthirtheencolumn')
    openparachuteinput.style.display = 'block'
  }
  function Noopenparachuteinput() {
    let noopenparachuteinput = document.getElementById('daytripthirtheencolumn')
    noopenparachuteinput.style.display = 'none'
  }
  function Gobacktoyachtamenitiesform() {
    let showyachtamenitiesform = document.getElementById('yachtamenitiesform')
    showyachtamenitiesform.style.display = 'block'

    let hideyachtdaytripform = document.getElementById('daytripform')
    hideyachtdaytripform.style.display = 'none'
  }
  function Gotoyachtovernightstayform() {
    let travelingroundinsea = /^[A-Za-z]+$/
    let travelingmileinsea = /^[0-9]{2,5}$/
    let price = /^[0-9]+$/
    let stayhours = /^[0-9]+$/
    let moreextrafacilities = /^[A-Za-z0-9:]+$/

    let roundinseadaytrip = travelingroundinsea.test(
      document.getElementById('yachttravelingmileround').value,
    )
    let miletravelinginsea = travelingmileinsea.test(
      document.getElementById('yachttravelingmileinsea').value,
    )
    let travelingmileprice = price.test(
      document.getElementById('yachttravelingmileprice').value,
    )
    let jetskyprice = price.test(document.getElementById('Jetskiprice').value)
    let tenderprice = price.test(document.getElementById('Tenderprice').value)
    let parachuteprice = price.test(
      document.getElementById('Parachuteprice').value,
    )
    let viproomhoursprice = price.test(
      document.getElementById('vipperroompricedaytrip').value,
    )
    let normalroomhoursprice = price.test(
      document.getElementById('pernormalroomprice').value,
    )
    let viproomhoursstay = stayhours.test(
      document.getElementById('hourstayinviproom').value,
    )
    let normalroomhoursstay = stayhours.test(
      document.getElementById('howmanyhourstayinnormalroom').value,
    )
    let moreextrafacilitiesdaytrip = moreextrafacilities.test(
      document.getElementById('moreextrafacilities').value,
    )

    if (document.getElementById('yachtavalabilitystartingtime').value == '') {
      alert('Enter your yacht availability starting time')
      document.getElementById('yachtavalabilitystartingtime').focus()
    } else if (
      document.getElementById('yachtavalabilityendingtime').value == ''
    ) {
      alert('enter your yacht availability ending time')
      document.getElementById('yachtavalabilityendingtime').focus()
    } else if (document.getElementById('yachttravelingmileround').value == '') {
      alert('enter your yacht traveling round name')
      document.getElementById('yachttravelingmileround').focus()
    } else if (document.getElementById('yachttravelingmileinsea').value == '') {
      alert('enter your yacht traveling mile')
      document.getElementById('yachttravelingmileinsea').focus()
    } else if (document.getElementById('yachttravelingmileprice').value == '') {
      alert('enter your yacht price according to traveling mile')
      document.getElementById('yachttravelingmileprice').focus()
    } else if (
      document.querySelector("input[name='Extrafacilities']:checked") == null
    ) {
      alert('choose your extra facilities in day trip yes or no')
    } else if (
      document.querySelector("input[name='Extrafacilities']:checked").value ==
      'Yes'
    ) {
      // nested if start from here of extra facilities

      if (document.querySelector("input[name='Jet Ski']:checked") == null) {
        alert('choose your jet ski facility in yes or no')
      } else if (
        document.querySelector("input[name='Tender']:checked") == null
      ) {
        alert('choose your tender facility in yes or no')
      } else if (
        document.querySelector("input[name='Parachute']:checked") == null
      ) {
        alert('choose your parachute facility in yes or no')
      } else if (
        document.querySelector("input[name='Roomavailability']:checked") == null
      ) {
        alert('choose your room day trip availability in yes or no')
      } else if (document.getElementById('moreextrafacilities').value == '') {
        alert('enter more extra facilities with detail and price')
      } else if (
        document.querySelector("input[name='Jet Ski']:checked").value == 'Yes'
      ) {
        // nested if of extra facilities close from here

        // nested if of jet ski start from here

        if (document.getElementById('Jetskiprice').value == '') {
          alert('enter price of jet ski facilities')
          document.getElementById('Jetskiprice').focus()
        } else if (
          document.querySelector("input[name='Tender']:checked").value == 'Yes'
        ) {
          if (document.getElementById('Tenderprice').value == '') {
            alert('enter your tender price')
            document.getElementById('Tenderprice').focus()
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'Yes'
          ) {
            if (document.getElementById('Parachuteprice').value == '') {
              alert('enter your parachute price')
              document.getElementById('Parachuteprice').focus()
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
              // console.log("ali");
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'no'
          ) {
            if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          }
        } else if (
          document.querySelector("input[name='Tender']:checked").value == 'no'
        ) {
          if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'Yes'
          ) {
            if (document.getElementById('Parachuteprice').value == '') {
              alert('enter your parachute price')
              document.getElementById('Parachuteprice').focus()
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
              // console.log("ali");
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'no'
          ) {
            if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          }
        }
      } else if (
        document.querySelector("input[name='Jet Ski']:checked").value == 'no'
      ) {
        if (
          document.querySelector("input[name='Tender']:checked").value == 'Yes'
        ) {
          if (document.getElementById('Tenderprice').value == '') {
            alert('enter your tender price')
            document.getElementById('Tenderprice').focus()
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'Yes'
          ) {
            if (document.getElementById('Parachuteprice').value == '') {
              alert('enter your parachute price')
              document.getElementById('Parachuteprice').focus()
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'no'
          ) {
            if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          }
        } else if (
          document.querySelector("input[name='Tender']:checked").value == 'no'
        ) {
          if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'Yes'
          ) {
            if (document.getElementById('Parachuteprice').value == '') {
              alert('enter your parachute price')
              document.getElementById('Parachuteprice').focus()
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          } else if (
            document.querySelector("input[name='Parachute']:checked").value ==
            'no'
          ) {
            if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'Yes'
            ) {
              if (document.getElementById('hourstayinviproom').value == '') {
                alert('enter your vip room day trip hours')
                document.getElementById('hourstayinviproom').focus()
              } else if (
                document.getElementById('vipperroompricedaytrip').value == ''
              ) {
                alert('enter your vip room day trip price per hours')
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (
                document.getElementById('howmanyhourstayinnormalroom').value ==
                ''
              ) {
                alert('enter your normal room day trip hours')
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (
                document.getElementById('pernormalroomprice').value == ''
              ) {
                alert('enter your normal room day trip price per hours')
                document.getElementById('pernormalroomprice').focus()
              } else if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (viproomhoursstay == false) {
                alert('only digits are allowed in vip room hours stay day trip')
                document.getElementById('hourstayinviproom').focus()
              } else if (normalroomhoursstay == false) {
                alert(
                  'only digits are allowed in normal room hours stay day trip',
                )
                document.getElementById('howmanyhourstayinnormalroom').focus()
              } else if (viproomhoursprice == false) {
                alert(
                  'only digits are allowed in vip hours room price day trip',
                )
                document.getElementById('vipperroompricedaytrip').focus()
              } else if (normalroomhoursprice == false) {
                alert('only digits are allowed in normal room hours price')
                document.getElementById('pernormalroomprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            } else if (
              document.querySelector("input[name='Roomavailability']:checked")
                .value == 'no'
            ) {
              if (roundinseadaytrip == false) {
                alert('only alphabets in round name')
                document.getElementById('yachttravelingmileround').focus()
              } else if (miletravelinginsea == false) {
                alert('only digits are allowed and length is min 2 and max 3')
                document.getElementById('yachttravelingmileinsea').focus()
              } else if (travelingmileprice == false) {
                alert('enter only digits in price feild')
                document.getElementById('yachttravelingmileprice').focus()
              } else if (jetskyprice == false) {
                alert('only digits in jetsky price feild')
                document.getElementById('Jetskiprice').focus()
              } else if (tenderprice == false) {
                alert('only digits are allowed in tender price feild')
                document.getElementById('Tenderprice').focus()
              } else if (parachuteprice == false) {
                alert('only digits are allowed in parachute feild')
                document.getElementById('Parachuteprice').focus()
              } else if (moreextrafacilitiesdaytrip == false) {
                alert('only alphabets,digits and : this symbol are allowed')
                document.getElementById('moreextrafacilities').focus()
              } else {
                let daytripform = document.getElementById('daytripform')
                daytripform.style.display = 'none'

                let overnightstayform = document.getElementById(
                  'yachtovernightform',
                )
                overnightstayform.style.display = 'block'
              }
            }
          }
        }
      }

      // console.log(document.getElementById("selectyachttotalavailabilitytime").value)
    } else if (
      document.querySelector("input[name='Extrafacilities']:checked").value ==
      'no'
    ) {
      if (roundinseadaytrip == false) {
        alert('only alphabets in round name')
        document.getElementById('yachttravelingmileround').focus()
      } else if (miletravelinginsea == false) {
        alert('only digits are allowed and length is min 2 and max 3')
        document.getElementById('yachttravelingmileinsea').focus()
      } else if (travelingmileprice == false) {
        alert('enter only digits in price feild')
        document.getElementById('yachttravelingmileprice').focus()
      } else {
        let daytripform = document.getElementById('daytripform')
        daytripform.style.display = 'none'

        let overnightstayform = document.getElementById('yachtovernightform')
        overnightstayform.style.display = 'block'
      }
    }
  }

  function Opennightyachtextrafacilty() {
    let opennightyachtextrafacilty = document.getElementById(
      'writetypeofovernightextrafacilityonyacht',
    )
    opennightyachtextrafacilty.style.display = 'block'
  }
  function Noopennightyachtextrafacility() {
    let Noopennightextrafacility = document.getElementById(
      'writetypeofovernightextrafacilityonyacht',
    )
    Noopennightextrafacility.style.display = 'none'
  }
  function Openovernightstayfacilities() {
    let overnighttenthcolumn = document.getElementById('overnighttenthcolumn')
    overnighttenthcolumn.style.display = 'block'

    let overnighteigthrow = document.getElementById('overnighteigthrow')
    overnighteigthrow.style.display = 'flex'

    let overnighteleventhcolumn = document.getElementById(
      'overnighteleventhcolumn',
    )
    overnighteleventhcolumn.style.display = 'block'

    let overnight12column = document.getElementById('overnight12column')
    overnight12column.style.display = 'block'

    let overnightseventhrow = document.getElementById('overnightseventhrow')
    overnightseventhrow.style.display = 'flex'

    let overnightthirteencolumn = document.getElementById(
      'overnightthirteencolumn',
    )
    overnightthirteencolumn.style.display = 'block'
  }
  function NoOpenovernightstayfacilities() {
    let overnighttenthcolumn = document.getElementById('overnighttenthcolumn')
    overnighttenthcolumn.style.display = 'none'

    let overnighteigthrow = document.getElementById('overnighteigthrow')
    overnighteigthrow.style.display = 'none'

    let overnighteleventhcolumn = document.getElementById(
      'overnighteleventhcolumn',
    )
    overnighteleventhcolumn.style.display = 'none'

    let overnight12column = document.getElementById('overnight12column')
    overnight12column.style.display = 'none'

    let overnightseventhrow = document.getElementById('overnightseventhrow')
    overnightseventhrow.style.display = 'none'

    let overnightthirteencolumn = document.getElementById(
      'overnightthirteencolumn',
    )
    overnightthirteencolumn.style.display = 'none'
  }
  function Gobacktodaytripform() {
    let gobacktodaytripform = document.getElementById('daytripform')
    gobacktodaytripform.style.display = 'block'

    let overnightstayform = document.getElementById('yachtovernightform')
    overnightstayform.style.display = 'none'
  }
  function Opendaytriproomform() {
    let viproomdaytriprow = document.getElementById('daytripeightrow')
    viproomdaytriprow.style.display = 'flex'

    let daytripviproomhoursstay = document.getElementById(
      'daytripsixtheencolumn',
    )
    daytripviproomhoursstay.style.display = 'block'

    let daytripviproomhoursprice = document.getElementById(
      'daytripseventheencolumn',
    )
    daytripviproomhoursprice.style.display = 'block'

    let normalroomdaytriprow = document.getElementById('daytripninthrow')
    normalroomdaytriprow.style.display = 'flex'

    let daytripnormalroomhoursstay = document.getElementById(
      'daytripeightheencolumn',
    )
    daytripnormalroomhoursstay.style.display = 'block'

    let daytripnormalroomhoursprice = document.getElementById(
      'daytripnintheencolumn',
    )
    daytripnormalroomhoursprice.style.display = 'block'
  }
  function Noopendaytriproomform() {
    let viproomdaytriprow = document.getElementById('daytripeightrow')
    viproomdaytriprow.style.display = 'none'

    let daytripviproomhoursstay = document.getElementById(
      'daytripsixtheencolumn',
    )
    daytripviproomhoursstay.style.display = 'none'

    let daytripviproomhoursprice = document.getElementById(
      'daytripseventheencolumn',
    )
    daytripviproomhoursprice.style.display = 'none'

    let normalroomdaytriprow = document.getElementById('daytripninthrow')
    normalroomdaytriprow.style.display = 'none'

    let daytripnormalroomhoursstay = document.getElementById(
      'daytripeightheencolumn',
    )
    daytripnormalroomhoursstay.style.display = 'none'

    let daytripnormalroomhoursprice = document.getElementById(
      'daytripnintheencolumn',
    )
    daytripnormalroomhoursprice.style.display = 'none'
  }
  function Submitdataofyacht() {
    let travelingroundinseaovernight = /^[A-Za-z]+$/
    let travelingmileinseaovernight = /^[0-9]{2,5}$/
    let price = /^[0-9]+$/
    let overnightstayhours = /^[0-9]+$/
    let moreextrafacilitiesovernight = /^[A-Za-z0-9:]+$/

    let overnightyachtround = travelingroundinseaovernight.test(
      document.getElementById('overnightyachttravelingmileround').value,
    )

    let overnightyachtmile = travelingmileinseaovernight.test(
      document.getElementById('overnightyachttravelingmileinsea').value,
    )

    let overnightyachtroundprice = price.test(
      document.getElementById('ovenightyachttravelingmileprice').value,
    )

    let overnightyachtfacilities = moreextrafacilitiesovernight.test(
      document.getElementById('writetypeofovernightextrafacilityonyacht').value,
    )

    let overnightstaydaysviproom = overnightstayhours.test(
      document.getElementById('stayinviproom').value,
    )

    let overnightstaydaysnormalroom = overnightstayhours.test(
      document.getElementById('stayinnormalroom').value,
    )

    let overnightperdaypriceviproom = price.test(
      document.getElementById('priceofviproom').value,
    )

    let overnightperdaynormalroom = price.test(
      document.getElementById('normalroomprice').value,
    )

    if (
      document.getElementById('overnightyachtavalabilitystartingtime').value ==
      ''
    ) {
      alert('Enter Overnight yacht availability starting time')
      document.getElementById('overnightyachtavalabilitystartingtime').focus()
    } else if (
      document.getElementById('overnightyachtavalabilityendingtime').value == ''
    ) {
      alert('Enter your Overnight yacht availability ending time')
      document.getElementById('overnightyachtavalabilityendingtime').focus()
    } else if (
      document.getElementById('overnightyachttravelingmileround').value == ''
    ) {
      alert('Enter your yacht overnight traveling mile round name')
      document.getElementById('overnightyachttravelingmileround').focus()
    } else if (
      document.getElementById('overnightyachttravelingmileinsea').value == ''
    ) {
      alert('Enter your yacht overnight traveling mile in sea')
      document.getElementById('overnightyachttravelingmileinsea').focus()
    } else if (
      document.getElementById('ovenightyachttravelingmileprice').value == ''
    ) {
      alert('Enter your yacht traveling round price per mile ')
      document.getElementById('ovenightyachttravelingmileprice').focus()
    } else if (
      document.querySelector(
        "input[name='overnightyachtextrafacilities']:checked",
      ) == null
    ) {
      alert('Choose your overnight Extra facilities availability in yes or no')
    } else if (
      document.querySelector("input[name='Room']:checked").value == 'Yes'
    ) {
      if (
        document.querySelector(
          "input[name='overnightstayfacilityinroom']:checked",
        ) == null
      ) {
        alert(
          'choose your room overnightextrafacility availability in yes or no',
        )
      } else if (
        document.querySelector(
          "input[name='overnightyachtextrafacilities']:checked",
        ).value == 'Yes'
      ) {
        if (
          document.getElementById('writetypeofovernightextrafacilityonyacht')
            .value == ''
        ) {
          alert(
            'enter your overnight yacht extra facilities in detail with price',
          )
          document
            .getElementById('writetypeofovernightextrafacilityonyacht')
            .focus()
        } else if (
          document.querySelector(
            "input[name='overnightstayfacilityinroom']:checked",
          ).value == 'Yes'
        ) {
          if (document.getElementById('stayinviproom').value == '') {
            alert('Enter how many day stay in vip room')
            document.getElementById('stayinviproom').focus()
          } else if (document.getElementById('priceofviproom').value == '') {
            alert('Enter per day price of vip room in night')
            document.getElementById('priceofviproom').focus()
          } else if (document.getElementById('stayinnormalroom').value == '') {
            alert('Enter how many days stay in normal room in night')
            document.getElementById('stayinnormalroom').focus()
          } else if (document.getElementById('normalroomprice').value == '') {
            alert('Enter per day price of normal room in night')
          } else if (overnightyachtround == false) {
            alert('enter only alphabets in yacht traveling round')
            document.getElementById('overnightyachttravelingmileround').focus()
          } else if (overnightyachtmile == false) {
            alert('enter your yacht traveling mile in digits')
            document.getElementById('overnightyachttravelingmileinsea').focus()
          } else if (overnightyachtroundprice == false) {
            alert('enter your yacht traveling round price in digits')
            document.getElementById('ovenightyachttravelingmileprice').focus()
          } else if (overnightyachtfacilities == false) {
            alert(
              'enter only alphabets and digits and : this symbol in this field',
            )
            document
              .getElementById('writetypeofovernightextrafacilityonyacht')
              .focus()
          } else if (overnightstaydaysviproom == false) {
            alert(
              'Enter only alphabets in yacht overnight stay hours vip room feild',
            )
            document.getElementById('stayinviproom').focus()
          } else if (overnightstaydaysnormalroom == false) {
            alert(
              'Enter only digits in yacht overnight stay hours vip room feild',
            )
            document.getElementById('stayinnormalroom').focus()
          } else if (overnightperdaypriceviproom == false) {
            alert('Enter only digits in overnight yacht vip room price feild')
            document.getElementById('priceofviproom').focus()
          } else if (overnightperdaynormalroom == false) {
            alert(
              'Enter only digits in overnight yacht normal room price feild',
            )
            document.getElementById('normalroomprice').focus()
          } else {
            alert('your form is proper filled')
            Axios.post('http://localhost:5000/yacht', {
              // owner personal info
              OwnerPID: ownerID,

              //  owner personal info close

              // yacht info start from here
              Owyachtname: owneryachtname,
              Owyachtlength: owneryachtwidth,
              Owyyachtheight: owneryachtheight,
              Owyachtcolor: owneryachtcolor,
              Owyachtimo: ownerimonumber,
              Owoperatorname: VesselOperatorName,
              Owyachtsealocation: owneryachtseaaddress,
              Owyachtimg1: yachtimage1,
              Owyachtimg2: yachtimage2,
              Owyachtimg3: yachtimage3,

              // yacht info close from here

              // yacht amenities start from here
              OwyachtRoomavailability: owneryachtRoomyesno,
              Owyachtroomquantity: owneryachtroomquantity,
              Owyachtviproomquantity: owneryachtviproomquantity,
              Owyachtviproommaximumcap: onwerviproommaxcapacity,
              Owyachtnormalroomquantity: owneryachtnormalroomquantity,
              Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
              Owyachtfloor: owneryachtfloor,
              OwyachtDeck: owneryachtdeck,
              OwyachtDeckcapacity: ownerdeckcapacity,
              Owyachtkitchenservice: yachtkitchenservices,
              Owyachtchef: yachtchefservices,
              OwyachtSafetyamenities: yachtsafetyamenities,
              Owyachtaidbox: owneryachtaidbox,
              OwyachtLifejacket: owneryachtlifejacket,
              // yacht amenities close from here

              // yacht day trip form data
              Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
              Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
              Owyachttravelingroundname: yachtnametravelingmileround,
              Owyachttravelingrangeday: yachttravelingmile,
              Owyachttravelingrangedayprice: yachtravelingmileprice,
              Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
              Owyachtjetskifacilities: yachtextrafacilitiesjetski,
              Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
              Owyachttenderfacilities: yachtextrafacilitiestender,
              Owyachttenderprice: yachtextrafacilitiestenderprice,
              Owyachtparachutefacilities: yachtextrafacilitiesparachute,
              Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
              OwyachtDaytripzroomavailability: daytriproomavailabilitystatus,
              Owyachtviproomhoursstay: daytripviproomhours,
              Owyachtperhoursviproomprice: ownervipperhoursroomprice,
              Owyachtnormalroomhoursstay: daytripnormalroomhours,
              Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
              Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
              // yacht day trip form data

              // yacht night trip form data
              Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
              Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
              Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
              Owyachttravelingrangenight: overnightyachttravelingmileinsea,
              Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
              Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
              Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
              Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
              Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
              Owyachtperdayroompricenight: overnightstayperviproomprice,
              Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
              Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

              // yacht night trip form data
            }).then((result) => {
              console.log(result)

              navigate('/Reviewyachtlisting')
            })
          }
        } else if (
          document.querySelector(
            "input[name='overnightstayfacilityinroom']:checked",
          ).value == 'no'
        ) {
          if (overnightyachtround == false) {
            alert('enter only alphabets in yacht traveling round')
            document.getElementById('overnightyachttravelingmileround').focus()
          } else if (overnightyachtmile == false) {
            alert('enter your yacht traveling mile in digits')
            document.getElementById('overnightyachttravelingmileinsea').focus()
          } else if (overnightyachtroundprice == false) {
            alert('enter your yacht traveling round price in digits')
            document.getElementById('ovenightyachttravelingmileprice').focus()
          } else if (overnightyachtfacilities == false) {
            alert(
              'enter only alphabets and digits and : this symbol in this field',
            )
            document
              .getElementById('writetypeofovernightextrafacilityonyacht')
              .focus()
          } else {
            alert('your form is proper filled yes')
            Axios.post('http://localhost:5000/yacht', {
              // owner personal info
              OwnerPID: ownerID,

              //  owner personal info close

              // yacht info start from here
              Owyachtname: owneryachtname,
              Owyachtlength: owneryachtwidth,
              Owyyachtheight: owneryachtheight,
              Owyachtcolor: owneryachtcolor,
              Owyachtimo: ownerimonumber,
              Owoperatorname: VesselOperatorName,
              Owyachtsealocation: owneryachtseaaddress,
              Owyachtimg1: yachtimage1,
              Owyachtimg2: yachtimage2,
              Owyachtimg3: yachtimage3,

              // yacht info close from here

              // yacht amenities start from here
              OwyachtRoomavailability: owneryachtRoomyesno,
              Owyachtroomquantity: owneryachtroomquantity,
              Owyachtviproomquantity: owneryachtviproomquantity,
              Owyachtviproommaximumcap: onwerviproommaxcapacity,
              Owyachtnormalroomquantity: owneryachtnormalroomquantity,
              Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
              Owyachtfloor: owneryachtfloor,
              OwyachtDeck: owneryachtdeck,
              OwyachtDeckcapacity: ownerdeckcapacity,
              Owyachtkitchenservice: yachtkitchenservices,
              Owyachtchef: yachtchefservices,
              OwyachtSafetyamenities: yachtsafetyamenities,
              Owyachtaidbox: owneryachtaidbox,
              OwyachtLifejacket: owneryachtlifejacket,
              // yacht amenities close from here

              // yacht day trip form data
              Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
              Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
              Owyachttravelingroundname: yachtnametravelingmileround,
              Owyachttravelingrangeday: yachttravelingmile,
              Owyachttravelingrangedayprice: yachtravelingmileprice,
              Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
              Owyachtjetskifacilities: yachtextrafacilitiesjetski,
              Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
              Owyachttenderfacilities: yachtextrafacilitiestender,
              Owyachttenderprice: yachtextrafacilitiestenderprice,
              Owyachtparachutefacilities: yachtextrafacilitiesparachute,
              Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
              OwyachtDaytripzroomavailability: daytriproomavailabilitystatus,
              Owyachtviproomhoursstay: daytripviproomhours,
              Owyachtperhoursviproomprice: ownervipperhoursroomprice,
              Owyachtnormalroomhoursstay: daytripnormalroomhours,
              Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
              Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
              // yacht day trip form data

              // yacht night trip form data
              Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
              Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
              Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
              Owyachttravelingrangenight: overnightyachttravelingmileinsea,
              Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
              Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
              Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
              Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
              Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
              Owyachtperdayroompricenight: overnightstayperviproomprice,
              Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
              Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

              // yacht night trip form data
            }).then((result) => {
              console.log(result)

              navigate('/Reviewyachtlisting')
            })
          }
        }
      } else if (
        document.querySelector(
          "input[name='overnightyachtextrafacilities']:checked",
        ).value == 'no'
      ) {
        if (
          document.querySelector(
            "input[name='overnightstayfacilityinroom']:checked",
          ).value == 'Yes'
        ) {
          if (document.getElementById('stayinviproom').value == '') {
            alert('Enter how many day stay in vip room')
            document.getElementById('stayinviproom').focus()
          } else if (document.getElementById('priceofviproom').value == '') {
            alert('Enter per day price of vip room in night')
            document.getElementById('priceofviproom').focus()
          } else if (document.getElementById('stayinnormalroom').value == '') {
            alert('Enter how many days stay in normal room in night')
            document.getElementById('stayinnormalroom').focus()
          } else if (document.getElementById('normalroomprice').value == '') {
            alert('Enter per day price of normal room in night')
          } else if (overnightyachtround == false) {
            alert('enter only alphabets in yacht traveling round')
            document.getElementById('overnightyachttravelingmileround').focus()
          } else if (overnightyachtmile == false) {
            alert('enter your yacht traveling mile in digits')
            document.getElementById('overnightyachttravelingmileinsea').focus()
          } else if (overnightyachtroundprice == false) {
            alert('enter your yacht traveling round price in digits')
            document.getElementById('ovenightyachttravelingmileprice').focus()
          } else if (overnightyachtfacilities == false) {
            alert(
              'enter only alphabets and digits and : this symbol in this field',
            )
            document
              .getElementById('writetypeofovernightextrafacilityonyacht')
              .focus()
          } else if (overnightstaydaysviproom == false) {
            alert(
              'Enter only alphabets in yacht overnight stay hours vip room feild',
            )
            document.getElementById('stayinviproom').focus()
          } else if (overnightstaydaysnormalroom == false) {
            alert(
              'Enter only digits in yacht overnight stay hours vip room feild',
            )
            document.getElementById('stayinnormalroom').focus()
          } else if (overnightperdaypriceviproom == false) {
            alert('Enter only digits in overnight yacht vip room price feild')
            document.getElementById('priceofviproom').focus()
          } else if (overnightperdaynormalroom == false) {
            alert(
              'Enter only digits in overnight yacht normal room price feild',
            )
            document.getElementById('normalroomprice').focus()
          } else {
            alert('your form is proper filled')
            Axios.post('http://localhost:5000/yacht', {
              // owner personal info
              OwnerPID: ownerID,

              //  owner personal info close

              // yacht info start from here
              Owyachtname: owneryachtname,
              Owyachtlength: owneryachtwidth,
              Owyyachtheight: owneryachtheight,
              Owyachtcolor: owneryachtcolor,
              Owyachtimo: ownerimonumber,
              Owoperatorname: VesselOperatorName,
              Owyachtsealocation: owneryachtseaaddress,
              Owyachtimg1: yachtimage1,
              Owyachtimg2: yachtimage2,
              Owyachtimg3: yachtimage3,

              // yacht info close from here

              // yacht amenities start from here
              OwyachtRoomavailability: owneryachtRoomyesno,
              Owyachtroomquantity: owneryachtroomquantity,
              Owyachtviproomquantity: owneryachtviproomquantity,
              Owyachtviproommaximumcap: onwerviproommaxcapacity,
              Owyachtnormalroomquantity: owneryachtnormalroomquantity,
              Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
              Owyachtfloor: owneryachtfloor,
              OwyachtDeck: owneryachtdeck,
              OwyachtDeckcapacity: ownerdeckcapacity,
              Owyachtkitchenservice: yachtkitchenservices,
              Owyachtchef: yachtchefservices,
              OwyachtSafetyamenities: yachtsafetyamenities,
              Owyachtaidbox: owneryachtaidbox,
              OwyachtLifejacket: owneryachtlifejacket,
              // yacht amenities close from here

              // yacht day trip form data
              Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
              Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
              Owyachttravelingroundname: yachtnametravelingmileround,
              Owyachttravelingrangeday: yachttravelingmile,
              Owyachttravelingrangedayprice: yachtravelingmileprice,
              Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
              Owyachtjetskifacilities: yachtextrafacilitiesjetski,
              Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
              Owyachttenderfacilities: yachtextrafacilitiestender,
              Owyachttenderprice: yachtextrafacilitiestenderprice,
              Owyachtparachutefacilities: yachtextrafacilitiesparachute,
              Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
              OwyachtDaytripzroomavailability: daytriproomavailabilitystatus,
              Owyachtviproomhoursstay: daytripviproomhours,
              Owyachtperhoursviproomprice: ownervipperhoursroomprice,
              Owyachtnormalroomhoursstay: daytripnormalroomhours,
              Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
              Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
              // yacht day trip form data

              // yacht night trip form data
              Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
              Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
              Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
              Owyachttravelingrangenight: overnightyachttravelingmileinsea,
              Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
              Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
              Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
              Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
              Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
              Owyachtperdayroompricenight: overnightstayperviproomprice,
              Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
              Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

              // yacht night trip form data
            }).then((result) => {
              console.log(result)

              navigate('/Reviewyachtlisting')
            })
          }
        } else if (
          document.querySelector(
            "input[name='overnightstayfacilityinroom']:checked",
          ).value == 'no'
        ) {
          if (overnightyachtround == false) {
            alert('enter only alphabets in yacht traveling round')
            document.getElementById('overnightyachttravelingmileround').focus()
          } else if (overnightyachtmile == false) {
            alert('enter your yacht traveling mile in digits')
            document.getElementById('overnightyachttravelingmileinsea').focus()
          } else if (overnightyachtroundprice == false) {
            alert('enter your yacht traveling round price in digits')
            document.getElementById('ovenightyachttravelingmileprice').focus()
          } else {
            alert('your form is proper filled yes')
            Axios.post('http://localhost:5000/yacht', {
              // owner personal info
              OwnerPID: ownerID,

              //  owner personal info close

              // yacht info start from here
              Owyachtname: owneryachtname,
              Owyachtlength: owneryachtwidth,
              Owyyachtheight: owneryachtheight,
              Owyachtcolor: owneryachtcolor,
              Owyachtimo: ownerimonumber,
              Owoperatorname: VesselOperatorName,
              Owyachtsealocation: owneryachtseaaddress,
              Owyachtimg1: yachtimage1,
              Owyachtimg2: yachtimage2,
              Owyachtimg3: yachtimage3,

              // yacht info close from here

              // yacht amenities start from here
              OwyachtRoomavailability: owneryachtRoomyesno,
              Owyachtroomquantity: owneryachtroomquantity,
              Owyachtviproomquantity: owneryachtviproomquantity,
              Owyachtviproommaximumcap: onwerviproommaxcapacity,
              Owyachtnormalroomquantity: owneryachtnormalroomquantity,
              Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
              Owyachtfloor: owneryachtfloor,
              OwyachtDeck: owneryachtdeck,
              OwyachtDeckcapacity: ownerdeckcapacity,
              Owyachtkitchenservice: yachtkitchenservices,
              Owyachtchef: yachtchefservices,
              OwyachtSafetyamenities: yachtsafetyamenities,
              Owyachtaidbox: owneryachtaidbox,
              OwyachtLifejacket: owneryachtlifejacket,
              // yacht amenities close from here

              // yacht day trip form data
              Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
              Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
              Owyachttravelingroundname: yachtnametravelingmileround,
              Owyachttravelingrangeday: yachttravelingmile,
              Owyachttravelingrangedayprice: yachtravelingmileprice,
              Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
              Owyachtjetskifacilities: yachtextrafacilitiesjetski,
              Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
              Owyachttenderfacilities: yachtextrafacilitiestender,
              Owyachttenderprice: yachtextrafacilitiestenderprice,
              Owyachtparachutefacilities: yachtextrafacilitiesparachute,
              Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
              OwyachtDaytripzroomavailability: daytriproomavailabilitystatus,
              Owyachtviproomhoursstay: daytripviproomhours,
              Owyachtperhoursviproomprice: ownervipperhoursroomprice,
              Owyachtnormalroomhoursstay: daytripnormalroomhours,
              Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
              Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
              // yacht day trip form data

              // yacht night trip form data
              Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
              Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
              Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
              Owyachttravelingrangenight: overnightyachttravelingmileinsea,
              Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
              Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
              Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
              Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
              Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
              Owyachtperdayroompricenight: overnightstayperviproomprice,
              Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
              Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

              // yacht night trip form data
            }).then((result) => {
              console.log(result)

              navigate('/Reviewyachtlisting')
            })
          }
        }
      }
    } else if (
      document.querySelector("input[name='Room']:checked").value == 'No'
    ) {
      if (
        document.querySelector(
          "input[name='overnightyachtextrafacilities']:checked",
        ).value == 'Yes'
      ) {
        if (
          document.getElementById('writetypeofovernightextrafacilityonyacht')
            .value == ''
        ) {
          alert(
            'enter your overnight yacht extra facilities in detail with price',
          )
          document
            .getElementById('writetypeofovernightextrafacilityonyacht')
            .focus()
        }
        if (overnightyachtround == false) {
          alert('enter only alphabets in yacht traveling round')
          document.getElementById('overnightyachttravelingmileround').focus()
        } else if (overnightyachtmile == false) {
          alert('enter your yacht traveling mile in digits')
          document.getElementById('overnightyachttravelingmileinsea').focus()
        } else if (overnightyachtroundprice == false) {
          alert('enter your yacht traveling round price in digits')
          document.getElementById('ovenightyachttravelingmileprice').focus()
        } else if (overnightyachtfacilities == false) {
          alert(
            'enter only alphabets and digits and : this symbol in this field',
          )
          document
            .getElementById('writetypeofovernightextrafacilityonyacht')
            .focus()
        } else {
          alert('your form is proper filled yes')
          Axios.post('http://localhost:5000/yacht', {
            // owner personal info
            OwnerPID: ownerID,

            //  owner personal info close

            // yacht info start from here
            Owyachtname: owneryachtname,
            Owyachtlength: owneryachtwidth,
            Owyyachtheight: owneryachtheight,
            Owyachtcolor: owneryachtcolor,
            Owyachtimo: ownerimonumber,
            Owoperatorname: VesselOperatorName,
            Owyachtsealocation: owneryachtseaaddress,
            Owyachtimg1: yachtimage1,
            Owyachtimg2: yachtimage2,
            Owyachtimg3: yachtimage3,

            // yacht info close from here

            // yacht amenities start from here
            OwyachtRoomavailability: owneryachtRoomyesno,
            Owyachtroomquantity: owneryachtroomquantity,
            Owyachtviproomquantity: owneryachtviproomquantity,
            Owyachtviproommaximumcap: onwerviproommaxcapacity,
            Owyachtnormalroomquantity: owneryachtnormalroomquantity,
            Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
            Owyachtfloor: owneryachtfloor,
            OwyachtDeck: owneryachtdeck,
            OwyachtDeckcapacity: ownerdeckcapacity,
            Owyachtkitchenservice: yachtkitchenservices,
            Owyachtchef: yachtchefservices,
            OwyachtSafetyamenities: yachtsafetyamenities,
            Owyachtaidbox: owneryachtaidbox,
            OwyachtLifejacket: owneryachtlifejacket,
            // yacht amenities close from here

            // yacht day trip form data
            Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
            Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
            Owyachttravelingroundname: yachtnametravelingmileround,
            Owyachttravelingrangeday: yachttravelingmile,
            Owyachttravelingrangedayprice: yachtravelingmileprice,
            Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
            Owyachtjetskifacilities: yachtextrafacilitiesjetski,
            Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
            Owyachttenderfacilities: yachtextrafacilitiestender,
            Owyachttenderprice: yachtextrafacilitiestenderprice,
            Owyachtparachutefacilities: yachtextrafacilitiesparachute,
            Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
            OwyachtDaytripzroomavailability: daytriproomavailabilitystatus,
            Owyachtviproomhoursstay: daytripviproomhours,
            Owyachtperhoursviproomprice: ownervipperhoursroomprice,
            Owyachtnormalroomhoursstay: daytripnormalroomhours,
            Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
            Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
            // yacht day trip form data

            // yacht night trip form data
            Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
            Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
            Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
            Owyachttravelingrangenight: overnightyachttravelingmileinsea,
            Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
            Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
            Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
            Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
            Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
            Owyachtperdayroompricenight: overnightstayperviproomprice,
            Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
            Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

            // yacht night trip form data
          }).then((result) => {
            console.log(result)

            navigate('/Reviewyachtlisting')
          })
        }
      } else if (
        document.querySelector(
          "input[name='overnightyachtextrafacilities']:checked",
        ).value == 'no'
      ) {
        if (overnightyachtround == false) {
          alert('enter only alphabets in yacht traveling round')
          document.getElementById('overnightyachttravelingmileround').focus()
        } else if (overnightyachtmile == false) {
          alert('enter your yacht traveling mile in digits')
          document.getElementById('overnightyachttravelingmileinsea').focus()
        } else if (overnightyachtroundprice == false) {
          alert('enter your yacht traveling round price in digits')
          document.getElementById('ovenightyachttravelingmileprice').focus()
        } else {
          alert('your form is proper filled yes')
          Axios.post('http://localhost:5000/yacht', {
            // owner personal info
            OwnerPID: ownerID,

            //  owner personal info close

            // yacht info start from here
            Owyachtname: owneryachtname,
            Owyachtlength: owneryachtwidth,
            Owyyachtheight: owneryachtheight,
            Owyachtcolor: owneryachtcolor,
            Owyachtimo: ownerimonumber,
            Owoperatorname: VesselOperatorName,
            Owyachtsealocation: owneryachtseaaddress,
            Owyachtimg1: yachtimage1,
            Owyachtimg2: yachtimage2,
            Owyachtimg3: yachtimage3,

            // yacht info close from here

            // yacht amenities start from here
            OwyachtRoomavailability: owneryachtRoomyesno,
            Owyachtroomquantity: owneryachtroomquantity,
            Owyachtviproomquantity: owneryachtviproomquantity,
            Owyachtviproommaximumcap: onwerviproommaxcapacity,
            Owyachtnormalroomquantity: owneryachtnormalroomquantity,
            Owyachtnormalroommaxcap: owneryachtnormalroommaxcapacity,
            Owyachtfloor: owneryachtfloor,
            OwyachtDeck: owneryachtdeck,
            OwyachtDeckcapacity: ownerdeckcapacity,
            Owyachtkitchenservice: yachtkitchenservices,
            Owyachtchef: yachtchefservices,
            OwyachtSafetyamenities: yachtsafetyamenities,
            Owyachtaidbox: owneryachtaidbox,
            OwyachtLifejacket: owneryachtlifejacket,
            // yacht amenities close from here

            // yacht day trip form data
            Owyachtdaytripstartingtime: daytripyachtavailabilitystartingtime,
            Owyachtdaytripendingtime: daytripyachtavailabilityendingtime,
            Owyachttravelingroundname: yachtnametravelingmileround,
            Owyachttravelingrangeday: yachttravelingmile,
            Owyachttravelingrangedayprice: yachtravelingmileprice,
            Owyachtdayextrafacilities: extrafacilitiesowithtravelinginsea,
            Owyachtjetskifacilities: yachtextrafacilitiesjetski,
            Owyachtjetskiprice: yachtextrafacilitiesjetskiprice,
            Owyachttenderfacilities: yachtextrafacilitiestender,
            Owyachttenderprice: yachtextrafacilitiestenderprice,
            Owyachtparachutefacilities: yachtextrafacilitiesparachute,
            Owyachtparachuteprice: yachtextrafacilitiesparachuteprice,
            OwyachtDaytriproomavailability: daytriproomavailabilitystatus,
            Owyachtviproomhoursstay: daytripviproomhours,
            Owyachtperhoursviproomprice: ownervipperhoursroomprice,
            Owyachtnormalroomhoursstay: daytripnormalroomhours,
            Owyachtperhoursnormalroomprice: owneryachtnormalperhoursroomprice,
            Owyachtmoreextrafacilities: moreextrafacilitiesinseawithprice,
            // yacht day trip form data

            // yacht night trip form data
            Owyachtnighttripstartingtime: overnightyachtavalabilitystarttime,
            Owyachtnighttripendingtime: overnightyachtavalabilityendtime,
            Owyachttravelingroundnamenight: overnightyachtnametravelingmileround,
            Owyachttravelingrangenight: overnightyachttravelingmileinsea,
            Owyachttravelingrangenightprice: overnightyachttravelingmileprice,
            Owyachtnightextrafacilitiesavailability: overnightextrafacilitiesinyacht,
            Owyachtwhattypeofextrafacilitiesnight: textareaovernightyachtextrafacilities,
            Owyachtnightstayfacilitityavailability: overnightyachtstayfacilities,
            Owyachtviproomdaysstaymaxnight: maximumstayinviproom,
            Owyachtperdayroompricenight: overnightstayperviproomprice,
            Owyachtnormalroomdaystaysmaxnight: maximumstayinnormalroom,
            Owyachteperdaysnormalroomprice: overnightstaypernormalroomprice,

            // yacht night trip form data
          }).then((result) => {
            console.log(result)

            navigate('/Reviewyachtlisting')
          })
        }
      }
    }
  }
  return (
    <div>
      <Header></Header>
      <div className="container-fluid ">
        <div className="row  yachtpage justify-content-md-start justify-content-between">
          <div className="col-lg-2 col-3 d-md-block d-none">
            <Navbar></Navbar>
          </div>
          <div className="col-lg-10 col-md-9 col-8 content">
            <div className="row yach justify-content-center align-content-center">
              {/* yacht form start form here */}

              <div
                className="col-lg-10 col-12 border border-dark yachtvesselsame"
                id="yachtform"
              >
                {/* first row in yacht vessel same specification */}
                <div className="row firstrow ">
                  <div className="col border border-dark yachtheading text-center">
                    <h3>Yacht Form</h3>{' '}
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
                      placeholder="Enter Yacht Name Here"
                      id="yachtname"
                      value={owneryachtname}
                      onChange={(e) => {
                        yachtname(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* second row first column close here */}

                  {/* second row second column start here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter width of yacht"
                      id="width"
                      value={owneryachtwidth}
                      onChange={(e) => {
                        yachtwidth(e.target.value)
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
                      placeholder="Enter height here"
                      id="heightfield"
                      value={owneryachtheight}
                      onChange={(e) => {
                        yachtheight(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* third row first col close from here */}

                  {/* third row second col start from here */}

                  <div className="col-lg col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter color name of your yacht"
                      id="colorofyacht"
                      value={owneryachtcolor}
                      onChange={(e) => {
                        yachtcolor(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* third row second column close from here */}
                </div>
                {/* third row close from here */}

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
                      value={owneryachtseaaddress}
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
                      value={ownerimonumber}
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
                      value={yachtimage1}
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
                      value={yachtimage2}
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
                      value={yachtimage3}
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
                      onClick={Gotofurtheryachtform}
                    >
                      Next
                    </button>
                  </div>
                </div>
                {/* sixth row close from here */}
              </div>
              {/* yacht form close from here */}

              {/* Yacht Amenities form start from here */}

              <div
                className="col-lg-10 col-12 yachtamenitiesform border border-dark"
                id="yachtamenitiesform"
              >
                {/* first row yacht amenities start from here */}

                <div
                  className="row fistrowamenities border border-dark "
                  id="fistrowamenities"
                >
                  <div className="col text-center">
                    <h3>Yacht Amenities</h3>
                  </div>
                </div>

                {/* first row yacht close from here */}
                {/* second row yacht Amenities start from here */}

                <div
                  className="row secondrowamenities border border-dark py-2"
                  id="secondrowamenities"
                >
                  {/* second row first column start from here */}
                  <div className="col-lg col-12 roomyesnocolumn border">
                    <label className="form-label Room" id="Roomavailability">
                      Room
                    </label>
                    &nbsp;
                    <div className="form-check  form-check-inline">
                      <input
                        type="radio"
                        name="Room"
                        value="Yes"
                        className="form-check-input"
                        id="Roomyes"
                        onChange={(e) => {
                          yachtroomchoice(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Roomyes"
                        className="form-check-label"
                        onClick={DisplayformofRooms}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="Room"
                        value="No"
                        className="form-check-input"
                        id="Roomno"
                        onChange={(e) => {
                          yachtroomchoice(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Roomno"
                        className="form-check-label"
                        onClick={NoDisplayformofRoom}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* second row first column close from here */}

                  {/* second row second column start from here */}

                  <div className="col-lg col-12 Roomcolumn" id="Roomcolumn">
                    <select
                      className="form-select"
                      id="Roomquantityselectoption"
                      onChange={(e) => {
                        yachtroomquantity(e.target.value)
                      }}
                    >
                      <optgroup label="Room Quantity" id="yachtroomQuantity">
                        <option selected value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </optgroup>
                    </select>
                  </div>
                  {/* second row second column close from here */}
                </div>
                {/* second row close from here */}

                {/* third row start from here */}
                <div
                  className="row thirdrowamaneties border border-dark py-2"
                  id="thirdrowamenities"
                >
                  {/* third row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter Vip Room Quantity"
                      className="form-control"
                      id="ViproomQuantity"
                      value={owneryachtviproomquantity}
                      onChange={(e) => {
                        viproomofyachtquantity(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* third row first column start from here */}
                  {/* third row second column start from here */}

                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter Vip Room Maximum Capacity"
                      className="form-control"
                      id="VipRoomMaximumCapacity"
                      value={onwerviproommaxcapacity}
                      onChange={(e) => {
                        viproommaximumcapacity(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>

                {/* third row second column close from here */}

                {/* third row close from here */}

                {/* Fourth row start from here */}
                <div
                  className="row fourthrowamenities border border-dark py-2"
                  id="fourthrowamenities"
                >
                  {/* fourth row only column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter Normal room Quantity"
                      className="form-control"
                      id="normalroomquantity"
                      value={owneryachtnormalroomquantity}
                      onChange={(e) => {
                        yachtnormalroomquantity(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* fourth row only column close form here */}
                </div>

                {/* Fourth Row close from here */}

                {/* Fifth row start from here */}
                <div
                  className="row fifthrowamenities border border-dark py-2"
                  id="fifthrowamenities"
                >
                  {/* fifth row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter Normal room Maximun Capacity"
                      className="form-control"
                      id="normalroommaxcapacity"
                      value={owneryachtnormalroommaxcapacity}
                      onChange={(e) => {
                        yachtnormalroommaxcapacity(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* fifth row first column close from here */}

                  {/* fifth row second column start from here */}

                  {/* fifth row second column close from here */}
                </div>

                {/* Fifth row close form here */}

                {/* sixth row start from here */}
                <div
                  className="row sixthrowamenities border border-dark py-2"
                  id="sixthrowamenities"
                >
                  {/* sixth row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter How many floor in your yacht"
                      className="form-control"
                      id="howmanyfloorinyacht"
                      value={owneryachtfloor}
                      onChange={(e) => {
                        yachtfloor(e.target.value)
                      }}
                    ></input>
                  </div>

                  {/* sxith row first column close from here */}

                  {/* sixth row second column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="How many Deck in your yacht"
                      className="form-control"
                      id="howmanydeckinyact"
                      value={owneryachtdeck}
                      onChange={(e) => {
                        yachtdeck(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* sixth row second column close from here */}
                </div>
                {/* sixth row close from here */}

                {/* seventh row start from here */}
                <div
                  className="row seventhrowamenities border border-dark py-2"
                  id="seventhrowamenities"
                >
                  {/* seventh row first column start from here */}
                  <div className="col-lg col-12">
                    <input
                      type="text"
                      placeholder="Enter your yacht deck capacity"
                      className="form-control"
                      id="yachtdeckcapacity"
                      value={ownerdeckcapacity}
                      onChange={(e) => {
                        deckcapacity(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* seventh row first column close from here */}

                  {/* seventh row second column start from here */}
                  <div className="col-lg col-12 py-2" id="khickenservicecolumn">
                    <label className="form-label" id="khickenservice">
                      khicken Service
                    </label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="khickenserviceyes"
                        name="khicken"
                        value="yes"
                        onChange={(e) => {
                          kitchenservices(e.target.value)
                        }}
                      ></input>
                      <label
                        for="khickenserviceyes"
                        className="form-check-label"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="khickenserviceno"
                        name="khicken"
                        value="no"
                        onChange={(e) => {
                          kitchenservices(e.target.value)
                        }}
                      ></input>
                      <label
                        for="khickenserviceno"
                        className="form-check-label"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* seveth row second column close from here */}
                </div>
                {/* seventh row close from here */}

                {/* eight row start from here */}
                <div
                  className="row eightrowamenities border border-dark py-2"
                  id="eightrowamenities"
                >
                  {/* eight row first column start from here */}
                  <div className="col-lg col-12 py-2">
                    <label className="form-label">Chef Service</label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="chef"
                        className="form-check-input"
                        value="yes"
                        id="chefyes"
                        onChange={(e) => {
                          chef(e.target.value)
                        }}
                      ></input>
                      <label for="chefyes" className="form-check-label">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="chef"
                        className="form-check-input"
                        value="no"
                        id="chefno"
                        onChange={(e) => {
                          chef(e.target.value)
                        }}
                      ></input>
                      <label for="chefno" className="form-check-label">
                        No
                      </label>
                    </div>
                  </div>
                  {/* eight row first column close from here */}
                  {/* eight row second column start from here */}
                  <div className="col-lg col-12 py-2">
                    <label className="form-label"> Safety Amenities </label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="safetyamenities"
                        value="yes"
                        id="safetyamenitiesyes"
                        onChange={(e) => {
                          safetyamenities(e.target.value)
                        }}
                      ></input>
                      <label
                        for="safetyamenitiesyes"
                        className="form-check-label"
                        onClick={DisplayFormofSafetyAmenities}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="safetyamenities"
                        value="no"
                        id="safetyamenitiesno"
                        onChange={(e) => {
                          safetyamenities(e.target.value)
                        }}
                      ></input>
                      <label
                        for="safetyamenitiesno"
                        className="form-check-label"
                        onClick={NoDisplayformofSafetyAmenities}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* eight row second column close from here */}
                </div>
                {/* eight row close form here */}
                {/* ninth row start from here */}
                <div
                  className="row ninthrowamenities border border-dark py-2"
                  id="ninthrowamenities"
                >
                  {/* ninth row first column start from here */}
                  <div className="col-lg col-12 py-2">
                    <label className="form-label">Aids Box</label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Aidbox"
                        value="yes"
                        id="aidboxyes"
                        onChange={(e) => {
                          oyachtaidbox(e.target.value)
                        }}
                      ></input>
                      <label for="aidboxyes" className="form-check-label">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Aidbox"
                        value="no"
                        id="aidboxno"
                        onChange={(e) => {
                          oyachtaidbox(e.target.value)
                        }}
                      ></input>
                      <label for="aidboxno" className="form-check-label">
                        No
                      </label>
                    </div>
                  </div>
                  {/* ninth row first column close from here */}
                  {/* ninth row second column start from here */}
                  <div className="col-lg col-12 py-2">
                    <label className="form-label">Life Jacket</label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="lifejacket"
                        value="yes"
                        id="lifejacketyes"
                        onChange={(e) => {
                          oyachtlifejacket(e.target.value)
                        }}
                      ></input>
                      <label for="lifejacketyes" className="form-check-label">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="lifejacket"
                        value="no"
                        id="lifejacketno"
                        onChange={(e) => {
                          oyachtlifejacket(e.target.value)
                        }}
                      ></input>
                      <label for="lifejacketno" className="form-check-label">
                        No
                      </label>
                    </div>
                  </div>
                  {/* ninth row second column close from here */}
                </div>
                {/* ninth row close from here */}
                {/* tenth row start from here */}
                <div
                  className="row tenthrowamenites py-2"
                  id="tenthrowamenities"
                >
                  {/* tenth row only column start from here */}
                  <div className="col text-center">
                    <button
                      className="btn btn-secondary py-2 px-3"
                      id="gotoyachtdaytrip"
                      onClick={Gobacktoyachtform}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-secondary py-2 px-3 ms-1"
                      id="gobacktoyachtform"
                      onClick={Gotoyachtdaytripform}
                    >
                      Next
                    </button>
                  </div>
                  {/* tenth row only column close from here */}
                </div>
                {/* tenth row close from here */}
              </div>

              {/* Yacht amenities form close form here */}

              {/* yacht daytrip form start from here */}
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
                    <h3>Day Trips</h3>
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
                    <select
                      className="form-select"
                      id="selectyachttotalavailabilitytime"
                      name="selecttotaltimeofyachtavailability"
                      onChange={(e) => {
                        totalyachtavailabilitytime(e.target.value)
                      }}
                    >
                      <option selected value="1">
                        1 hour
                      </option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="7">7 hours</option>
                      <option value="8">8 hours</option>
                      <option value="9">9 hours</option>
                      <option value="10">10 hours</option>
                      <option value="11">11 hours</option>
                      <option value="12">12 hours</option>
                    </select>
                  </div>

                  {/* day trip first column close from here */}

                  {/* day trip second column start from here */}
                  <div
                    className="col-lg col-12daytripsecondcolumn"
                    id="daytripsecondcolumn"
                  >
                    <input
                      type="time"
                      className="form-control"
                      placeholder="Enter yacht avalability starting time"
                      id="yachtavalabilitystartingtime"
                      min="6:00"
                      max="17:00"
                      value={daytripyachtavailabilitystartingtime}
                      onChange={(e) => {
                        yachtavailabilitystartingtime(e.target.value)
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
                      type="time"
                      placeholder="Enter yacht avalability ending time"
                      className="form-control"
                      id="yachtavalabilityendingtime"
                      value={daytripyachtavailabilityendingtime}
                      onChange={(e) => {
                        yachtavailabilityendingtime(e.target.value)
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
                      placeholder="Enter Name yacht Traveling mile round"
                      className="form-control"
                      id="yachttravelingmileround"
                      value={yachtnametravelingmileround}
                      onChange={(e) => {
                        travelingmileroundname(e.target.value)
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
                      placeholder="Enter yacht traveling mile in sea"
                      className="form-control"
                      id="yachttravelingmileinsea"
                      value={yachttravelingmile}
                      onChange={(e) => {
                        travelingmileinseaofyacht(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* third row first column close from here */}

                  {/* third row second column start from here */}
                  <div
                    className="col-lg col-12 daytripsixthcolumn"
                    id="daytripsixthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter yacht traveling mile (price) in sea"
                      className="form-control"
                      id="yachttravelingmileprice"
                      value={yachtravelingmileprice}
                      onChange={(e) => {
                        travelingmilepriceofyachtinsea(e.target.value)
                      }}
                    ></input>
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
                    className="col-lg col-12   daytripsevethcolumn py-2"
                    id="daytripsevethcolumn"
                  >
                    <label className="form-label">
                      (Extra Facilities traveling in sea)
                    </label>
                    &nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extrafacilities"
                        value="Yes"
                        id="Extrafacilitiesyes"
                        onChange={(e) => {
                          yachtextrafacilitiesinsea(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilitiesyes"
                        className="form-check-label"
                        onClick={Openextrafacilities}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Extrafacilities"
                        value="no"
                        id="Extrafacilitiesno"
                        onChange={(e) => {
                          yachtextrafacilitiesinsea(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Extrafacilitiesno"
                        className="form-check-label"
                        onClick={Noopenextrafacilties}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip fourth row first column close from here */}

                  {/* day trip fourth row second column start from here */}
                  <div
                    className="col-lg col-12  daytripeightcolumn py-2"
                    id="daytripeightcolumn"
                  >
                    <label className="form-label">(Jet Ski)</label>&nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Jet Ski"
                        value="Yes"
                        id="JetSkiyes"
                        onChange={(e) => {
                          extrafacilitiesjetski(e.target.value)
                        }}
                      ></input>
                      <label
                        for="JetSkiyes"
                        className="form-check-label"
                        onClick={Openjetskipriceinput}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Jet Ski"
                        value="no"
                        id="JetSkino"
                        onChange={(e) => {
                          extrafacilitiesjetski(e.target.value)
                        }}
                      ></input>
                      <label
                        for="JetSkino"
                        className="form-check-label"
                        onClick={Noopenjetskipriceinput}
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
                  className="row daytripfifthrow border border-dark py-2"
                  id="daytripfifthrow"
                >
                  {/* day trip fifth row first column start from here */}
                  <div
                    className="col-lg col-12 daytripninthcolumn"
                    id="daytripninthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter Jetski Price per Traveling mile"
                      className="form-control"
                      id="Jetskiprice"
                      value={yachtextrafacilitiesjetskiprice}
                      onChange={(e) => {
                        extrafacilitiesjetskiprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* day trip fifth row first column close from here */}

                  {/* day trip fifth row second column start from here */}
                  <div
                    className="col-lg col-12 daytriptenthcolumn py-2"
                    id="daytriptenthcolumn"
                  >
                    <label className="form-label">(Tender)</label>&nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Tender"
                        value="Yes"
                        id="Tenderyes"
                        onChange={(e) => {
                          extrafacilitiestender(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Tenderyes"
                        className="form-check-label"
                        onClick={Opentenderpriceinput}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Tender"
                        value="no"
                        id="Tenderno"
                        onChange={(e) => {
                          extrafacilitiestender(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Tenderno"
                        className="form-check-label"
                        onClick={Noopentenderpriceinput}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip fifth row second column close from here */}
                </div>
                {/* day trip fifth row close from here */}

                {/* day trip sixth row start from here  */}
                <div
                  className="row daytripsixthrow border border-dark py-2"
                  id="daytripsixthrow"
                >
                  {/* day trip sixth row first column start from here */}
                  <div
                    className="col-lg col-12 daytripeleventhcolumn"
                    id="daytripeleventhcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter Tender price"
                      className="form-control"
                      id="Tenderprice"
                      value={yachtextrafacilitiestenderprice}
                      onChange={(e) => {
                        extrafacilitiestenderprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* day trip sixth row first column close from here */}

                  {/* day trip sixth row second column start from here */}
                  <div
                    className="col-lg col-12 daytrip12column py-2"
                    id="daytrip12column"
                  >
                    <label className="form-label">(Parachute)</label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Parachute"
                        value="Yes"
                        id="Parachuteyes"
                        onChange={(e) => {
                          extrafacilitiesparachute(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Parachuteyes"
                        className="form-check-label"
                        onClick={Openparachuteinputprice}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Parachute"
                        value="no"
                        id="Parachuteno"
                        onChange={(e) => {
                          extrafacilitiesparachute(e.target.value)
                        }}
                      ></input>
                      <label
                        for="Parachuteno"
                        className="form-check-label"
                        onClick={Noopenparachuteinput}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip sixth row second column close from here */}
                </div>
                {/* day trip sixth row close from here  */}

                {/* day trip seventh row start from here */}
                <div
                  className="row daytripseventhrow border border-dark py-2"
                  id="daytripseventhrow"
                >
                  {/* day trip seventh row first column start from here */}
                  <div
                    className="col-lg col-12 daytripthirtheencolumn"
                    id="daytripthirtheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter Parachute Price"
                      className="form-control"
                      id="Parachuteprice"
                      value={yachtextrafacilitiesparachuteprice}
                      onChange={(e) => {
                        extrafacilitiesparachuteprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* day trip seventh row first column close from here */}

                  {/* day trip seventh row second column start from here */}
                  <div
                    className="col-lg col-12 daytripfourtheencolumn"
                    id="daytripfourtheencolumn"
                  >
                    <label className="form-label">
                      Room Avalaiblity in day trip
                    </label>
                    &nbsp;&nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Roomavailability"
                        value="Yes"
                        id="daytriproomavailableyes"
                        onChange={(e) => {
                          roomavailabilitystatusdaytrip(e.target.value)
                        }}
                      ></input>
                      <label
                        for="daytriproomavailableyes"
                        className="form-check-label"
                        onClick={Opendaytriproomform}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="Roomavailability"
                        value="no"
                        id="daytriproomavailableno"
                        onChange={(e) => {
                          roomavailabilitystatusdaytrip(e.target.value)
                        }}
                      ></input>
                      <label
                        for="daytriproomavailableno"
                        className="form-check-label"
                        onClick={Noopendaytriproomform}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* day trip seventh row second column close from here */}
                </div>
                {/* day trip seventh row close from here */}
                {/* day trip eight row start from here */}
                <div
                  className="row daytripeightrow py-2 border border-dark"
                  id="daytripeightrow"
                >
                  <div
                    className="col-lg col-12 daytripsixtheencolumn"
                    id="daytripsixtheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter how many hours vip room available in day trip"
                      className="form-control"
                      id="hourstayinviproom"
                      value={daytripviproomhours}
                      onChange={(e) => {
                        howmanyhoursviproomindaytrip(e.target.value)
                      }}
                    ></input>
                  </div>
                  <div
                    className="col-lg col-12 daytripseventheencolumn"
                    id="daytripseventheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter vip per room price"
                      className="form-control"
                      id="vipperroompricedaytrip"
                      value={ownervipperhoursroomprice}
                      onChange={(e) => {
                        vipperhoursroomprice(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                {/* day trip eight row close from here */}
                {/* day trip ninth row start from here */}
                <div
                  className="row daytripninthrow py-2 border border-dark"
                  id="daytripninthrow"
                >
                  <div
                    className="col-lg col-12 daytripeighteencolumn"
                    id="daytripeightheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter how many hours normal room available in day trip"
                      className="form-control"
                      id="howmanyhourstayinnormalroom"
                      value={daytripnormalroomhours}
                      onChange={(e) => {
                        howmanyhoursnormalroomindaytrip(e.target.value)
                      }}
                    ></input>
                  </div>
                  <div
                    className="col-lg col-12 daytripnintheencolumn"
                    id="daytripnintheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter per normal room price"
                      className="form-control"
                      id="pernormalroomprice"
                      value={owneryachtnormalperhoursroomprice}
                      onChange={(e) => {
                        yachtnormalperhoursroomprice(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                {/* day trip ninth row close from here */}

                <div
                  className="row daytriptenthrow py-2 border border-dark"
                  id="daytriptenthrow"
                >
                  <div
                    className="col-lg col-12 daytripfiftheencolumn"
                    id="daytripfiftheencolumn"
                  >
                    <input
                      type="text"
                      placeholder="enter more extra facilities with price"
                      className="form-control"
                      id="moreextrafacilities"
                      value={moreextrafacilitiesinseawithprice}
                      onChange={(e) => {
                        morefacilitiesinseawithprice(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>

                {/* day trip eleventh row start from here */}
                <div
                  className="row daytripeleventhrow border border-dark py-2"
                  id="daytripeleventhrow"
                >
                  {/* daytrip eight row only colunm start from here */}
                  <div
                    className="col daytriptwentycolumn text-center"
                    id="daytriptwentycolumn"
                  >
                    <button
                      className="btn btn-secondary"
                      onClick={Gobacktoyachtamenitiesform}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-secondary ms-1"
                      onClick={Gotoyachtovernightstayform}
                    >
                      Next
                    </button>
                  </div>
                  {/* daytrip tenht row only colunm close from here */}
                </div>

                {/* day trip eight row close from here */}
              </div>
              {/* yacht daytrip form close from here */}

              {/* yachtovernight form start from here */}
              <div
                className=" col-12 border border-dark yachtovernightform"
                id="yachtovernightform"
              >
                {/* overnight yacht form first row start from here */}
                <div
                  className="row headingrow border border-dark py-2"
                  id="headingrow"
                >
                  <div className="col text-center">
                    <h3>Overnight Trips</h3>
                  </div>
                </div>
                {/* overnight yacht form first row close from here */}

                {/* overnight second row start from here */}
                <div
                  className="row overnightsecondrow border border-dark py-2"
                  id="overnightsecondrow"
                >
                  {/* overnight first column start from here  */}
                  <div
                    className="col-lg col-12 overnightfirstcolumn"
                    id="overnightfirstcolumn"
                  >
                    <select
                      className="form-select"
                      id="selectyachttotalavailabilitytimeovernight"
                      name="selecttotaltimeofyachtavailabilityovernight"
                      onChange={(e) => {
                        totalyachtavalabiltytimeovernight(e.target.value)
                      }}
                    >
                      <option selected value="1">
                        1 hour
                      </option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="5">5 hours</option>
                      <option value="6">6 hours</option>
                      <option value="7">7 hours</option>
                      <option value="8">8 hours</option>
                      <option value="9">9 hours</option>
                      <option value="10">10 hours</option>
                      <option value="11">11 hours</option>
                      <option value="12">12 hours</option>
                    </select>
                  </div>

                  {/* overnight first column close from here */}

                  {/* overnight second column start from here */}
                  <div
                    className="col-lg col-12 overnighttripsecondcolumn"
                    id="overnighttripsecondcolumn"
                  >
                    <input
                      type="time"
                      className="form-control"
                      id="overnightyachtavalabilitystartingtime"
                      value={overnightyachtavalabilitystarttime}
                      onChange={(e) => {
                        yachtavalabilitystartingtime(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight second column close from here */}
                </div>

                {/* overnight second row close from here */}

                {/* overnight third row start from here */}

                <div
                  className="row overnightthirdrow border border-dark py-2"
                  id="overnightthirdrow"
                >
                  {/* overnight third row first column start from here */}
                  <div
                    className="col-lg col-12 overnightthirdcolumn"
                    id="overnightthirdcolumn"
                  >
                    <input
                      type="time"
                      className="form-control"
                      id="overnightyachtavalabilityendingtime"
                      value={overnightyachtavalabilityendtime}
                      onChange={(e) => {
                        yachtavalabilityendingtime(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight third row first column close from here */}

                  {/* overnight third row second column start from here */}
                  <div
                    className="col-lg col-12 overnightfourthcolumn"
                    id="overnightfourthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter overnight Name yacht Traveling mile (round)"
                      className="form-control"
                      id="overnightyachttravelingmileround"
                      value={overnightyachtnametravelingmileround}
                      onChange={(e) => {
                        yachttravelingovernightroundname(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight third row second column close from here */}
                </div>

                {/* overnight third row close from here */}

                {/* overnight fourth row start from here */}
                <div
                  className="row ovenightfourthrow border border-dark py-2"
                  id="ovenightfourthrow"
                >
                  {/* overnight fourth row first column start from here */}
                  <div
                    className="col-lg col-12 overnightfifthcolumn"
                    id="overnightfifthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter overnight yacht traveling mile in sea"
                      className="form-control"
                      id="overnightyachttravelingmileinsea"
                      value={overnightyachttravelingmileinsea}
                      onChange={(e) => {
                        yachttravelingmileinseanight(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight fourth row first column close from here */}

                  {/* overnight fourth row second column start from here */}
                  <div
                    className="col-lg col-12 overnightsixthcolumn"
                    id="overnightsixthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter overnight yacht traveling mile (price) in sea"
                      className="form-control"
                      id="ovenightyachttravelingmileprice"
                      value={overnightyachttravelingmileprice}
                      onChange={(e) => {
                        yachttravelingmilepriceovernightinsea(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight fourth row second column close from here */}
                </div>

                {/* overnight fourth row close from here */}

                {/* overnight fifth row start from here */}
                <div
                  className="row overnightfifthrow border border-dark py-2"
                  id="overnightfifthrow"
                >
                  {/* overnight fifth row first column start from here */}
                  <div
                    className="col-lg col-12   overnightsevethcolumn py-2"
                    id="overnightsevethcolumn"
                  >
                    <label className="form-label">
                      (Overnight Yacht Extra Facilities)
                    </label>
                    &nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="overnightyachtextrafacilities"
                        value="Yes"
                        id="overnightextrafacilitiesyes"
                        onChange={(e) => {
                          yachtovernightextrafacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="overnightextrafacilitiesyes"
                        className="form-check-label"
                        onClick={Opennightyachtextrafacilty}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="overnightyachtextrafacilities"
                        value="no"
                        id="overnightextrafacilitiesno"
                        onChange={(e) => {
                          yachtovernightextrafacility(e.target.value)
                        }}
                      ></input>
                      <label
                        for="overnightextrafacilitiesno"
                        className="form-check-label"
                        onClick={Noopennightyachtextrafacility}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {/* overnight fifth row first column close from here */}

                  {/* overnight fifth row second column start from here */}
                  <div
                    className="col-lg col-12 overnighteightcolumn"
                    id="overnighteightcolumn"
                  >
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter overnight what type of extra facilities in yacht with price"
                      id="writetypeofovernightextrafacilityonyacht"
                      value={textareaovernightyachtextrafacilities}
                      onChange={(e) => {
                        descriptionovernightyachtextrafacility(e.target.value)
                      }}
                    ></textarea>
                  </div>
                  {/*overnight fifth row second column close from here */}
                </div>

                {/* overnight fifthrow close from here */}

                {/* overnight sixthrow start from here */}
                <div
                  className="row overnigthsixthrow border border-dark py-2"
                  id="overnightsixthrow"
                >
                  {/* overnight sixth row first column start from here  */}

                  <div
                    className="col-lg col-12   overnightninthcolumn py-2"
                    id="overnightninthcolumn"
                  >
                    <label className="form-label">
                      (Overnight stay facility in Room)
                    </label>
                    &nbsp;
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="overnightstayfacilityinroom"
                        value="Yes"
                        id="overnightstayfacilityinroomyes"
                        onChange={(e) => {
                          yachtnightstayfacilityinroom(e.target.value)
                        }}
                      ></input>
                      <label
                        for="overnightstayfacilityinroomyes"
                        className="form-check-label"
                        onClick={Openovernightstayfacilities}
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="overnightstayfacilityinroom"
                        value="no"
                        id="overnightstayfacilityinroomno"
                        onChange={(e) => {
                          yachtnightstayfacilityinroom(e.target.value)
                        }}
                      ></input>
                      <label
                        for="overnightstayfacilityinroomno"
                        className="form-check-label"
                        onClick={NoOpenovernightstayfacilities}
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* overnight sixth row first column close from here */}

                  {/* overnight sixth row second column start from here */}
                  <div
                    className="col-lg col-12 overnighttenthcolumn"
                    id="overnighttenthcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter how many day stay in Vip Room(maximum)"
                      className="form-control"
                      id="stayinviproom"
                      value={maximumstayinviproom}
                      onChange={(e) => {
                        enterhowmanydaystayinviproom(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight sixth row second column close from here */}
                </div>
                {/* overnight sixthrow close from here */}
                {/* overnight seventh row start from here */}
                <div
                  className="row overnightseventhrow border border-dark py-2"
                  id="overnightseventhrow"
                >
                  {/* overnight seventh row first column start from here */}
                  <div
                    className="col-lg col-12 overnighteleventhcolumn"
                    id="overnighteleventhcolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter per day price of vip room"
                      className="form-control"
                      id="priceofviproom"
                      value={overnightstayperviproomprice}
                      onChange={(e) => {
                        yachtovernightstayviproomprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnigth seventh row first column close from here */}

                  {/* overnight seventh row second column start from here */}
                  <div
                    className="col-lg col-12 overnight12column"
                    id="overnight12column"
                  >
                    <input
                      type="text"
                      placeholder="Enter How many day stay in normal room in yacht"
                      className="form-control"
                      id="stayinnormalroom"
                      value={maximumstayinnormalroom}
                      onChange={(e) => {
                        yachtovernightstayinnormalroom(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight seventh row second column close from here */}
                </div>
                {/* overnight seventh row close from here */}

                {/* overnight eigth row start from here */}
                <div
                  className="row overnighteigthrow border border-dark py-2"
                  id="overnighteigthrow"
                >
                  {/* overnight eight row first column start from here */}
                  <div
                    className="col overnightthirteencolumn"
                    id="overnightthirteencolumn"
                  >
                    <input
                      type="text"
                      placeholder="Enter per day price of normal room"
                      className="form-control"
                      id="normalroomprice"
                      value={overnightstaypernormalroomprice}
                      onChange={(e) => {
                        yachtovernightstaynormalroomprice(e.target.value)
                      }}
                    ></input>
                  </div>
                  {/* overnight eight row first column close from here */}
                </div>
                {/* overnight eigth row close from here */}

                {/* overnight ninth row start from here */}
                <div className="row overnightninthrow" id="overnightninthrow">
                  {/* overnight ninth row only column start from here */}
                  <div
                    className="col overnightfourtheencolumn text-center"
                    id="overnightfourtheencolumn"
                  >
                    <button
                      className="btn btn-secondary"
                      onClick={Gobacktodaytripform}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-secondary ms-1"
                      onClick={Submitdataofyacht}
                    >
                      Submit
                    </button>
                  </div>
                  {/* overnight ninth row only column close from here */}
                </div>
                {/* overnight ninth row close from here */}
              </div>
              {/* yacht overnight form close from here */}
            </div>

            {/* main row close from here */}
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
export default Yacht
