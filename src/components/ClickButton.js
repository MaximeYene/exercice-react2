import React, {useState} from "react";

const MonBouton=()=>{
    const[allume,setAllume]=useState(false);
    const [couleur,setCouleur]=useState("orange");
const handleClick=()=>{
    if(allume){
        setAllume(false);
        setCouleur("orange");
    }else{
        setAllume(true);
        setCouleur("black");
    }
}
return (
    <div>
        <button onClick={handleClick}>
            {allume?"Allumez la lumiere":"Eteignez la lumiere"}
        </button>
        <div style={{
            backgroundColor:couleur,
            width: "130px",
            height:"100px"
        }}></div>
    </div>
)

}

export default MonBouton