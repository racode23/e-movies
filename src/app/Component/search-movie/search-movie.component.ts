import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.css'
})
export class SearchMovieComponent  implements OnInit{
  [x: string]: any;
    
  movieTitle="";
  
  constructor(private _activatedRoute:ActivatedRoute,private httpClient:HttpClient) {
    this._activatedRoute.params.subscribe((p)=>{

       this.movieTitle=p["movieTitle"];
    })
  }

  searchResult:any[]=[];

  ngOnInit():void{
     this.searchMovie();
  }

  searchMovie(){
  // this.searchMovie().get<any>('assets/data/TopMovies.json')
    this.httpClient.get<any[]>('assets/data/searchMovie.json').subscribe({
      next:(data:any[])=>{

        this.searchResult=data;
      },
      error:(error)=>{

        console.log("Error handaling search movie");
      },

      complete:()=>{
        console.log("Request  completed!!!!");
      }


    })

         
  
  
    

  }
}
