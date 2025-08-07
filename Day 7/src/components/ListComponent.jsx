

function ListComponent(){

    const x = [{"age": 10, "name" : "random"}, {"age": 20, "name" : "asdasdasd"}]

    return(
        <div>
            {x.map((item, index) => <div key={index}>{item.name}, {item.age}</div>)}
        </div>
    )
}

export default ListComponent;