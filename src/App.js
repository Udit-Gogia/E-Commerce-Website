import './App.css';
import Navbar from "./comps/Navbar"
import Carousel from "./comps/carousel"
import Seach from "./comps/search"
// import Signup from "./pages/Signup"


function App() {
  return (
    <div className="App">

      <Navbar />
      <Carousel />
      <Seach />
      {/* <Signup /> */}

    </div>
  );
}

export default App;
