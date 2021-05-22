import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service.';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MovieService } from '../_services/movie.service';
import { Movie } from '../_models/movie';

@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {
    constructor(private movieService: MovieService, 
                private router: Router, 
                private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<any> {
        return this.movieService.getAllMovies().pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    };
}