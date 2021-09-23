import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SautTandemService {

  private apiUrl: string = `${ environment.apiUrl}/saut-tandem`

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.apiUrl);
  }

  findAllNoVol(){
    return this.http.get(`${this.apiUrl}/noVol`)
  }

  add(sautTandem: any) {
    return this.http.post(this.apiUrl, sautTandem);
  }

  update(sautTandem: any) {
    return this.http.put(`${ this.apiUrl }/${ sautTandem.id }`, sautTandem);
  }

  delete(sautTandem: any) {
    return this.http.delete(`${ this.apiUrl }/${ sautTandem.id }`)
  }
}
