import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Home_Page/Home';
import LoginCard from './Home_Page/logincard';
import Registor from './Pages/Registor_page/Registor';
import Admin from './Pages/Admin_page/Admin';
import Staff from './Pages/staff_page/staff';
import AdminBody from './Pages/Admin_page/Admin-Comp/AdminBody';
import RegitorBody from './Pages/Registor_page/Registor-comp/RegitorBody';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      
        <Route path="login" element={<LoginCard />} />
      </Route>
      
      <Route path='/Registor' element={<Registor />}>
         <Route path='' element={<RegitorBody/>}/>
        
      </Route>

      <Route path='/Admin' element={<Admin />}>
        <Route path='' element={<AdminBody/>}/>
      </Route>
      <Route path='/staff' element={<Staff/>}>

      </Route>
    </Routes>
  );
}

export default App;
