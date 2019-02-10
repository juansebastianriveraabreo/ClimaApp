const axios = require('axios');
console.log('entro');

const getClima = async (lat,lon) => {
	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2f190f9aa71a840ac4d7047636c21aec`)
	return resp.data.main.temp;
}

module.exports = {
	getClima
}