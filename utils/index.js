exports.calculate = (datos) => {
	var v_mapa = null;
	console.log("Datos: ");
	//console.log(datos);
	var pruebaDatos = {
				max : 8,
				data : [
				]
			}
	for (var i = 0; i < datos.length; i++){
		console.log("Latitud: " + datos[i].place.bounding_box.coordinates[0][1][0] + "	, Longitud: " + datos[i].place.bounding_box.coordinates[0][1][1]);
		var lat1 = datos[i].place.bounding_box.coordinates[0][1][0];
		var lat2 = datos[i].place.bounding_box.coordinates[0][2][0];
		//console.log("lat1: " + lat1 + "lat2" + lat2);
		//for (var j = 0; j < 4; j++){
			//console.log(datos[i].place.bounding_box.coordinates[0][j]);
			var longitud = (datos[i].place.bounding_box.coordinates[0][1][0] - datos[i].place.bounding_box.coordinates[0][2][0]);
			//console.log("Latitud: " + latitud);
			var auxLongitud = longitud / 2;
			var longitudMedia = datos[i].place.bounding_box.coordinates[0][2][0] + auxLongitud;

			var latitud = datos[i].place.bounding_box.coordinates[0][1][1] - datos[i].place.bounding_box.coordinates[0][0][1];
			var auxLatitud =  latitud / 2;
			var latitudMedia = datos[i].place.bounding_box.coordinates[0][0][1] + auxLatitud;
			console.log("Punto medio: ");
			console.log("Latitud: " + latitudMedia + "	, Longitud: " + longitudMedia);
			pruebaDatos.data[i] = {
									lat : latitudMedia,
									lng : longitudMedia,
									count : 10
								};

			console.log("pruebaDatos: " + pruebaDatos.data[i].lat);

			return pruebaDatos;
		//}
		//console.log("-----------");
		//console.log(datos[i].place.bounding_box.coordinates[0]);
	}
}
