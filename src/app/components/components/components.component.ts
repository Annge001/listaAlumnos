import { Component, OnInit } from '@angular/core';
import {Alumnos} from '../../models/alumnos'

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  listaAlumnos: Array<Alumnos> = [
    {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 10,
      fechaNacimiento: new Date('10/01/1994'),
    },
    {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 10,
      fechaNacimiento: new Date('10/01/1995'),
    },
    {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 10,
      fechaNacimiento: new Date('10/01/1996'),
    },
    {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 10,
      fechaNacimiento: new Date('10/01/1997'),
    },
    {
      nombre: 'nombre',
      apellido: 'apellido',
      edad: 10,
      fechaNacimiento: new Date('10/01/1998'),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
