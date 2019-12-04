import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Book } from '../shared/models/book.model';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;

  formBook: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

  onSubmit() {
    console.log(this.formBook.value);
    this.formBook.reset(new Book());
  }

  resetForm(){
    this.formBook.reset(new Book());
  
  }
}
