import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   


  /**
   *
   */
  constructor(private httpClient:HttpClient) {
    
    
  }
  ngOnInit(): void {
    this.getFanFavariteMovies();
    this.getTopMovies();

  }

  getFanFavariteMovies(){

       this.httpClient.get<any[]>('assets/data/FanFavariteMovies.json').subscribe((data:any[])=>{
          this.FanFavMovie=data;

       })
  }

  getTopMovies(){


  }
  





   error="text-danger"
   success="text-success"
   isSucsess=true;
   isvisible=true;

   isActive=false;
   
   FanFavMovie:any[]=[]
   



}
