import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DetailViewService } from './detail-view.service';
import { Movie } from '../shared/interfaces/movie';
import { Movies } from '../shared/interfaces/movies';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  movie: Movie;
  movieList: Movies[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private detailViewService: DetailViewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getMovieData(params.id);
    });
  }

  getMovieData(id: string) {
    this.subscriptions.push(
      this.detailViewService.getMovies(id).subscribe((res) => {
        this.movie = res.data.movie;
      })
    );
  }
}
