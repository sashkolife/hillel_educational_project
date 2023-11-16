import React, {useState} from "react";

function App(): React.JSX.Element {

    const [count, setCount] = useState(0);

    const handleMinusClick = () => {
        setCount(count-1);
    };

    const handlePlusClick = () => {
        setCount(count+1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleMinusClick}>Decrement</button>
            <button onClick={handlePlusClick}>Increment</button>
        </div>
    )
}

export default App
