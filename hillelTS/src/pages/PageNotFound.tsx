import {Link} from "react-router-dom";
import {Pages} from "../enums/enums.ts";

const PageNotFound = () => {
    return (
        <div>
            <div className="nav"><Link className="active" to={Pages.HOME}>Go to home page</Link></div>
            <h1>Page not found</h1>
        </div>
    )
}

export default PageNotFound