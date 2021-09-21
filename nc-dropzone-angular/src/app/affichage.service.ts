import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  private apiUrl: string = `${environment.apiUrl}/vol`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.apiUrl);
  }

  add(vol: any) {
    return this.http.post(this.apiUrl, vol);
  }

  update(vol: any) {
    return this.http.put(`${ this.apiUrl }/${ vol.id }`, vol);
  }

  delete(vol: any) {
    return this.http.delete(`${ this.apiUrl }/${ vol.id }`)
  }
}
