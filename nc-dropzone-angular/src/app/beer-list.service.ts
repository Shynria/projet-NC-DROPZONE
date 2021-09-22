import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerListService {

  constructor(private http: HttpClient) { }

  private ApiUrl: string = `${environment.apiUrl}/beer-line`;

  findAll(){
    return this.http.get(this.ApiUrl)
  };

  add(beerList: any){
    return this.http.post(this.ApiUrl, beerList)
  };

  edit(beerList: any){
    return this.http.put(this.ApiUrl+`/${beerList.id}`, beerList)
  };

  delete(beerList: any){
    return this.http.delete(this.ApiUrl+`/${beerList.id}`)
  };
}
