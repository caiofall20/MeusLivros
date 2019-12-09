import { Component, OnInit, Input, ErrorHandler } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// import { BooksService } from '../shared/services/books.service';
// import { BooksComponent } from '../books/books.component';
import { BooksService } from '../shared/services/books.service';
import { BooksComponent } from '../books/books.component';
import { Observable } from 'rxjs';
import { Book } from '../shared/models/book.model';


@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit {


  // @Input() public book: Book;


  public books: Book[] = [];
  selectBook: Book;

  constructor(private dialogRef: MatDialogRef<ViewDialogComponent>) { }

  ngOnInit() {

    console.log(this.selectBook);
    // this.bookService.getAll().subscribe(
    //   books => this.books = books,
    //   error => alert('Erro ao carregar a lista')
    // )
  }

  isReading(): boolean {
    return this.selectBook.status;
  }

  isNotReading(): boolean {
    return !this.selectBook.status;
  }



  close() {
    this.dialogRef.close();
  }

}
