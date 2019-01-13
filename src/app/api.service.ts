import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUsers } from './users';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private URL = 'https://api.github.com/users';
  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.URL)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(errorHandler: any): any {
    throw new Error('Something is not Right!');
  }
  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || 'Something is not Right!');
  // }
}
