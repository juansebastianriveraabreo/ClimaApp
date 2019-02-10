const argv = require('./config/yargs');

const axios = require('axios');

const clima = require('./clima/clima');

//console.log(argv);

/*let encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`)
.then(resp=>{
	console.log(resp);
})
.catch(e => console.log("ERROR!!!",e));*/

axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=2f190f9aa71a840ac4d7047636c21aec`)
.then(resp => {
	
	console.log(JSON.stringify(resp.data.main.temp,undefined,2));

})

clima.getClima(35,139)
	.then(resp => console.log('La temperatura es de: ',resp))
	.catch(e => console.log('OCURRIO UN ERROR',e));
