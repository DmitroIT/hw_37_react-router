import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const getAllAlbums = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");

                if (response.ok === false) {
                    throw new Error("Albums not found");
                }

                const data = await response.json();


                setAlbums(data)
            } catch (error) {
                console.log(error);
            }

        }
        getAllAlbums();
    }, [])



    return (
        <div>
            <h1>Albums</h1>

            {albums.map((albums) => {
                return (
                    <div key={albums.id}>
                        <span>{albums.title}</span>
                        <Link to={`${albums.id}`}><button>albums</button> </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Albums;

