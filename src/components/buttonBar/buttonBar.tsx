import React, {Component} from "react";
export function butoonBar(type:any, name:any) {

    var src = '../../images/${type}/${name}.svg';

    return (
        <button>
            <img src={src} alt={name}/>
            <p>{name}</p>
        </button>
    );
}