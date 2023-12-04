import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // Khi người dùng vào trang sẽ điều hướng sang trang dashboard
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full', // Kiểm tra nếu toàn bộ URL khớp chính xác với path được chỉ định
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'heroes', // Xác định đường đi
    component: HeroesComponent  // Nội dung khi điều hướng đến
  },
  // Ký tự dấu hai chấm :trong pathbiểu thị đó :idlà phần giữ chỗ cho một anh hùng cụ thể id.
  { path: 'detail/:id', component: HeroDetailComponent },
]

@NgModule({
  // Cấu hình router với các route được định nghĩa trong biến routes. 
  // forRoot nghĩa là đang cấu hình router cho ứng dụng chính
  // Cung cấp cho các nhà cung cấp dịch vụ và các chỉ thị cần thiết để định tuyến 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
