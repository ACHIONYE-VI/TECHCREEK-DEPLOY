import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Connect from './components/Connect'
import Home from './components/Home'
import Create from './components/Create'
import Membership from './components/Membership'

 




function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Router>
          <Navbar />
      
          <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/Create" element={<Create />} />
          <Route path="/Connect" element={ <Connect />}/>
          <Route path="/Membership" element={<Membership />} />
        
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
