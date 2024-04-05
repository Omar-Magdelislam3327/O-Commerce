import { Component } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent {
  data: any;
  options: any;
  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--primary-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Clothes',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [50, 25, 12, 48, 90, 76, 42]
              },
              {
                  type: 'bar',
                  label: 'Electronics',
                  backgroundColor: documentStyle.getPropertyValue('--green-500'),
                  data: [21, 84, 24, 75, 37, 65, 34]
              },
              {
                  type: 'bar',
                  label: 'Home',
                  backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                  data: [41, 52, 24, 74, 23, 21, 32]
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              tooltip: {
                  mode: 'index',
                  intersect: false
              },
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}


