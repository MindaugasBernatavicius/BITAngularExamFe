import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { CowsComponent } from './components/cows/cows.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CowsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'cows', component: CowsComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
