import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Albums from './pages/Albums/Albums';
import Album from './pages/Album/Album';
import Photos from './pages/Photos/Photos';
import Users from './pages/Users/Users';
import User from './pages/User/User';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPages/NoPage';



function App() {
  return (
    
      <div className='App'>

        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/albums">Albums</NavLink>
              </li>
              <li>
                <NavLink to="/photos">Photos</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userid" element={<User />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:albumid" element={<Album />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/photos/:photoid" element={<Photos />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>

        <footer>i am footer</footer>
      </div>

    
  );
}

export default App;

