import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Book } from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private apiPath: string = "api/books"

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book> {
    return this.http.get(this.apiPath).pipe(
      // catchError(this.handleError),
      // map(this.jsonDataToCategories)
    )
  }


  public getTitle(): Observable<Book> {
    return this.http.get('');
  }
}


