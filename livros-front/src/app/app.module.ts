import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoansComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideMenuModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
