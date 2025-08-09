


function Buttons(props){
    const data = props.spells;


    return(
        <div>
            {data.map((spell) => <p key={spell.id}>{spell.spellName}</p>)}
        </div>
    );

}

export default Buttons;