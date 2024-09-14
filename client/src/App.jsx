import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import Login from './components/Login/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Homepage/>}/>
      <Route path='Login' element= {<Login/>}/>
    </Routes>
  );
}

export default App;
