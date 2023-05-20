import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class ConsultasEmpleadoService {

  API_URL = 'https://crud-empleados-kgpkmdskza-uc.a.run.app/api/empleado/';

  constructor(private http: HttpClient) { }

  getAllEmpleados(){
    let url = this.API_URL + 'listar';
    console.log(this.http.get<any>(url));
    return this.http.get<any>(url)
    .pipe(catchError(error => error));
  }

  addEmpleado(empleado: Empleado){
    let url = this.API_URL + 'guardar';
    return this.http.post<any>(url, empleado)
    .pipe(catchError(error => error));
  }

  updateEmpleado(empleado: Empleado){
    let url = this.API_URL + 'actualizar';
    return this.http.put<any>(url, empleado)
    .pipe(catchError(error => error));
  }

  deleteEmpleado(id: string){
    let url = this.API_URL + 'eliminar/'+id;
    return this.http.delete<any>(url)
    .pipe(catchError(error => error));
  }


}
