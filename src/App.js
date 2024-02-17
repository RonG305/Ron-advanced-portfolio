import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App font-Inter text-white w-full bg-[#1B262C] ">
      <div className=' w-[80%] m-auto'>
          <Header />
          <Hero />
      </div>

    </div>
  );
}

export default App;
