import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = `${environment.apiBaseUrl}/dashboard`;


  constructor(private http: HttpClient) { }

  getMultipleWinners(): Observable<any> {
    return this.http.get(`${this.baseUrl}/multiple-winners`);
  }

  getTopStudios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/top-studios`);
  }

  getProducerIntervals(): Observable<any> {
    return this.http.get(`${this.baseUrl}/producers-intervals`);
  }

  getYearsAvailable(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/available-years`);
  }

  getWinnersByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/winners-by-year/${year}`);
  }
}
