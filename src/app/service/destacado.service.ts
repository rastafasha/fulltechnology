import { Injectable } from '@angular/core';
import { Destacado } from '../models/destacado';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestacadoService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;

  description: string;
  title: string;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getDestacados() {
    return this.http.get<Destacado>(this.ServerUrl + 'api_destacado/Destacados').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedDestacados() {
    return this.http.get<Destacado>(this.ServerUrl + 'api_destacado/featured_Destacados').pipe(
      catchError(this.handleError)
    );
  }

  getDestacado(id: number) {
    return this.http.get<Destacado>(this.ServerUrl + 'api_destacado/Destacado/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentDestacados() {
    return this.http.get<Destacado>(this.ServerUrl + 'api_destacado/recent_Destacados').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
