import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  constructor(
    private route: ActivatedRoute, // chứa thông tin về tuyến đường
    private heroService: HeroService,
    private location: Location // tương tác với trình duyệt (trở lại chế độ xem trước đó)
  ) { };

  ngOnInit(): void {
    this.getHero();
  };

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    // Thực hiện bất đồng bộ với heroService
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
