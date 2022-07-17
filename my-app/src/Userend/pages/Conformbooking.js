import UserendHeader from  "../Component/header";
import daytrips2 from "../images/daytrips2.jpg";
import daytrips3 from "../images/daytrips3.jpg";
import daytrips4 from "../images/daytrips4.jpg";
import Reactangle2 from "../images/Rectangle2.png";
import "./conform.css";

function UserendConformbooking(){
    return(
        <div>
            <UserendHeader/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    {/* 1st colom nested 1strow start */}
                 <div class="row mt-4">
                    <div class="col-6 border border-dark">Listing Name</div>
                    <div class="col-6 border border-dark">ABC XYZ</div>
                </div>
                {/* End */}
                 {/* 1st colom nested 2ndrow start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark">Location</div>
                    <div class="col-6 border border-dark">Amazon Rivers</div>
                </div>
                {/* End */}

                 {/* 1st colom nested 3rdrow start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark">Duration</div>
                    <div class="col-6 border border-dark">5hours</div>
                </div>
                {/* End */}
                
                
                 {/* 1st colom nested 4throw start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark">Guest Capacity</div>
                    <div class="col-6 border border-dark">3person</div>
                </div>
                {/* End */}

                
                 {/* 1st colom nested 5throw start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark"> Start Date</div>
                    <div class="col-6 border border-dark">15-06-2022</div>
                </div>
                {/* End */}

                
                 {/* 1st colom nested 6throw start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark">End Date</div>
                    <div class="col-6 border border-dark">ABC XYZ</div>
                </div>
                {/* End */}

                
                 {/* 1st colom nested 7throw start */}
                 <div class="row mt-2">
                    <div class="col-6 border border-dark">Amount</div>
                    <div class="col-6 border border-dark">$ 45000 </div>
                </div>
                {/* End */}
                
                
                
                
                
                </div>
                <div class="col-lg-4 col-md-6"> <img src={Reactangle2} class="img-fluid" id="reactangle"></img></div>

                <div class="col-lg-4 col-md-6  border border-dark mt-4">
                    <div class="row">
                 <div class="col-4 p-0"><img src={daytrips2} class="img-fluid"></img></div>
                 <div class="col-4 p-0"><img src={daytrips3} class="img-fluid"></img></div>
                 <div class="col-4 p-0"><img src={daytrips4} class="img-fluid"></img></div>
                 <div class="row">
                <div class="col-12 text-start mt-4"><h5>SELECT GUEST</h5></div>
            <div class="row">
                <div class="col-12">
                <select class="form-select">
            <option>SELECT</option>   
            <option  value="1hours">ONE Persons</option>
            <option value="2hours">TWo Person</option>
            <option value="3hours">THREE Person</option>
            <option value="4hours">FOUR Person</option>
            <option value="5hours">FIVE Person</option>
            </select>
            
            </div>
            </div>
            </div>

            <div class="row">
                <div class="col-12 text-start mt-3"><h5>DURATION</h5></div>
            <div class="row">
            <select class="form-select">
            <option>SELECT TIME</option>   
            <option  value="1hours">ONE hour</option>
            <option value="2hours">TWo hours</option>
            <option value="3hours">THREE hours</option>
            <option value="4hours">FOUR fours</option>
            <option value="5hours">FIVE fives</option>
            </select>  
            
            
            
            </div>
            </div>
            {/* row1 col-12 */}

            <div class="row mt-3">
                 <div class="col-6 p-0 border border-dark "><h5>START DATE</h5></div>
             <div class="col-6 p-0 border border-dark"><h5>END DATE</h5></div>
             </div>
              {/* row close */}

              
            <div class="row p-0 ">
            <div class="col-6 text-start"> <input type="date"></input></div>
            <div class="col-6 text-end"> <input type="date"></input></div>
            </div>
            {/* row end input tag */}
             </div>
             <div class="row border border-dark mt-3">
            <div class="col-8 border border-dark text-start"><h5>DURATION:</h5></div>
<div class="col-4 border border-dark text-end">234$</div>

</div>

<div class="row  border border-dark"><div class="col-8 border border-dark text-start"><h5>TEXES:</h5></div>
<div class="col-4 border border-dark text-end">20$</div>

</div>

<div class="row border border-dark"><div class="col-8 border border-dark text-start"><h5>EXTRAS:</h5></div>
<div class="col-4 border border-dark text-end">6$</div>

</div>

<div class="row  border border-dark">
    <div class="col-8 border border-dark text-start"><h5>TOTEL:</h5></div>
<div class="col-4 border border-dark text-end">260$</div>
</div>
<div className="row">
<div class="col-12 px-0"><button class="btn bg-primary" id="button"><h5>Book Now</h5></button></div>
</div>
  </div>


            </div>
            <div class="row ">
            <div class="col-12 border border-dark">
            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle text-start" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Payment
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" id
    ="dropdown-item" href="#">Easy Paisa</a></li>
    <li><a class="dropdown-item" id="dropdown-item" href="#">Bank account</a></li>
 
  </ul>
</div>     

            </div>
            {/* row wala div */}
            

</div>



        </div>
        </div>
    )
}
export default UserendConformbooking;