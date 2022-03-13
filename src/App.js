import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
    </Route>
    <Route path ='/register' element = {<Register />} />
    <Route path ='/login' element = {<Login />} />
    <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/profile' element={<Profile/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
