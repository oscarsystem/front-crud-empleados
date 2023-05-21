import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultasCargoService {

  //API_URL = 'http://localhost:8080/api/cargo/';
  API_URL = 'https://crud-empleados-kgpkmdskza-uc.a.run.app/api/cargo/';

  constructor(private http: HttpClient) { }

  getAllCargos(){
    let url = this.API_URL + 'listar';
    return this.http.get<any>(url)
    .pipe(catchError (error => error ));
  }

}
