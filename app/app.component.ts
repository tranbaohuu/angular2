import { Component } from '@angular/core';


//router-outlet dùng để load thêm 1 trang con nữa khi mà route rơi đúng vào điều kiện trong app.module. VD: vao timdziec.com dk = '' 
//thì sẽ load compunent TranHeroes (trong app.component.ts) thì hệ thống sẽ tự load 1 trang app.component.ts nữa thành ra là bị 2 trang.
//chỗ router-outlet như load tiếp 1 trang con ở đó, trong trường hợp này nó sẽ load trang dashboard.component.ts
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
     <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
   <router-outlet></router-outlet>
  `
})
export class TranHeroes {
    title = 'Tour of Heroes';
}


//!!  ở trang app.component hiện để rỗng và chỉ co router-outlet vì phải hy sinh trang này nếu không với router-outlet
//hệ thống sẽ render ra thêm 1 trang con nữa sẽ bị trùng. Nói thêm bởi vì trong app.module có config router là:
//  bị trùng do trong app.module bắt buộc phải bắt điều kiên khi path = '' vd timdziec.com (thì là trường hợp path = '')
// mà nếu path = '' mà chỉ định Component load  = 'TranHeroes' thì trang sẽ bị render ra trùng

//Do đó ta sẽ redirectTo 'vd ở đây là page1' để khắc phục việc trùng đó và từ đây page1 là trang default thay cho app.component.

