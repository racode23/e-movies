import { Component,OnInit,OnChanges,AfterContentInit,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit,OnChanges,AfterContentInit,AfterViewInit{

  constructor() { }
 
  
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
 

}
