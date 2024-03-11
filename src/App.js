import './App.css';
import LegalAid from './Components/LegalAid';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading'; // Import the Loading component

function App() {
  return (
    <div className="App">
      <Loading /> {/* Render the Loading component */}
      <Navbar />
      <LegalAid />
    </div>
  );
}

export default App;
