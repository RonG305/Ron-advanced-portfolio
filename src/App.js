
import './App.css';
import About from './components/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Freelance from './components/Freelance/Freelance';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  const styles = {
    appContainer: "App font-Inter text-white w-full bg-slate-950 text-sm",
    appSubContainer: "lg:w-[60%] md:w-[70%] w-[90%] m-auto"
  };
  


  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
      <Header />
      <div className={styles.appSubContainer}>
      
        <Hero />
        <TechStack />
        <About />
        <Resume />
        <Services/>
        <Projects />
      </div>
      <Freelance />
      <div className={styles.appSubContainer}>
        <Contact />
        <Footer />
      </div>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
