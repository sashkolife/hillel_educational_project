import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default Header;