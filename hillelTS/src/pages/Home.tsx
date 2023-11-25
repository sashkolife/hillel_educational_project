import {NavigateFunction, useNavigate} from "react-router-dom";
import {Pages} from "../enums/enums.ts";

const Home = () => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigate(Pages.ABOUT)}>About</button>
        </div>
    )
}

export default Home