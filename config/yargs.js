const argv = require('yargs').options({
	direccion:{
		alias : 'd',
		desc : 'Lugar a buscar',
		demand : true
	}
}).argv;

module.exports = {
	argv
}