import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResortPageComponent } from './resort-page/resort-page.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './resort-page/tracks/tracks.component';
import { WeatherComponent } from './resort-page/weather/weather.component';
import { SkiPassComponent } from './resort-page/ski-pass/ski-pass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResortPageComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    TracksComponent,
    WeatherComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
