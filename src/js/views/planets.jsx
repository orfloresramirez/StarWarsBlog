import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Planets =()=>{
    const {store,actions}= useContext(Context);
    const params = useParams();

    useEffect(()=>{
        // actions.getplanets();
        actions.getPlanet(params.id);
        },[])

        console.log(store.planet);
        
return(
    <div className="div-bg">
 
    <div className="contenedor-ficha">
        <div className="row">
            <div className="col-4">
                <div className="datos-ficha">
                    <h2>{store.planet.name}</h2>
                    <h5>DIAMETER:   {store.planet.diameter}</h5>
                    <h5>ROTATION PER.:   {store.planet.rotation_period}</h5>
                    <h5>ORBITAL PER.:   {store.planet.orbital_period}</h5>
                    <h5>GRAVITY:   {store.planet.gravity}</h5>
                    <h5>POPULATION:   {store.planet.population}</h5>
                    <h5>CLIMATE:   {store.planet.climate}</h5>
                    <h5>TERRAIN:   {store.planet.terrain}</h5>
                </div>
            </div >
            <div className="col-8">
                <div className="contenedor-img-ficha"><img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}  /></div>
            </div>
        </div>    
    </div>  
</div> 
       
);



};