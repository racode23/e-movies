import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   error="text-danger"
   success="text-success"
   isSucsess=true;
   isvisible=true;
   
   FanFavMovie:any[]=[
     {
         imageURL:'../../../assets/images/bbb.jpg',
         title:'Movie #1Title',
         actor:'Movie actor 1',
         year:'2024',
         rate:9.5,
         trophy:1

     },
     {
      imageURL:'../../../assets/images/bbb.jpg',
      title:'Movie #2 Title',
      actor:'Movie actor 2',
      year:'2024',
      rate:9.5,
      trophy:3

    }


   ]

}
