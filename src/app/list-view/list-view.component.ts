import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

import { ListViewService } from './list-view.service';
import { Movies } from '../shared/interfaces/movies';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit, OnDestroy {
  faStar = faStar;
  faVideo = faVideo;
  private subscriptions: Subscription[] = [];
  movieList: Movies[] = [];
  page: number = 1;

  constructor(private listViewService: ListViewService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.listViewService.getMovies(this.page).subscribe((res) => {
        this.movieList = res.data.movies;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  showMore() {
    this.page++;
    this.subscriptions.push(
      this.listViewService.getMovies(this.page).subscribe((res) => {
        this.movieList = this.movieList.concat(res.data.movies);
      })
    );
  }
}
