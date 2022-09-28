import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  listaAlumnos: Array<string> = ['alumno uno','alumno dos','alumno tres','alumno cuatro','alumno cinco'];

  constructor() { }

  ngOnInit(): void {
  }

}
