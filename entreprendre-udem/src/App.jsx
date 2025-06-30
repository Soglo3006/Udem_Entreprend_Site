import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import EquipePage from './EquipePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/equipePage' element={<EquipePage/>} />
      </Routes>
    </Router>
  );
}

export default App;