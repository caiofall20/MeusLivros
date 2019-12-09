import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  
  @Input() book: Book;

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>) { }


  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
