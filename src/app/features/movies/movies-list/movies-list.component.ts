import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  displayedColumns: string[] = ['title', 'year', 'isWinner'];
  filter: string = '';
  page: number = 0;
  pageSize: number = 10;
  totalMovies: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.moviesService.getMovies(this.filter, this.page, this.pageSize).subscribe({
      next: (response: any) => {
        this.movies = response.items;
        this.totalMovies = response.total;
      },
      error: (err) => {
        console.error('Error loading movies:', err);
      }
    });
  }

  onSearch(): void {
    this.page = 0;
    this.loadMovies();
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadMovies();
  }
}
