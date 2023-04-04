import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cartoons from './pages/Cartoons';
import Favourites from './pages/Favorites';
import Serials from './pages/Serials';
import Films from './pages/Films';

import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="/cartoons" element={<Cartoons />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
