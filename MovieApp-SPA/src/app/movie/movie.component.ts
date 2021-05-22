import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { Movie } from '../_models/movie';
import { AlertifyService } from '../_services/alertify.service.';
import { MovieService } from '../_services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];
  // movieList: Movie[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movie = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      
    });

    console.log('Movie value: ',this.movie);
    
    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '500px',
    //     imagePercent: 100,
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //     preview: false
    //   }
    // ];
    // this.galleryImages = this.getImages();
  }

  navigateHome(){
    this.router.navigate(['/home']);
  }

  // getImages() {
  //   const imageUrls = [] as any;
  //   for (const photo of this.movie.Stills) {
  //     imageUrls.push({
  //       small: photo
  //     });
  //   }
  //   return imageUrls;
  // }

}
