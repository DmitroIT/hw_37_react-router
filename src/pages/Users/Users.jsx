import { useEffect, useState } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                
                if(response.ok === false) {
                    throw new Error("User not found")
                }

                const data = await response.json();
                setUsers(data)
            } catch (error) {
                console.log(error);
            }

        }
        getAllUsers();
    })



    return (
        <div>
            <h1>Users</h1>

            <ul>
                {users.length > 0 && users.map((users) => {
                    return (
                        <li key={users.id}><p>{users.name}</p></li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Users;