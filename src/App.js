import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './Components/Login'
import Landing from './Components/Landing'
import Gitds from './Pages/Gitds/Gitds';
import Create from './Pages/Gitds/Create'
import Update from './Pages/Gitds/Upadte'
import Read from './Pages/Gitds/Read'
import Warehouse from './Pages/Warehouse/Warehouse'
import CreateWar from './Pages/Warehouse/CreateWar'
import ReadWar from './Pages/Warehouse/ReadWar'
import UpdateWar from './Pages/Warehouse/UpadteWar'
import Bank from './Pages/Bank/Bank'
import Createb from './Pages/Bank/Createb'
import Updateb from './Pages/Bank/Upadteb'
import Readb from './Pages/Bank/Readb'
import Bcagent from './Pages/BC Agent/Bcagent';
import Createbc from './Pages/BC Agent/Createbc';
import Updatebc from './Pages/BC Agent/Upadtebc';
import Readbc from './Pages/BC Agent/Readbc';
import Farmer from './Pages/Farmer/Farmer';
import Createf from './Pages/Farmer/Createf';
import Updatef from './Pages/Farmer/Upadtef';
import Readf from './Pages/Farmer/Readf';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/landing' element={<Landing />}/>
          <Route path='/gitds-admin' element={<Gitds />}/>
          <Route path='/gitds/create' element={<Create />}/>
          <Route path='/gitds/update/:id' element={<Update />}/>
          <Route path='/gitds/read/:id' element={<Read />}/>
          <Route path='/warehouse' element={<Warehouse />}/>
          <Route path='/warehouse/create' element={<CreateWar />}/>
          <Route path='/warehouse/update/:id' element={<UpdateWar />}/>
          <Route path='/warehouse/read/:id' element={<ReadWar />}/>
          <Route path='/bank' element={<Bank />}/>
          <Route path='/bank/create' element={<Createb />}/>
          <Route path='/bank/update/:id' element={<Updateb />}/>
          <Route path='/bank/read/:id' element={<Readb />}/>
          <Route path='/bc-agent' element={<Bcagent />}/>
          <Route path='/bc-agent/create' element={<Createbc />}/>
          <Route path='/bc-agent/update/:id' element={<Updatebc />}/>
          <Route path='/bc-agent/read/:id' element={<Readbc />}/>
          <Route path='/farmer' element={<Farmer />}/>
          <Route path='/farmer/create' element={<Createf />}/>
          <Route path='/farmer/update/:id' element={<Updatef />}/>
          <Route path='/farmer/read/:id' element={<Readf />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
