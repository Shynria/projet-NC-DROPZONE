import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private ApiUrl: string = `${environment.apiUrl}/saut`
  
  constructor(private http: HttpClient) {
  }

  findAll(){
    return this.http.get(this.ApiUrl)
  }

  findAllNoVol(){
    return this.http.get(`${this.ApiUrl}/noVol`)
  }

  add(saut: any){
    return this.http.post(this.ApiUrl, saut)
  }

  edit(saut: any){
    return this.http.put(this.ApiUrl+`/${saut.id}`, saut)
  }

  delete(saut: any){
    return this.http.delete(`${this.ApiUrl}/${saut.id}`)
  }

}
