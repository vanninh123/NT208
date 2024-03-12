import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import LogIn from './components/LogIn';
import Header from './components/Header';
import Input from './components/InputBeforeLogIn';

function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Input />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
