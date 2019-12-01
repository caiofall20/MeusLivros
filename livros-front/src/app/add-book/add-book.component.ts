import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;
  titulo;

  form: FormGroup;

  constructor() { }

  ngOnInit() {

      // this.form = this.formBuilder.group({
      //   title: [null],
      //   author: [null],
      //   publishing_company:[null],
      //   pages: [null],
      //   isbn: [null],

      // })
    
  }

}
