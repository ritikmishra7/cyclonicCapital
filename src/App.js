import { useState } from 'react';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Invest from './Components/Invest';
import Position from './Components/Position';
import Swap from './Components/Swap';
import Membership from './Components/Membership';
import Staking from './Components/Staking';
import Boosting from './Components/Boosting';
import Modal from './Components/Modal/Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='App relative'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard setShowModal={setShowModal} />}>
          <Route path="/dashboard/invest" element={<Invest setShowModal={setShowModal} />} />
          <Route path="/dashboard/position" element={<Position setShowModal={setShowModal} />} />
          <Route path="/dashboard/swap" element={<Swap setShowModal={setShowModal} />} />
          <Route path="/dashboard/membership" element={<Membership setShowModal={setShowModal} />} />
          <Route path="/dashboard/staking" element={<Staking setShowModal={setShowModal} />} />
          <Route path="/dashboard/boosting" element={<Boosting />} />
          <Route path="*" element={<Invest setShowModal={setShowModal} />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
}

export default App;
