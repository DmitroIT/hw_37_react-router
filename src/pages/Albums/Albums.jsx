import { useEffect } from "react";

const Albums = () => {

    useEffect (() => {
        const getAllAlbums = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            const data = await response.json();
            console.log('data: ', data);

        }
        getAllAlbums();
    })

    

    return (
        <div>
            <h1>Albums</h1>
        </div>
    )
}

export default Albums
