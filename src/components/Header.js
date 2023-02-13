import eli from '../assets/images/Ellipse.png';
const Header = () => {
    return (
        <div>
            <nav className="navbar bg-white p-tb-25 p-lr-100">
                <div className="container-fliud">
                    <a className="navbar-brand" href="#">
                    <img src={eli} alt="" width="53" height="53"/>
                    <span className='text-blue fs-16 f-w-700 p-lr-15'>HomeTech</span>
                    </a>
                    {/* <div className='float-end'>
                        <a href="#" >About Us</a>
                    </div> */}
                    
                </div>
            </nav>
        </div>
    );
}

export default Header;
