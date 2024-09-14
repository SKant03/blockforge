import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import Login from './components/Login/Login'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Homepage/>}/>
      <Route path='Login' element= {<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
