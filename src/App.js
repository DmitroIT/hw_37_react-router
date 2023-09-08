import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Users from './pages/Users';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
