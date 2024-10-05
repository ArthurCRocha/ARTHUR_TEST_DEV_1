import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from './Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessTakeService {

  private apiUrl = 'http://localhost:8080/business/list'; // ajuste a URL da API

  constructor(private http: HttpClient) { }

  getAll(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiUrl);
  }
}
