import React from 'react';

export default function Group(props){
    return(
        <ul className="list-group list-group-flush">
            {props.generes.map((gener) =>
            <button key={gener}  className="btn btn-outline-dark" onClick={ ()=>{props.getGener(gener)}} >
            <li 
                className={props.currentGener===gener?"list-group-item active":"list-group-item"}>
                {gener}</li></button>
            )}
        </ul>
    )
}