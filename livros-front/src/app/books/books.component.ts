import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';
import { Book } from '../shared/models/book.model';
import { Observable } from "rxjs";
import { BooksService } from "../shared/services/books.service";
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  selectBook: Book;

  constructor(private dialog: MatDialog,private editDialog: MatDialog,private bookService: BooksService) {}

  openDialog(modal: string, selectBook) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      
      if (modal == 'dialog') {
        let modalComponent = this.dialog.open(ViewDialogComponent, dialogConfig); 
        modalComponent.componentInstance.selectBook = selectBook;
      }
      else if (modal == 'editDialog')  {
        let modalComponent = this.dialog.open(EditDialogComponent, dialogConfig);
        modalComponent.componentInstance.selectBook = selectBook;
    }

    
    console.log("Opa, to entrando na função!");
  
  }



  ngOnInit() {
    // this.reloadData();
    this.bookService.getAll().subscribe(
      books => this.books = books,
      error => alert('Erro ao carregar a lista')
    )
  }

  // reloadData() {
  //   this.books = this.bookService.getBooksList();
  // }

  deleteBook(book) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.bookService.delete(book.id).subscribe(
        () => this.books = this.books.filter(element => element != book),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

  onSelect(books: Book): void {
    this.selectBook = books;
  }

}

