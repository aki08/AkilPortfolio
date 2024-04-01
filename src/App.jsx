import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import { Expereince } from './components/Expereince/Expereince';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Expereince />
  </div>;
}

export default App
