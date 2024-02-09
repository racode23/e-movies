import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent {
     
  Films:any[]=[
     {
        imageURL:"../../../assets/images/bbb.jpg",
        name:"name 1",
        point:9

     },
     {
      imageURL:"../../../assets/images/bbb.jpg",
      name:"name 2",
      point:5.5

   },
   {
    imageURL:"../../../assets/images/bbb.jpg",
    name:"name 3",
    point:6.5

   }


  ]
}
