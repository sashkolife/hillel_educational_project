import {UserModel} from "../models/models.tsx";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Spinner from "../components/Spinner/Spinner.tsx";
import Card from "../components/Card/Card.tsx";
import {Pages} from "../enums/enums.ts";

const UserProfile = () => {
    const {id} = useParams();
    const [userInfo, setUser] = useState<UserModel>({} as UserModel);

    useEffect(() => {
        const getUserById = async () => {
            try {
                const res: Response = await fetch(`http://vps27605ua.hyperhost.name:9002/res/user${id}.json`);

                if (!res.ok) {
                    throw new Error("Failed fetch");
                }

                const data: UserModel = await res.json();
                setUser(data);
            } catch(err) {
                console.error(err);
            }
        };

        getUserById();
    }, [id]);

    let body: React.JSX.Element;

    if (userInfo.id) {
        body = <Card userInfo={userInfo}/>;
    } else {
        body = <Spinner />;
    }

    return <div>
        <div className="nav">
            <Link className="active" to={Pages.USERS}>Back to users</Link>
        </div>
        <div>
            {body}
        </div>
    </div>;
}

export default UserProfile