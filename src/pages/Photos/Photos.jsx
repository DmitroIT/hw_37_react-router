import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Photos = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getAllPhotos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");

                if (!response.ok) {
                    throw new Error("Photo not found")
                }
                const data = await response.json()
                setPhotos(data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllPhotos()
    }, [])

    return (
        <div>
            <h1>Photos</h1>
            <ul>
                {photos.map(photos => {
                    return (
                        <div key={photos.id}>
                            <Link to={`/photos/${photos.id}`}>
                                <img src={photos.thumbnailUrl} alt={photos.title} />
                            </Link>
                        </div>
                    )
                } )}
            </ul>

        </div>
    )
}

export default Photos;