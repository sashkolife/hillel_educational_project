import {PhotoModel} from "../models/models.ts";
import useFetch from "../hooks/useFetch.ts";

const Home = () => {
    const {data, isLoading, error, refetch} = useFetch("https://jsonplaceholder.typicode.com/photos");

    return (
        <div>
            <h1>Photos</h1>
            <button onClick={refetch}>Reload</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h2>{error}</h2>}
            <ul>
                {data && data.map((photo: PhotoModel) => (
                    <li key={photo.id}>{photo.id}. {photo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home