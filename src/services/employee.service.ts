import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "../app/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    const host = environment.env === 'production' ? environment.baseUrlApi : 'http://localhost';
    this.baseUrl = `${host}:${environment.baseUrlPort}/`; 
    
  }
  // get all employees
  getAllEmployee(): Observable<any> {
    return this.http.get(`${this.baseUrl}employees`)
  }


}
