import { Injectable } from '@angular/core';
import { Categoria } from '../models/category';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

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

  getCategorias() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/Categorias').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedCategorias() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/featured_Categorias').pipe(
      catchError(this.handleError)
    );
  }

  getCategoria(id: number) {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/Categoria/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentCategorias() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/recent_Categorias').pipe(
      catchError(this.handleError)
    );
  }

  getPorCategorias() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/categorias').pipe(
      catchError(this.handleError)
    );
  }

  getARtPorCategoria() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategorias/' )
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria(id: number) {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategorias/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria1() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria1/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria2() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria2/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria3() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria3/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria4() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria4/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria5() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria5/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria6() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria6/')
    .pipe(
      catchError(this.handleError)
    );
  }
  getPorCategoria7() {
    return this.http.get<Categoria>(this.ServerUrl + 'api_categoria/porcategoria7/')
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
