import {Navigate, useSearchParams} from "react-router-dom";
import {Pages} from "../enums/enums.ts";

const About = () => {
    const [searchParams] = useSearchParams();
    const authName = searchParams.get("isAuth");

    if (!authName) {
        return <Navigate to={Pages.AUTH} />
    }

    return (
        <div>
            <h1>About page</h1>
            <h3>Hello {authName}</h3>
        </div>
    )
}

export default About