
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <ToastContainer></ToastContainer>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
