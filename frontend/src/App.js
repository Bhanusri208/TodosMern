import './App.css';
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './pages/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';

const App = () => {

  return (
    <div className="App">
     <Header />
      <Routes>       
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;