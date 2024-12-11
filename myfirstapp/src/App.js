import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Register from './components/pages/Register'
import Services from './components/pages/Services';
import Error from './components/pages/Error';
import Update from './components/pages/Update'
import Delete from './components/pages/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/show' element={<Services/>}></Route>
          <Route path='/update/:userId' element={<Update/>}></Route>
          <Route path='/delete/:userId' element={<Delete/>}></Route>
          <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
