import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import EquipePage from './EquipePage.jsx';
import BenevolePage from './Formulaire.jsx';
import ScrollToTop from './ScrollTop.jsx';
import EvenementsPage from './EvenementsPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path='/equipePage' element={<EquipePage/>} />
        <Route path='/benevole' element={<BenevolePage />} />
        <Route path='/evenements' element={<EvenementsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;