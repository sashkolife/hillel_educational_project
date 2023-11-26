import {NavLink} from "react-router-dom";
import {Pages} from "../../enums/enums.ts";

const Header = () => {

    return (
        <div className="nav">
            <NavLink to={Pages.HOME}>Home</NavLink>
            <NavLink to={Pages.USERS}>Users</NavLink>
            <NavLink to={Pages.ABOUT}>About</NavLink>
        </div>
    )
}

export default Header;