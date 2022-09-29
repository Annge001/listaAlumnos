import {Curso} from '../models/curso'

export interface Alumnos{
  nombre: string;
  apellido: string;
  edad: number;
  fechaNacimiento: Date;
  img: string;
  cursos: Curso;
}
