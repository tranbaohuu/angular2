import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


//không hiểu sao mà templatURL trỏ vào file html bị lưu cache không thế sử được HTML
//thay thẻ div *ngFor = <a> thì sẽ được link click vào tên hero -> rồi qua detail, lưu ý phải thêm [routerLink]="['/detail', hero.id]"
//không thì hệ thống không chạy. 2 Tham số là /detail trang cần vào , hero.id ID truyền vào
@Component({
    moduleId: module.id,
    //selector: 'my-dashboard',
    //thêm html từ 1 link
    template: `
<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <a *ngFor="let hero of tempHeroesArray" [routerLink]="['/detail', hero.id]"  class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </a>
</div>
`
})
export class DashboardComponent {


    tempHeroesArray: Hero[];

    constructor(private heroService: HeroService) {
    };

    ngOnInit(): void {
        //heroes.slide tương đương với hàm take(5) trong entity
        this.heroService.getHeroes().then(heroes => this.tempHeroesArray = heroes.slice(1,5));

    }






}