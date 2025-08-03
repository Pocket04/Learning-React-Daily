import {useState, useEffect} from 'react';
import '../styles/CountComponent.css'

function CountComponent() {

    const [count, setCount] = useState(0)

    function incrementState() {
        setCount(p => p + 1);
    }
    function decrementState() {
        setCount(p => p - 1);
    }
    function resetState(){
        setCount(0);
    }


    return(
        <div className="count-container">
            <h1>Counter App</h1>
            <p>{count}</p>
            <div className="button-container">
                <button onClick={() => incrementState()}>+</button>
                <button onClick={() => resetState()}>0</button>
                <button onClick={() => decrementState()}>-</button>
            </div>
        </div>

    );
}

export default CountComponent;