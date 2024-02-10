import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  getFanFavariteMovies(){

    return this.httpClient.get<any[]>('assets/data/FanFavariteMovies.json');
    
    
}
}
