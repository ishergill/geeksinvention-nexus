
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="nav-heading">Geeks <span>Invention</span></h1>
                <ul className="nav-links">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/work">WORK</a></li>
                    <li><a href="/technology">TECHNOLOGY</a></li>
                    <li><a href="/services">SERVICES</a></li>
                    <li><a href="/company">COMPANY</a></li>
                    <li><a href="/contacts">CONTACTS</a></li>
                </ul>
                <div className='nav-links2'> 
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g>
</svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
