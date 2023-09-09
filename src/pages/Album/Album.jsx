import { useParams } from "react-router-dom";

const Album = () => {
    const {albumid} = useParams();
    console.log(albumid);
  return (
    <div>Album id: <h2>{albumid}</h2></div>
  )
}

export default Album;