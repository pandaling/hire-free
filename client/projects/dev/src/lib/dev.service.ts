import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  url: string = environment.baseUrl + ':' + environment.port + '/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  createUser(mutation) {
    return this.http.post(this.url + 'graph-api/create-user', { mutation }, this.httpOptions)
  }

  updateUser(id, mutation) {
    return this.http.put(`${this.url}graph-api/update-user/${id}`, { mutation }, this.httpOptions);
  }
}
