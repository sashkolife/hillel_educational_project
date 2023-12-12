import {UserModel} from "../models/models.ts";
import Spinner from "../components/Spinner/Spinner.tsx";
import useFetch from "../hooks/useFetch.ts";

const Users = () => {
    const {data, isLoading, error}= useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <Spinner/>}
            {error && <h2>{error}</h2>}
            <ul>
                {data && data.map((user: UserModel) => (
                    <li key={user.id}>{user.id}. <b>{user.name}</b> {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users