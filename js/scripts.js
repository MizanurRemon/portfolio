$( document ).ready(function() {
 	//initialize();
});

function initialize(){

	//var map = L.map('map').setView([51.505, -0.09], 13);

	var nexrad = L.tileLayer.wms("http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx", {
    	format: 'image/png',
    	transparent: true,
    	title: "CUZK Ortofoto",
      	layer: "GR_ORTFOTORGB",
	    version: "1.3.0",
	});
/*	// add a marker in the given location, attach some popup content to it and open the popup
	L.marker([51.5, -0.09]).addTo(map)
	.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
	.openPopup();

*/
}

