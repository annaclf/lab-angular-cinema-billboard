import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesService } from './services/movies.service';
import { MoviesComponent } from './comonents/movies/movies.component';
import { SingleMovieComponent } from './comonents/single-movie/single-movie.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { SingleMoviePageComponent } from './pages/single-movie-page/single-movie-page.component';
import { HeaderComponent } from './comonents/header/header.component';
import { FooterComponent } from './comonents/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: MoviesPageComponent },
  { path: 'movie/:id', component: SingleMoviePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SingleMovieComponent,
    MoviesPageComponent,
    SingleMoviePageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
