import {useEffect} from "react";

const Header = () => {

    useEffect(() => {

        const handleWindowClick = () => {
            console.log("Test click handler");
        };

        window.addEventListener("click", handleWindowClick);

        return () => {
            window.removeEventListener("click", handleWindowClick);
        }
    }, []);

    return <div>
        <h1>All students list header</h1>
        <hr/>
    </div>
}

export default Header;