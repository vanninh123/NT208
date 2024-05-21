import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import LogIn from './components/LogIn';
import HeaderAfterLogIn from './components/HeaderAfterLogIn';
import Input from './components/Input';
import SnapshotEntity from './components/SnapshotEntity';

function App() {


  return (
    <div className=''>
      <HeaderAfterLogIn />
      <Routes>
        <Route path='/' element={<Input />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/:id' element={<SnapshotEntity />} />
      </Routes>
    </div>
  );
}

export default App;
