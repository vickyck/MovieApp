import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Movie } from '../_models/movie';
import { Search } from '../_models/search';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    var res = this.http.get<Movie[]>(this.baseUrl + 'FindAll');
    return res;
  }

  searchMovies(searchParam: Search) {
    var json = JSON.stringify(searchParam);
    const params = new HttpParams()
                  .set('page', json);

    return this.http.get(this.baseUrl + 'Search', {params});
  }
}
