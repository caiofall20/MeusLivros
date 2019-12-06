import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiPath: string = "http://localhost:8080/livros";

  constructor(private http: HttpClient) { }

  // public getAll(): Observable<Book> {
  //   return this.http.get(this.apiPath).pipe(
  //     // catchError(this.handleError),
  //     // map(this.jsonDataToCategories)
  //   )
  // }

  // public list() {
  //   return this.http.get<Array<any>>(this.apiPath);
  // }


  // public getTitle(): Observable<Book> {
  //   return this.http.get('');
  // }

  getBook(id: number): Observable<Object> {
    return this.http.get(`${this.apiPath}/${id}`);
  }

  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.apiPath}`, book);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiPath}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiPath}/${id}`, { responseType: 'text' });
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.apiPath}`);
  }


}


