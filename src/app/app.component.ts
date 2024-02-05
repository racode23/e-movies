import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Title of app component';

  today=new  Date();

  imageURL='https://dotnethow.net/images/movies/movie-1.jpeg';

  price=10;

  sellingPrice=10.50
}
