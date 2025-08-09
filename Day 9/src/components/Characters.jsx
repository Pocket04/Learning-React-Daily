
import Buttons from "./Buttons.jsx";
import CharacterModels from "./CharacterModels.jsx";


function Characters(props){
    const data = props.data;
    const models = [];
    for (const info of data) {
        models.push(info.heroModel);
    }

    return(<div>
        <CharacterModels models ={models}/>
        <Buttons spells={data[1].spells} />
    </div>);

}

export default Characters;