
import {CountContext} from "./context/CountContext.jsx";
import Counter from "./components/Counter.jsx";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function add(){
        setCount(c => c+1)
    }
    function subtract(){
        setCount(c => c-1)
    }
    function reset(){
        setCount(0)
    }

  return(
      <CountContext.Provider value={{count, add, subtract, reset}}>
            <Counter />
      </CountContext.Provider>
  );
}

export default App
