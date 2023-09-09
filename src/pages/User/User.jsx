import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} = useParams();
    console.log(userid);

    return (
        <div>User id: <h2>{userid}</h2></div>
    )
}

export default User
