import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DetailsActorComponent } from "../Component/details-actor/details-actor.component";
import { DetailsMoviesComponent } from "../Component/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../Component/details-reviews/details-reviews.component";
import { DetailsComponent } from "../Component/details/details.component";
import { HomeComponent } from "../Component/home/home.component";
import { SearchComponent } from "../Component/search/search.component";

const  routes:Routes  = [
    {path:'',component:HomeComponent },
    {path:'Home',component:HomeComponent},
    {path:'Details/:id',component:DetailsComponent},
    {path:'Details/Actors/:id',component:DetailsActorComponent},
    {path:'Details/Movies/:id',component:DetailsMoviesComponent},
    {path:'Details/Reviews/:id',component:DetailsReviewsComponent},
     {path:'search/:movieTitle',component:SearchComponent},
     {path:'Details',component:DetailsComponent}
];


@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutesModules{

}

