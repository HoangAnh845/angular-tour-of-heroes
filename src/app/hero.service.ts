import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { MessageService } from './messages.service';
import { HttpClient } from '@angular/common/http';

// Sử dụng để xác định rằng class này có thể được inject (tiêm vào) trong các components khác hoặc services khác. 
// Cho biết service này sẽ được cung cấp ở mức ứng dụng, có nghĩa là nó sẽ là một singleton và chỉ được tạo ra một lần.
@Injectable({
  providedIn: 'root' // Sử dụng trong hết hầu hết ứng dụng
})
export class HeroService {

  // Dùng để khởi tạo thuộc tính và thiết lập một số trạng thái ban đầu của đối tượng 
  constructor(private messageService: MessageService, private htppClient: HttpClient) { }

  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes')
    return HEROES;
  }

  
  
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getList(): Observable<any> {
    return this.htppClient.get('https://jsonplaceholder.typicode.com/posts/1')
  }
}
