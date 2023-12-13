import { JobSearch } from "./components/UI/JobSearch";
import { Map } from "./components/UI/Map";

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";        
import './App.css';

function App() {
  return (
    <>
      <JobSearch />
      <Map />
    </>
  );
}

export default App;