import {useEffect, useState} from "react";
import {UserModelShort} from "../models/models.ts";
import Spinner from "../components/Spinner/Spinner.tsx";
import {Link} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<UserModelShort[]>([]);

    useEffect(() => {

        const getUsers = async () => {
            try {
                const res: Response = await fetch("http://vps27605ua.hyperhost.name:9002/res/data.json");

                if (!res.ok) {
                    throw new Error("Failed fetch");
                }

                const data: UserModelShort[] = await res.json();
                setUsers(data);
            } catch(err) {
                console.error(err);
            }

        };

        getUsers();
        console.log("get users");

    }, []);


    return (
        <div>
            {users.length == 0 && <Spinner/>}
            <ul>
                {users.length > 0 && users.map((user: UserModelShort) => (
                    <li key={user.id}>{user.id} <Link to={`${user.id}`}>{user.fullName}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Users