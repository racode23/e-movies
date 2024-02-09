import { HttpClient } from '@angular/common/http';
import { Component,OnInit,OnChanges,AfterContentInit,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit{
  [x: string]: any;

  
   movieId="";
  constructor(private _activatedRoute:ActivatedRoute,private httpClient:HttpClient) {
    
    this._activatedRoute.params.subscribe((p)=>{

       this.movieId=p["id"];
       console.log('movie id'+this.movieId);
    })
  }
  Details3:any[]=[];
  loadMovieSummery(){
     this.httpClient.get('assets/data/TopMovies.json').subscribe((data:any)=>{

      this.Details3=data;
     })

 }

  ngOnChanges() {
    console.log('ngOnChanges called.');
  }
  ngOnInit(): void {

    this.loadMovieSummery();
  }
  ngAfterContentInit(): void {
    console.log('ngOnInitcalled.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  
 

  Details:any[]=[

  {
    name:"genre1"
  },
  {
    name:"genre2"
  },
  {
    name:"genre3"
  }
  ];
  Details2:any[]=[
    {
      name:"actor1"
    },
    {
      name:"actor2"
    },
    {
      name:"actor3"
    }
  ];
 

 
 

}
