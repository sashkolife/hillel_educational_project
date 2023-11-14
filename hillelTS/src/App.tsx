import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {UserModel} from "./models/models.tsx";
import Card from "./components/Card/Card.tsx";
import {students} from "./data/data.tsx";

function App(): React.JSX.Element {
    return (
        <div>
            {students.map((student:UserModel) => (
                <Card userInfo={student} key={uuidv4()}/>
            ))}
        </div>
    )
}

export default App
