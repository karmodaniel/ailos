import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user/user.class';
import { map, Observable } from 'rxjs';

import { API } from '../API';

@Injectable({
  providedIn: 'root',
})
export class CpfConsultService {
  constructor(private http: HttpClient) {}

  getUserByCpf(cpf: string): Observable<User> {
    return this.http.get<User>(`${API.USERS}/${cpf}`).pipe(
      map((data: User) => data)
    )
  }
}
