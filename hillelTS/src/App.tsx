import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Users from "./pages/Users.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import About from "./pages/About.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import Layout from "./components/Layout/Layout.tsx";
import {Pages} from "./enums/enums.ts";
import Auth from "./pages/Auth.tsx";

function App(): React.JSX.Element {

    return (
        <>
            <div>
                <Routes>
                    <Route path={Pages.HOME} element={<Layout />}>
                        <Route path={Pages.HOME} element={<Home />}/>
                        <Route path={Pages.USERS} element={<Users />}/>
                        <Route path={Pages.ABOUT} element={<About />}/>
                    </Route>

                    <Route path={Pages.USER_PROFILE} element={<UserProfile />}/>

                    <Route path={Pages.AUTH} element={<Auth />}/>

                    <Route path={Pages.PAGE_NOT_FOUND} element={<PageNotFound />}/>
                </Routes>

            </div>
        </>
    )
}

export default App
