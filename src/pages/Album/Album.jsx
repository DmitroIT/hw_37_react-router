import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Album = () => {
  const { albumid } = useParams();

  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumid}`);

        if (response.ok === false) {
          throw new Error("Albums not found");
        }

        const data = await response.json();

        setAlbum(data)
      } catch (error) {
        console.log(error);
      }

    }
    getAlbum();
  }, []);

  return (
    <div>Album title:
      <h2>{album.title}</h2>
    </div>
  )
}

export default Album;