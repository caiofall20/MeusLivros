import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Book } from '../shared/models/book.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../shared/services/books.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  
  @Input() book: Book;
  selectBook:Book;

  constructor(private dialogRef: MatDialogRef<EditDialogComponent>,private formBuilder: FormBuilder, private bookService: BooksService) { }
  color = 'accent';
  checked = false;
  disabled = false;
  books: Book = new Book();
  submitted = false;

  formBook: FormGroup;

  ngOnInit() {

    this.createForm(new Book());
    
  }

  createForm(book: Book) {
    return this.formBook = this.formBuilder.group({
      title: [book.title],
      author: [book.author],
      publishy_company: [book.publishy_company],
      gender: [book.gender],
      type: [book.type],
      category: [book.category],
      number_pages: [book.number_pages],
      isbn: [book.isbn],
      status: [book.status]
    })

  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  // onSubmit() {
  //   this.bookService.getAll().subscribe(
  //     books => this.books = books;
  //     error => alert('Erro ao carregar a lista')
  //   );
  //   }


  resetForm(){
    this.formBook.reset(new Book());
  
  }

  close() {
    this.dialogRef.close();
  }
}


