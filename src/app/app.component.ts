import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  constructor(private heroService: HeroService) {

    this.heroService.getList().subscribe(resp => {
      console.log('Hello resp', resp);
      
    });
  }
}
