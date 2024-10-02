import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Characters =()=>{
    const {store,actions}= useContext(Context);
    const params = useParams();

    useEffect(()=>{
        // actions.getCharacters();
        actions.getCharacter(params.id);
        },[])

        console.log(store.character);
        
return(
 <div className="div-bg">
 
        <div className="contenedor-ficha">
            <div className="row">
                <div className="col-4">
                    <div className="datos-ficha">
                        <h2>{store.character.name}</h2>
                        <h5>BIRTH YEAR:   {store.character.birth_year}</h5>
                        <h5>HEIGHT:   {store.character.height}</h5>
                        <h5>MASA:   {store.character.mass}</h5>
                        <h5>COLOR:   {store.character.skin_color}</h5>
                        <h5>EYE COLOR:   {store.character.eye_color}</h5>
                        <h5>GENDER:   {store.character.gender}</h5>
                    </div>
                </div >
                <div className="col-8">
                    <div className="contenedor-img-ficha"><img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}  /></div>
                </div>
            </div>    
        </div>  
  </div>      
);



};