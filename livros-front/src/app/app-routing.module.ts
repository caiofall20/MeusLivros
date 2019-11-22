import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'emprestimo' , component: LoansComponent},
  {path: 'meuslivros', component: BooksComponent},
  {path: 'adicionarlivros', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
