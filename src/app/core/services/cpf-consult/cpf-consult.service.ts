import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../API';

@Injectable({
  providedIn: 'root',
})
export class CpfConsultService {
  constructor(private http: HttpClient) {}

  getUserByCpf(cpf: string): Observable<any> {
    return this.http.get<User>(`${API.USERS}/${cpf}`).pipe(
  }
}
