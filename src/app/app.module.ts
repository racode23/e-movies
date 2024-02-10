import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DetailsComponent } from './Component/details/details.component';
import { NotAuthorizedComponent } from './Component/not-authorized/not-authorized.component';
import { LoderComponent } from './Component/loder/loder.component';
import { ModelComponent } from './Component/model/model.component';
import { DetailsMoviesComponent } from './Component/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './Component/details-reviews/details-reviews.component';
import { HomeComponent } from './Component/home/home.component';
import { profitPipe } from './Component/Pipe/profit.pipe';
import { FormsModule } from '@angular/forms';
import { DetailsActorComponent } from './Component/details-actor/details-actor.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModules } from './Modules/app.routes';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { HeaderDirective } from './Derectives/header.directive';
import { MyIfDirective } from './Derectives/my-if.directive';
import { HttpClientModule } from '@angular/common/http';
import { SearchMovieComponent } from './Component/search-movie/search-movie.component';
import { MoviesService } from './Services/movies.service';
import { GlobalErrorHandalingService } from './Services/global-error-handaling.service';
import { FeedbackComponent } from './Component/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DetailsComponent,
    NotAuthorizedComponent,
    LoderComponent,
    ModelComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    HomeComponent,
    //pipe
    profitPipe,
    DetailsActorComponent,
    NotFoundComponent,
    //derective
    HeaderDirective,
    MyIfDirective,
    SearchMovieComponent,
    FeedbackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModules,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    MoviesService,
    {provide:ErrorHandler,useClass:GlobalErrorHandalingService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
