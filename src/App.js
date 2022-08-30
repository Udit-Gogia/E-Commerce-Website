import './App.css';
import Navbar from "./comps/Navbar"
import Carousel from "./comps/carousel"
import Seach from "./comps/search"
// import Auth from './pages/auth'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Seach />
    </div>
  );
}

export default App;
