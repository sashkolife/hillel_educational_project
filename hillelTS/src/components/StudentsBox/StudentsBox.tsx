import {useEffect, useState} from "react";
import {UserModel} from "../../models/models.tsx";
import Card from "../Card/Card.tsx";
import Spinner from "../Spinner/Spinner.tsx";

const StudentsBox = () => {
    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {

        const getUsers = async () => {
            try {
                const res: Response = await fetch("http://vps27605ua.hyperhost.name:9002/res/data.json");

                if (!res.ok) {
                    throw new Error("Failed fetch");
                }

                const data: UserModel[] = await res.json();
                setUsers(data);
            } catch(err) {
                console.error(err);
            }

        };

        getUsers();

    }, []);

    return <div>
        {users.length == 0 && <Spinner/>}
        {users.length > 0 && users.map((user: UserModel) => (
            <Card userInfo={user} key={user.id}/>
        ))}
    </div>
}

export default StudentsBox;