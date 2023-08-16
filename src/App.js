
import './App.css';
// import Input from './Components/Input';
// import Table from './Components/Table';
// import DamageInput from './Components/DamageInput';
// import DamageTable from './Components/DamageTable';
// import RoadsInput from './Components/RoadsInput';
// import RoadsTable from './Components/RoadsTable';
import Sidebar from './Components/Sidebar';
import Deaths from './pages/Deaths';
import Injuries from './pages/Injuries';
import DamagedRoads from './pages/DamagedRoads';
import DamagedInfrastructure from './pages/DamagedInfrastructure'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputForm from './Components/InputForm';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path = "/" element = {<InputForm/>}/>
          <Route path='/deaths' element={<Deaths/>} />
          <Route path='/injuries' element={<Injuries />} />
          <Route path='/damagedinfrastructure' element={<DamagedInfrastructure />} />
          <Route path='/damagedroads' element={<DamagedRoads />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;