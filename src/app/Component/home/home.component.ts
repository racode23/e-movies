import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   


  /**
   *
   */
  constructor(private httpClient:HttpClient,private moviesService:MoviesService) {
    
   
  }
  ngOnInit(): void {
    this.getFanFavariteMovies();
   

  }
  FanFavariteMovies:any[]=[];

  getFanFavariteMovies(){
     this.moviesService.getFanFavariteMovies()
    .subscribe({

       next:(data:any[])=>{

          this.FanFavariteMovies=data;
       },
       error:(error)=>{
             console.log("FanFavarite movie error");

       },
       complete:()=>{
        console.log("completed!!!!!!!!!!!!!!!!!");
       }

    })
      
  }
}
