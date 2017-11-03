import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {


  concentrations: any = [
    {id: 1, Name: 'General'},
    {
      id: 2, Name: 'Information Technology'
    },
    {
      id: 3, Name: 'Computer Engineering'
    },
    {
      id: 4, Name: 'Video Game Design and Development'
    },
    {
      id: 5, Name: 'Scientific Computing'
    }
  ];

  constructor(private router: Router) {}

  selectChange(concentrations) {
    if (concentrations === '1') {
      this.router.navigate(['/general']);
    } else if (concentrations === '2') {
      this.router.navigateByUrl('infotech');
    } else if (concentrations === '3') {
      this.router.navigateByUrl('compengg');
    } else if (concentrations === '4') {
      this.router.navigateByUrl('scicomp');
    } else if (concentrations === '5') {
      this.router.navigateByUrl('videogame');
    }
  }
}
