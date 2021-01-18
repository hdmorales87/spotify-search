var axios = require('axios');

const client_id = '9ec6107c0f5c4f7d8f8027c4f0412fb2'; // Your client id
const client_secret = '3acbc39a369e4fafb6e477a9630d5273'; // Your secret
let token = '';

//creamos el ruteo de la aplicación
module.exports = function(app) {
	app.get("/buscar/:cancion&:desde&:hasta&:mode", function(req, res) {
		//obtener parametro que viene por GET		
		let cancion = req.params.cancion;
		let desde = req.params.desde;
		let hasta = req.params.hasta;	
		let mode  =	req.params.mode;				
		let strSearch = '&limit=50&offset=0';
		if(mode=='rows'){
			strSearch = '&limit='+hasta+'&offset='+desde;
		}
		let url = 'https://api.spotify.com/v1/search?q='+cancion+'&type=track'+strSearch;
		//Llamar a la API de spotify
		const _getTrack = async () => {
			try {
				//obtener el token
				let response = await _getSpotifyToken();  	
			  	if(response && response.data){
			  		token = response.data.access_token;
			  		return await axios({
					  	url: url,
				        method: 'get',			        
				        headers: {
				          'Accept':'application/json',
				          'Content-Type': 'application/json',
				          'Authorization': 'Bearer '+token
				        }			        
					});
			  	} 
			  	else{
			  		res.status(200).json({
						"status"  : "error",
						"details" : "No se ha logrado obtener el token"
					});
			  	}
				
			} catch (error) {
				res.status(200).json({
					"status"  : "error",
					"details" : error
				});
			}
		}		
		const getTrack = async () => {
		  	const response = await _getTrack();  	
		  	if(response && response.data){		  		
		  		res.status(200).json(response.data.tracks.items);
		  	}  		
		}
		getTrack();
	});
}

//Llamar a la API de autenticación
const _getSpotifyToken = async () => {
	try {
		return await axios({
		  	url: 'https://accounts.spotify.com/api/token',
	        method: 'post',
	        params: {
	          grant_type: 'client_credentials'
	        },
	        headers: {
	          'Accept':'application/json',
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        auth: {
	          username: client_id,
	          password: client_secret
	        }
		});
	} catch (error) {
		console.error(error);
	}
}