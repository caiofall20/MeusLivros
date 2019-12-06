import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';
import { Book } from '../shared/models/book.model';
import { Observable } from "rxjs";
import { BooksService } from "../shared/services/books.service";




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<Book[]>;

  // books: Array<any>;

  constructor(private dialog: MatDialog, private bookService: BooksService) {}

  openDialog() {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(ViewDialogComponent, dialogConfig);
      console.log("Opa, to entrando na função!");
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBooksList();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
