import './App.css';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
