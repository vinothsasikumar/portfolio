import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css'

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';


const App = () => {
  return (
    <>
      <Router>
        <div className='w-full h-full bg-dark-blue overflow-x-hidden overflow-y-auto'>
          <Header />
          <main className="w-full flex justify-center items-center">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />

              <Route path='/home' element={<Home />} />
              <Route path='/blogs' element={<Blog />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;