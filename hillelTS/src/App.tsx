import React, {useState} from "react";
import StudentsBox from "./components/StudentsBox/StudentsBox.tsx";
import Header from "./components/Header/Header.tsx";

function App(): React.JSX.Element {

    const [isVisible, toggleHeaderVisibility] = useState(true);

    return (
        <div>
            <button onClick={() => toggleHeaderVisibility(!isVisible)}>Toggle visibility</button>
            {isVisible && <Header/>}
            <StudentsBox/>
        </div>
    )
}

export default App
