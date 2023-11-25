import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import {Pages} from "../enums/enums.ts";
import {useState} from "react";

const Auth = () => {
    const [authName, setAuthName] = useState<string>("");

    const navigate: NavigateFunction = useNavigate();

    const handlerNavigateClick = () => {
        const name: string = authName.trim();
        if ( name.length > 0 ) {
            navigate(Pages.ABOUT+"?isAuth="+name);
        }
    };

    return (
        <div>
            <div className="nav"><Link className="active" to={Pages.HOME}>Back to home page</Link></div>
            <h1>About page needs to authorize</h1>
            Enter your name, please:<input type='text' onChange={e => setAuthName(e.target.value) }/>
            <button onClick={handlerNavigateClick}>Enter to About page</button>
        </div>
    )
}

export default Auth