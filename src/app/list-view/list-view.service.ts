import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { throwError } from 'rxjs';

import { MoviesReq } from '../shared/interfaces/movies-req';

@Injectable({
  providedIn: 'root',
})
export class ListViewService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  public getMovies(page: number) {
    const options = {
      params: new HttpParams({ fromString: `page=${page}` }),
    };
    return this.http
      .get<MoviesReq>('https://yts.mx/api/v2/list_movies.json/', options)
      .pipe(catchError(this.handleError));
  }
}
