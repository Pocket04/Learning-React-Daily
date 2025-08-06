import './App.css'
import Correct from "./components/Correct.jsx";
import Incorrect from "./components/Incorrect.jsx";



function App() {

    let x = false

  return(
      <>
          {x && <Correct />}{/* Will render only if the condition before && is true*/}
          {x ? alert("Correct") : <Incorrect />}{/* Will render left side of the column if x is true, and right side, if x is false*/}
      </>
  );
}

export default App
