import MainPage from "./pages/MainPage";

import { Navbar } from "./components/Navbar";

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";        
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;