import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
// import { BooksService } from '../shared/services/books.service';
// import { BooksComponent } from '../books/books.component';
import { Book } from '../shared/models/book.model';


@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit {

  @Input() book: Book;

  constructor(private dialogRef: MatDialogRef<ViewDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
