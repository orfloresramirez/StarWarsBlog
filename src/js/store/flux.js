
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			listCharacters: [],
			character: [],
			listPlanets: [],
			planet: [],
			listVehicles: [],
			vehicle: [],
			favorites: [],
			more: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({listCharacters: data.results}))
					.catch(err => console.error(err))
					
			},

			// getNext: (more) => {
			// 	fetch("https://www.swapi.tech/api/people/")
			// 		.then(res => res.json())
			// 		.then(data => setStore({listCharacters: data.more}),
			// 					setStore({listCharacters: data.results}))
			// 		.catch(err => console.error(err))
				
			// },


			getCharacter: async (id) => {
				const store = getStore();
				try{
					let response = await fetch("https://www.swapi.tech/api/people/"+id)
					let data = await response.json()
					setStore({character: data.result.properties})
					// store.character = data.result.properties;
					console.log(store.character.name);					
				}				
					catch (error){
						console.log(error);
						return
					}			
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({listPlanets: data.results}))
					.catch(err => console.error(err))
				
			},

			getPlanet: async (id) => {
				const store = getStore();
				try{
					let response = await fetch("https://www.swapi.tech/api/planets/"+id)
					let data = await response.json()
					setStore({planet: data.result.properties})
					// store.character = data.result.properties;
					console.log(store.planet.name);
				}
					catch (error){
						console.log(error);
						return
					}
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({listVehicles: data.results}))
					.catch(err => console.error(err))
				
			},

			getVehicle: async (id) => {
				const store = getStore();
				try{
					let response = await fetch("https://www.swapi.tech/api/vehicles/"+id)
					let data = await response.json()
					setStore({vehicle: data.result.properties})
					// store.character = data.result.properties;
					console.log(store.vehicle.name);
				}
					catch (error){
						console.log(error);
						return
					}
			},

			deleteFavorite: (index) => {
				const store = getStore();
        
				const newlista = store.favorites.filter((item,indexdelete)=>indexdelete!==index);
				// setStore({ listaContactos: newlista });
				// console.log(newlista);
				setStore({ favorites: newlista });
				console.log(newlista);
				
				
			},    


			saveToFavoritePeople: (uid) =>{
				const store = getStore();
				setStore({favorites: [...store.favorites,store.listCharacters.find((item)=>item.uid ==uid)]})
				// console.log(store.favorites, typeof store.favorites);
			},

			saveToFavoriteVehicle: (uid) =>{
				const store = getStore();
				setStore({favorites: [...store.favorites,store.listVehicles.find((item)=>item.uid ==uid)]})
				console.log(store.favorites, typeof store.favorites);
			},

			saveToFavoritePlanet: (uid) =>{
				const store = getStore();
				setStore({favorites: [...store.favorites,store.listPlanets.find((item)=>item.uid ==uid)]})
				console.log(store.favorites, typeof store.favorites);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
