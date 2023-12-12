import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Pages} from "./enums/enums.ts";
import Users from "./pages/Users.tsx";
import Posts from "./pages/Posts.tsx";

function App(): React.JSX.Element {
    return (
        <div>
            <div className="nav">
                <NavLink to={Pages.HOME}>Home</NavLink>
                <NavLink to={Pages.USERS}>Users</NavLink>
                <NavLink to={Pages.POSTS}>Posts</NavLink>
            </div>

            <Routes>
                <Route path={Pages.HOME} element={<Home />} />
                <Route path={Pages.USERS} element={<Users />} />
                <Route path={Pages.POSTS} element={<Posts />} />
            </Routes>
        </div>
    )
}

export default App
