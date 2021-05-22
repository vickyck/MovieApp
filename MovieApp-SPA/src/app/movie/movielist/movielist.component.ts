import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { Movie } from 'src/app/_models/movie';
import { AlertifyService } from 'src/app/_services/alertify.service.';
import { MovieService } from 'src/app/_services/movie.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movieList: Movie[] = [];
  
  constructor(private movieService: MovieService, private alertify: AlertifyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.movieList = data['movies'];
    }, error => {
      this.alertify.error(error);
    });
  }

  redirectMovie(data: any) {
    this.router.navigate(['/movie', {data}]);    
  }
}
