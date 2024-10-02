import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Vehicles =()=>{
    const {store,actions}= useContext(Context);
    const params = useParams();

    useEffect(()=>{
        // actions.getvehicles();
        actions.getVehicle(params.id);
        },[])

        console.log(store.vehicle);
        
return(
    <div className="div-bg">
 
    <div className="contenedor-ficha">
        <div className="row">
            <div className="col-4">
                <div className="datos-ficha">
                    <h2>{store.vehicle.name}</h2>
                    <h5>VEHICLE CLASS:   {store.vehicle.vehicle_class}</h5>
                    <h5>MANUFACTURER:   {store.vehicle.manufacturer}</h5>
                    <h5>COST:   {store.vehicle.cost_in_credits}</h5>
                    <h5>LENGTH:   {store.vehicle[length]}</h5>
                    <h5>CREW:   {store.vehicle.crew}</h5>
                    <h5>PASSENGERS:   {store.vehicle.passengers}</h5>
                    
                </div>
            </div >
            <div className="col-8">
                <div className="contenedor-img-ficha"><img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}  /></div>
            </div>
        </div>    
    </div>  
</div> 
       
);



};