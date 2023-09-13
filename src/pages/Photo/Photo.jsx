import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Photo = () => {
    const {photoid} = useParams()
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        const getPhoto = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoid}`);

                if (!response.ok) {
                    throw new Error("Photo not found")
                }
                const data = await response.json()
                setPhoto(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPhoto()
    }, [photoid])
  return (
    <div>Photo id:
        <h2>{photo.id}</h2>
        
    </div>
    
  )
}

export default Photo