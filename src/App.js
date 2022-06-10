
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './components/ProjectDetails';
import Blog from './components/Blog';
import NavItem from './components/NavItem';

function App() {
  return (
   <>
   <ToastContainer></ToastContainer>
   {/* <Navbar/> */}
   <NavItem></NavItem>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/details/:id' element={<ProjectDetails/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='*' element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
