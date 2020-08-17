import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'GET'
    })
  }

  url: string = environment.baseUrl + ':' + environment.port + '/';

  constructor(private http: HttpClient) {}

  getDeveloperList() {
    return this.http.get(this.url + 'graph-api/get-all-users', this.httpOptions)
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}graph-api/delete-user/${id}`, this.httpOptions);
  }
}
