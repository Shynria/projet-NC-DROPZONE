import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParachutisteService {

  constructor(private http: HttpClient) {

  }

  private ApiUrl: string = `${environment.apiUrl}/parachutiste`

  findAll(){
    return this.http.get(this.ApiUrl)
  }

  add(parachutiste: any){
    return this.http.post(this.ApiUrl, parachutiste)
  }

  edit(parachutiste: any){
    return this.http.put(this.ApiUrl+`/${parachutiste.id}`, parachutiste)
  }

  delete(parachutiste: any){
    return this.http.delete(this.ApiUrl+`/${parachutiste.id}`)
  }

  update(parachutiste: any){ 
    return this.http.put(`${ this.ApiUrl }/${ parachutiste.id }`, parachutiste);
  }

  findAllByNom(parachutiste: any){
    return this.http.get(`${ this.ApiUrl }/by-prenom/${ parachutiste.nom }`);
  }

  findAllByNiveau(niveau: string) {
    return this.http.get(`${ this.ApiUrl }/${niveau}`)
  }

}
