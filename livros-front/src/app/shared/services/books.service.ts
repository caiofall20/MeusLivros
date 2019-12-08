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

   public getAll(): Observable<Book[]> {
     return this.http.get(this.apiPath).pipe(
        catchError(this.handleError),
   map(this.jsonDataToBooks)
     )
   }

   public list() {
     return this.http.get<Array<any>>(this.apiPath);
   }


   public getTitle(): Observable<Book> {
   return this.http.get('');
   }

  getBook(id: number): Observable<Book> {
    return this.http.get(`${this.apiPath}/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post(this.apiPath, book).pipe(
      catchError(this.handleError),
      map(this.jsonDataToBook)
    )
  }

  updateBook(id: number, value: any): Observable<Book> {
    return this.http.put(`${this.apiPath}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.apiPath}`);
  }

  // PRIVATE METHODS

  private jsonDataToBooks(jsonData: any[]): Book[] {
    const books: Book[] = [];
    jsonData.forEach(element => books.push(element as Book));
    return books;
  }

  private jsonDataToBook(jsonData: any): Book {
    return jsonData as Book;
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }


}


