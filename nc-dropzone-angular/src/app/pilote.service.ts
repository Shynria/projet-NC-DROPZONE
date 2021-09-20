import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = `${environment.apiUrl}/avion`;

  findAll() {
    return this.http.get(this.apiUrl)
  }

  add(pilote: any) {
    return this.http.post(this.apiUrl, pilote);
  }

  update(pilote : any) {
    return this.http.put(`${ this.apiUrl }/${ pilote.id }`, pilote);
  }

  delete(pilote : any) {
    return this.http.delete(`${ this.apiUrl }/${ pilote.id }`);
  }
}