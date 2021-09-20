import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParachutisteService {

  constructor(private http: HttpClient) {

  }

  private ApiUrl: string = ``

  findAll(){
    return this.http.get(this.ApiUrl)
  }

  add(parachutiste: any){
    return this.http.post(this.ApiUrl, parachutiste)
  }

  edit(parachutiste: any){
    return this.http.put(this.ApiUrl+`/{parachutiste.id}`, parachutiste)
  }

  delete(parachutiste: any){
    return this.http.delete(this.ApiUrl+`/${parachutiste.id}`)
  }

}
