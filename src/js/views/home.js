
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import React, { useState, useEffect, useContext,useParams } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";





export const Home = () => {
	const {store,actions}= useContext(Context);
	// const params = useParams();
    useEffect(()=>{
        actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
        },[])

	return(

		<div className="background">
			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel text-light">Characters</h2>	
					<div className="scrolling-wrapper">
						{store.listCharacters.map((item)=>(<div className="card mx-1 border-0" key={item.uid} id={item.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top img-fluid border-0" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
									<div className="d-flex justify-content-between"><Link to={"/characters/"+item.uid}><a className="btn btn-light btn-details" onClick={()=> actions.getCharacter(item.uid)} >Details</a></Link>
									<a className="btn btn-light text-end" onClick={()=>actions.saveToFavoritePeople(item.uid)}>⭐</a></div>
							</div>
						</div>))}
						{/* <div className="card mx-1 bg-black"><img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen 1"/><div className="card-body">
						<a className="btn btn-light text-end" >...</a></div>
						</div> */}
					</div>
				</div>

			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel text-light">Vehicles</h2>	
					<div className="scrolling-wrapper">
						{store.listVehicles.map((item)=>(<div className="card mx-1 border-0" key={item.uid} id={item.uid}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top img-fluid" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
								<div className="d-flex justify-content-between"><Link to={"/vehicles/"+item.uid}><a className="btn btn-light btn-details" onClick={()=> actions.getVehicle(item.uid)}>Details</a></Link>
								<a className="btn btn-light text-end" onClick={()=>actions.saveToFavoriteVehicle(item.uid)} >⭐</a></div>
							</div>
						</div>))}
					</div>
			</div>	

			<div className="container" id="contenedor-characters">
			<h2 className="title-carousel text-light">Planets</h2>	
					<div className="scrolling-wrapper">
						{store.listPlanets.map((item)=>(<div className="card mx-1 border-0" key={item.uid} id={item.uid}>
						<img src={item.uid==1 ? "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg" : `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} 
						className="card-img-top img-fluid" alt="Imagen 1"/>
							<div className="card-body">
								<h5 className="card-title text-center">{item.name}</h5>
								<div className="d-flex justify-content-between"><Link to={"/planets/"+item.uid}><a className="btn btn-light btn-details" onClick={()=> actions.getPlanet(item.uid)}>Details</a></Link>
								<a className="btn btn-light text-end" onClick={()=>actions.saveToFavoritePlanet(item.uid)}>⭐</a></div>
							</div>
						</div>))}
					</div>
			</div> 
		</div>	
	);		
};
