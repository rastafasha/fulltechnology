import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Categoria } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  ServerUrl = environment.baseUrl;
  errorData: {};

  private http: HttpClient;

  price: string;
  description: string;
  title: string;
  button: string;

  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getArticulos() {
    return this.http.get<Articulo>(this.ServerUrl + 'api_articulo/Articulos/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedArticulos() {
    return this.http.get<Articulo>(this.ServerUrl + 'api_articulo/featured_articulos/').pipe(
      catchError(this.handleError)
    );
  }

  getArticulo(id: number) {
    return this.http.get<Articulo>(this.ServerUrl + 'api_articulo/Articulo/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentArticulos() {
    return this.http.get<Articulo>(this.ServerUrl + 'api_articulo/recent_Articulos').pipe(
      catchError(this.handleError)
    );
  }


  getPorCategorias() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategorias').pipe(
      catchError(this.handleError)
    );
  }

  getPorCategoria(id: number) {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria/' + id)
    .pipe(
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
