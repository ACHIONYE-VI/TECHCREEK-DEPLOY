import { Link } from "react-router-dom";
import Logo from "./assets/images/logo-blue.png";
import NotificationIcon from './assets/images/ic_notification.svg';
import "./Styles/Navbar.scss"

const Navbar = () => {
    return (
        <div className="nav_bar">
            <nav>
                <div className="logo">
                    <Link to="/" className="logo_link">
                        <img src={Logo} alt="" />
     
                    </Link>  

                </div>
                <ul>
                    <li>
                       <Link to= '/'> Home</Link>
                    </li>
                    <li>
                        <Link to="/Learn">Learn</Link>
                    </li>
                    
                    <li>
                        <Link to="/Create">Create</Link>
                    </li>


                    <li>
                        <Link to="/Connect">Connect</Link>
                    </li>


                    <li>
                        <Link to="/Membership">Join The Creek</Link>
                    </li>
                </ul>

                <div className="notification_container">
                    <div className="latest_info">
                        <span>Ongoing Application</span>
                    </div>
                    <div className="notification_icon">
                       <img src={NotificationIcon} alt="" />
                    </div>

                </div>
       
            </nav>
        </div>
    );
};
 
export default Navbar;