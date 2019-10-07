import { Component, OnInit } from '@angular/core';
import { GreensafeService } from '../../services/greensafe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-incidencia',
  templateUrl: './agregar-incidencia.page.html',
  styleUrls: ['./agregar-incidencia.page.scss'],
})
export class AgregarIncidenciaPage implements OnInit {

  latitud: number;
  longitud: number;
  descripcion: string = '';

  constructor(public greensafeService: GreensafeService,
            private route: ActivatedRoute) { 

      this.latitud = parseFloat(this.route.snapshot.paramMap.get('latitud'));
      this.longitud = parseFloat(this.route.snapshot.paramMap.get('longitud'));

      console.log("latitud: ", this.latitud, "; longitud: ", this.longitud);
  }

  ngOnInit() {
  }

}
