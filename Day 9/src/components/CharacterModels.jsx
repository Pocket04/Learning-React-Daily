

function CharacterModels(props) {
    const models = props.models;


    return(<div>
        {models.map((model, index) => <img key={index} src={model} />)}
    </div>)
}

export default CharacterModels;