import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Book } from '../shared/models/book.model';
import { BooksService } from '../shared/services/books.service'


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  book: Book = new Book();
  submitted = false;

  formBook: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BooksService) { }

  ngOnInit() {

    this.createForm(new Book());

  }

  createForm(book: Book) {
    this.formBook = this.formBuilder.group({
      title: [book.title],
      author: [book.author],
      publish: [book.publish],
      gender: [book.gender],
      type: [book.type],
      category: [book.category],
      pages: [book.pages],
      isbn: [book.isbn],
      status: [book.status]
    })

  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    console.log(this.formBook.value);
    this.bookService.createBook(this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
    this.formBook.reset(new Book());
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  resetForm(){
    this.formBook.reset(new Book());
  
  }
}
