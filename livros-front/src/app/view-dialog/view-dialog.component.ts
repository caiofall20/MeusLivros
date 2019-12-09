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


  @Input() book: Book;


  // @Input() books: Book[] = [];

  constructor(private dialogRef: MatDialogRef<ViewDialogComponent>) { }

  ngOnInit() {
    // this.bookService.getAll().subscribe(
    //   books => this.books = books,
    //   error => alert('Erro ao carregar a lista')
    // )
  }



  close() {
    this.dialogRef.close();
  }

}
