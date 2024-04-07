import { Component } from '@angular/core';

@Component({
  selector: 'app-linestyle',
  templateUrl: './linestyle.component.html',
  styleUrls: ['./linestyle.component.css']
})
export class LinestyleComponent {
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
                  label: 'Visitors',
                  data: [65, 59, 80, 81, 56, 95, 50],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--red-500'),
                  tension: 0.4,
                  backgroundColor: 'rgba(219, 68, 68,0.2)'
              },
              {
                  label: 'Purchasers',
                  data: [12, 31, 62, 33, 21, 62, 45],
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--green-500'),
                  tension: 0.4,
                  backgroundColor: 'rgba(0, 255, 102,0.2)'
              }
          ]
      };
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }
}


