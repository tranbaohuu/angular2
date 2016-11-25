import { Component } from '@angular/core';


//router-outlet dùng để load thêm 1 trang con nữa khi mà route rơi đúng vào điều kiện trong app.module. VD: vao timdziec.com dk = '' 
//thì sẽ load compunent TranHeroes (trong app.component.ts) thì hệ thống sẽ tự load 1 trang app.component.ts nữa thành ra là bị 2 trang.
//@Component({
//    selector: 'my-app',
//    template: `
//    <h1>{{title}}</h1>
//    <my-heroes></my-heroes> 
//  `
//})


//@Component Demo Router

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>

    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
   <router-outlet></router-outlet>
  `
})
export class Page1 {
    title = 'Tour of Heroes';
}



