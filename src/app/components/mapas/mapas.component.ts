import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { GreensafeService } from '../../services/greensafe.service';


declare var google;

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss'],
})
export class MapasComponent implements OnInit {

  latitud: number;
  longitud: number;

  constructor(
    private geolocation: Geolocation,
    private router: Router,
    public greensafeService: GreensafeService
  ) { }

  ngOnInit() {
    this.loadMap(); //a penas se cargue la pagina cargue el mapa
  }

  async loadMap() { //para que el await que esperara a traer los datos la funcion tiene que ser async
    const rta = await this.geolocation.getCurrentPosition();

    this.latitud = rta.coords.latitude;
    this.longitud = rta.coords.longitude;
  
    const myLatLng = 
    {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }

    console.log(myLatLng);

    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(
      mapEle, {
        center: myLatLng,
        zoom: 16
      }
    );

    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Aca toy!'
    });

    // let mapOptions: GoogleMapOptions = {
    //   controls: {
    //     myLocationButton: true         
    //   }, 
    //   //...
    // }    
  }

  agregarIncidencia()
  {
    this.router.navigateByUrl(`/agregar-incidencia/${ this.latitud}/${ this.longitud}`);
  }

}
