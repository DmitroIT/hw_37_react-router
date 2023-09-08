import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos">Photos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/albums">Albums</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;