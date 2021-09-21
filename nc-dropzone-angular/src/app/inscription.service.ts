import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl: string = `${environment.apiUrl}/parachutiste`
  
  constructor(private http: HttpClient) {

  }

  findByNom(parachutiste: any){
    return this.http.get(`${ this.apiUrl }/by-prenom/${ parachutiste.prenom }`);
  }
}
