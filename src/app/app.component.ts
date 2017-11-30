import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  route: string;

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
  }

  ngOnInit() {
    this.router.navigate([this.route]);
  }
}
