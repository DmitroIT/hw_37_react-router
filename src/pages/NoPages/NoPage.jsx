import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div>
            <h1>404</h1>

            <Link to="/">Main page</Link>
        </div>
    )
}

export default NoPage;