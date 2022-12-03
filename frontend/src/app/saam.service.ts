import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaamService {

  constructor(private http: HttpClient) { }
  
  getArtistResult(str){
    return this.http.get("http://localhost:8080/saam/artist?name="+str);
  }
  getArtWorkResult(str){
    return this.http.get("http://localhost:8080/saam/artwork?name="+str);
  }
}
