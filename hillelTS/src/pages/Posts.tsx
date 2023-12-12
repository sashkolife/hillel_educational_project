import {PostModel} from "../models/models.ts";
import Spinner from "../components/Spinner/Spinner.tsx";
import useFetch from "../hooks/useFetch.ts";

const Users = () => {
    const {data, isLoading, error}= useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            <h1>Posts</h1>
            {isLoading && <Spinner/>}
            {error && <h2>{error}</h2>}
            <ul>
                {data && data.map((post: PostModel) => (
                    <li key={post.id}>{post.id}. <b>{post.title}</b> {post.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users