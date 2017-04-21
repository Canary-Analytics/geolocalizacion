$(document).ready(() => {

    $.get('/datos', {}, (data) => {
        console.log(data)

        var v_latitud = 28.50891;
        var v_longitud = -16.33778;
        var v_zoom = 5;
        var cfg = {
            // radius should be small ONLY if scaleRadius is true (or small radius is intended)
            // if scaleRadius is false it will be the constant radius used in pixels
            "radius": 2,
            "maxOpacity": .8,
            // scales the radius based on map zoom
            "scaleRadius": true,
            // if set to false the heatmap uses the global maximum for colorization
            // if activated: uses the data maximum within the current map boundaries
            //   (there will always be a red spot with useLocalExtremas true)
            "useLocalExtrema": true,
            // which field name in your data represents the latitude - default "lat"
            latField: 'lat',
            // which field name in your data represents the longitude - default "lng"
            lngField: 'lng',
            // which field name in your data represents the data value - default "value"
            valueField: 'count'
        };

        // Humanitarian Style.
        var v_base_layer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: 'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT',
            maxZoom: v_zoom
        });

        // Layer Mapa de calor.
        var v_heatmapLayer = new HeatmapOverlay(cfg);

        v_mapa = new L.Map('mapa', {
            center: new L.LatLng(v_latitud, v_longitud),
            zoom: v_zoom,
            layers: [v_base_layer, v_heatmapLayer]
        });

        v_heatmapLayer.setData(data);

    });

});
