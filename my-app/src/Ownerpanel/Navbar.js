import './navbar.css';
function Navbar() {


    return (
        <div className='row'>
            <div className="col-lg-12 col-md-12  menu bg-dark p-0">
                <ul className='nav nav-tabs border-bottom-0 flex-column'>
                    <li className='nav-item'>
                        <a href='/dashboard' className='nav-link p-0 py-3 navbar  justify-content-start ' >DASHBOARD</a>
                    </li>
                    <li className='nav-item dropdown dropend'>

                        <a  className='nav-link  p-0 py-3 navbar ' data-bs-toggle="dropdown" aria-expanded="false">LISTING&raquo;</a>
                        <ul className='dropdown-menu bg-dark p-0'>
                            <li className='nav-item dropend'>
                                <li><a href='/Yacht' className='nav-link sub justify-content-start  '>YACHT</a></li>
                                <li><a href='/Boat' className='nav-link sub  justify-content-start '>BOAT</a></li>
                            </li>

                        </ul>
                    </li>
                    <li className='nav-item'>
                        <a href='/Eventyacht' className='nav-link p-0 py-3 navbar justify-content-start'> EVENTYACHT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/EventBoat' className='nav-link p-0 py-3 navbar justify-content-start'> EVENTBOAT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Reviewyachtlisting' className='nav-link p-0 py-3 navbar justify-content-start'>REVIEW YACHT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/ReviewBoatlisting' className='nav-link p-0 py-3 navbar justify-content-start'>REVIEW BOAT</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link p-0 py-3 navbar justify-content-start '> SETTING</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar;