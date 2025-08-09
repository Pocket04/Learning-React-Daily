


function Counter(props){
    const count = props.count;
    const func = props.func;

    return(
        <div>
            <p>{count}</p>
            <button onClick={func}>Increase</button>
        </div>

    );
}

export default Counter;