import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  multipleWinners: any[] = [];
  topStudios: any[] = [];
  minIntervalProducers: any[] = [];
  maxIntervalProducers: any[] = [];
  winnersByYear: any[] = [];
  selectedYear: number | null = null;
  availableYears: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.getMultipleWinners();
    this.getTopStudios();
    this.getProducerIntervals();
    this.getYearsAvailable();
  }

  getMultipleWinners(): void {
    this.dashboardService.getMultipleWinners().subscribe({
      next: (data: any) => {
        this.multipleWinners = data || [];
      },
      error: (err) => this.handleError('Erro ao carregar anos com múltiplos vencedores', err)
    });
  }

  getTopStudios(): void {
    this.dashboardService.getTopStudios().subscribe({
      next: (data: any) => {
        this.topStudios = data || [];
      },
      error: (err) => this.handleError('Erro ao carregar estúdios com mais vitórias', err)
    });
  }

  getProducerIntervals(): void {
    this.dashboardService.getProducerIntervals().subscribe({
      next: (data: any) => {
        this.minIntervalProducers = data.min ? [data.min] : [];
        this.maxIntervalProducers = data.max ? [data.max] : [];
      },
      error: (err) => {
        console.error('Erro ao carregar intervalos de produtores:', err);
      }
    });
  }


  getYearsAvailable(): void {
    this.dashboardService.getYearsAvailable().subscribe({
      next: (data: any) => {
        this.availableYears = data || [];
      },
      error: (err) => this.handleError('Erro ao carregar anos disponíveis', err)
    });
  }

  loadWinnersByYear(): void {
    if (this.selectedYear) {
      this.dashboardService.getWinnersByYear(this.selectedYear).subscribe({
        next: (data: any) => {
          this.winnersByYear = data || [];
        },
        error: (err) => this.handleError('Erro ao carregar vencedores do ano', err)
      });
    } else {
      this.winnersByYear = [];
    }
  }

  onYearChange(): void {
    this.loadWinnersByYear();
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
  }
}
