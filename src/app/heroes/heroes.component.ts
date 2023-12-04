import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // standalone: true, Xác định component độc lập hay không?
})

export class HeroesComponent {
  heroes: Hero[] = [];
  // selectedHero?: Hero; // Biến để lưu trữ anh hùng đang được chọn. Dấu "?" có nghĩa là nó có thể là undefined.

  // Injecting services (sử dụng dịch vụ)
  constructor(private heroService: HeroService) { }

  // Là một phương thức được gọi khi một anh hùng được chọn. 
  // Nó thiết lập giá trị cho selectedHero.
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // Tự gọi component khởi sau khi constructor chạy
  ngOnInit(): void {
    this.getHeroes();
  }

  // Thực hiện sử dụng hàm getHeroes() trong hero.service
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
