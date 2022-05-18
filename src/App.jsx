import './App.scss';
import Portfolio from './components/portfolio/portfolio';

const App = () => {
  return (
    <div className='w-full h-full flex justify-center'>
      <video autoPlay loop muted className='w-full h-full absolute -z-50'>
        <source src={require('./assets/videos/programming_bg_keys.mov')} type='video/mp4' />
        Your browser does not support the video.
      </video>
      <div className='h-screen z-0 w-10/12 md:w-11/12 lg:w-11/12 opacity-95'>
        <div className='bg-primary-white rounded mt-10 md:mt-20 lg:mt-20 pb-32 h-screen overflow-x-hidden overflow-y-auto'>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
