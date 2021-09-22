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

  findAllByEtatVol(etat: string) {
    return this.http.get(`${ this.apiUrl }/${etat}`)
  }

}
