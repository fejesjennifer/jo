import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, RouterLink, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopviewComponent } from './topview/topview.component';
import { MidviewComponent } from './midview/midview.component';
import { BottomviewComponent } from './bottomview/bottomview.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EndComponent } from './end/end.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopviewComponent,
    MidviewComponent,
    BottomviewComponent,
    HomeComponent,
    RestaurantComponent,
    EndComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'restaurant', component: RestaurantComponent},
      { path: '**', redirectTo: 'home'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
