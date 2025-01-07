import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signin from './pages/Signin';
import Home from './pages/Home'
import SearchId from './pages/SearchId';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/searchid' element={<SearchId />}></Route>
      </Routes>
    </div>
  );
}

export default App;
