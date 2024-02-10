import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DetailsActorComponent } from "../Component/details-actor/details-actor.component";
import { DetailsMoviesComponent } from "../Component/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../Component/details-reviews/details-reviews.component";
import { DetailsComponent } from "../Component/details/details.component";
import { HomeComponent } from "../Component/home/home.component";

import { NotFoundComponent } from "../Component/not-found/not-found.component";
import { SearchMovieComponent } from "../Component/search-movie/search-movie.component";

const  routes:Routes  = [
       {path:'',component:HomeComponent },
       {path:'Home',component:HomeComponent},
       {path:'Details/:id',component:DetailsComponent},
       {path:'Details/Actors/:id',component:DetailsActorComponent},
       {path:'Details/Movies/:id',component:DetailsMoviesComponent},
       {path:'Details/Reviews/:id',component:DetailsReviewsComponent},
       {path:'search/:movieTitle',component:SearchMovieComponent},
       {path:'Details',component:DetailsComponent},
     //404 not found
       {path:'**',component:NotFoundComponent},

     //start nested routes
    //   {path:'Details/:id',component:DetailsComponent,children:[
    //     {path:'Actors',component:DetailsActorComponent},
    //     {path:'Movies',component:DetailsMoviesComponent},
    //     {path:'Reviews',component:DetailsReviewsComponent},
    
    
    //]}
     //end nested  routes 
];


@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutesModules{

}

