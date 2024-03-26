
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import TechStack from './components/TechStack/TechStack';
const App = () => {


  const styles = {
    appContainer: "App font-Inter text-white w-full bg-slate-950",
    appSubContainer: "lg:w-[60%] md:w-[70%]   w-[90%] m-auto"
  }
  return (
    <div className={styles.appContainer}>
      <div className={styles.appSubContainer}>
          <Header />
          <Hero />
          <TechStack />
          <About />
          <Resume />
          <Services />
      </div>

    </div>
  );
}

export default App;
