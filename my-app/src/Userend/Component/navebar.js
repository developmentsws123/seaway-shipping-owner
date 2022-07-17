import './navebar.css';
function UserendNavebar(){
   return (
       <div class="container-fluid "id='navbar'>
           <div class="row">
               <div class="col-12 border border-dark py-1 "> 
               <nav class="nav">
            <a href="/User/Home" class="nav-link px-2 px-md-2">HOME</a>
           
            <a href="/User/Yacht" class="nav-link px-2 px-md-2">YACHT</a>
            <a href="/User/Boat" class="nav-link px-2 px-md-2">BOAT</a>
            <a href="/User/EventDetail" class="nav-link px-2 px-md-2">EVENT</a>



               </nav>
              </div>
          


            

           </div>
       </div>
   ) 
}
export default UserendNavebar;