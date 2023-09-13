/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const User = () => {
    const { userid } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);

                if (response.ok === false) {
                    throw new Error("User not found")
                }

                const data = await response.json();

                setUser(data)
            } catch (error) {
                console.log(error);
            }

        }
        getUser();
    }, [userid])



    return (
        <>
            <button onClick={goBack}>go back</button>
            <div>User name:
                <h2>{user.name}</h2>

                <button>users albums</button>
            </div>
        </>
    )
}

export default User;
