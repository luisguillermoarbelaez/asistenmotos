import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  latitud: 4.81321;
  longitud: -75.6946;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamloZW5hb3IiLCJhIjoiY2p2dGRybDhtMXJ4dTQ5cWxuZmttY2V0aiJ9.1oFdNA-RnSjGNXWKO_gVYQ';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-75.6946, 4.81321],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map'
      });

      // The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
  map.on('load', () => {

    map.resize();

    // Seccion para colorcar el market

    var marker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([-75.6946, 4.81321])
      .addTo(map);
   

    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    labelLayerId = layers[i].id;
    break;
    }
    }
     
    map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',
     
    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
    "interpolate", ['linear'], ["zoom"],
    15, 0,
    15.05, ["get", "height"]
    ],
    'fill-extrusion-base': [
    "interpolate", ["linear"], ["zoom"],
    15, 0,
    15.05, ["get", "min_height"]
    ],
    'fill-extrusion-opacity': .6
    }
    }, labelLayerId);
    });
  }

}
