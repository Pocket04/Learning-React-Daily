import {useState} from "react";
import Counter from "./components/Counter.jsx";

function App() {
    const [count, setCount] = useState(0);


    function increaseCount(){
        setCount(c => c + 1);
    }
  return(
      <>
        <Counter count={count} func={increaseCount}/>
        <Counter count={count} func={increaseCount}/>
      </>
  );
}

export default App
