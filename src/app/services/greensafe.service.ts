import { Injectable } from '@angular/core';
import { Incidencia } from '../models/incidencia.model';

@Injectable({
  providedIn: 'root'
})
export class GreensafeService {

  ListaIncidencias: Incidencia[] = [];

  constructor() { 
    console.log('Servicio inicializado');
  }
}
