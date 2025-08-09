
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return(
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/abt" element={<About />}/>
              <Route path="/cont" element={<Contacts />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App
