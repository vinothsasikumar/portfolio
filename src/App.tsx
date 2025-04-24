import './App.css'

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';


const App = () => {
  return (
    <>
      <div className='w-full h-full bg-dark-blue overflow-x-hidden overflow-y-auto'>
        <Header />
        <main className="w-full flex justify-center items-center">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;