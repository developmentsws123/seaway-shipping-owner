import './Footer.css'
function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row justify-content-between  bg-dark">
                <div className="col-xl-6 col-lg-7 col-12  fotext text-light text-lg-start text-center  py-sm-2  py-1 px-sm-1 px-1 fs-5">Copyright &copy; 2022 Seaway Traveling.All Rights Reserved</div>
                <div className="col-xl-4 col-lg-5 col-12 text-sm-center text-left link">
                    <ul className='nav nav-tabs justify-content-center' >
                        <li className='nav-item'>
                            <a href='/Home' className='nav-link fs-5 text-light'>Home</a>
                        </li>
                   
                        <li className='nav-item'>
                            <a href='#' className='nav-link fs-5  text-light'><i class="bi bi-facebook"></i></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link fs-5 text-light'><i class="bi bi-instagram"></i></a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link fs-5 text-light'><i class="bi bi-twitter"></i></a>
                        </li>


                    </ul></div>
            </div>
        </div>


    )
}
export default Footer;