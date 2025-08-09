import {useContext} from "react";
import {CountContext} from "../context/CountContext.jsx";


function Counter() {
    const {count, add, subtract, reset} = useContext(CountContext)

    return(
        <div>
            <p>{count}</p>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={reset}>0</button>
        </div>
    );
}

export default Counter;