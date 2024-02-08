import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DetailsComponent } from './Component/details/details.component';
import { NotAuthorizedComponent } from './Component/not-authorized/not-authorized.component';
import { SearchComponent } from './Component/search/search.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DetailsComponent,
    NotAuthorizedComponent,
    SearchComponent,
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
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutesModules,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
