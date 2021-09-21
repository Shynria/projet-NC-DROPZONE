import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParachuteService {

  constructor(private http: HttpClient) {

  }

  private ApiUrl: string = `${environment.apiUrl}/parachute`

  findAll(){
    return this.http.get(this.ApiUrl)
  }

  add(parachute: any){
    return this.http.post(this.ApiUrl, parachute)
  }

  edit(parachute: any){
    return this.http.put(this.ApiUrl+`/${parachute.id}`, parachute)
  }

  delete(parachute: any){
    return this.http.delete(this.ApiUrl+`/${parachute.id}`)
  }
}
