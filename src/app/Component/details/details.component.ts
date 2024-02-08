import { Component,OnInit,OnChanges,AfterContentInit,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit{

  
   movieId="";
  constructor(private _activatedRoute:ActivatedRoute) {
    
    this._activatedRoute.params.subscribe((p)=>{

       this.movieId=p["id"];
       console.log('movie id'+this.movieId);
    })
  }

  ngOnChanges() {
    console.log('ngOnChanges called.');
  }
  ngOnInit(): void {
    console.log('ngOnChanges called.');
  }
  ngAfterContentInit(): void {
    console.log('ngOnInitcalled.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  /**
   *
   */
  
 

}
