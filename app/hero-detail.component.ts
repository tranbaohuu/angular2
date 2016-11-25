import { Component, Input, OnInit } from '@angular/core';

//import activeroute vào
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';

//thư viện để chạy nút back
import { Location } from '@angular/common';


//switchmap import
import 'rxjs/add/operator/switchMap';


//import class đối tượng hero vào để sử dụng
import { Hero } from './hero';


@Component({
    selector: 'my-hero-detail',
    template: `<div *ngIf="hero">
<h1>{{hero.id}}</h1><h2>{{hero.name}} details!</h2>
  <input [(ngModel)]="hero.name" placeholder="name"/>
</div>
<button (click)="save()">Save</button>
<button (click)="goBack()">Back</button>
`
})
export class HeroDetailComponent implements OnInit {
    //@Input dùng để báo pass data từ page này sang page khác vd: hiện tại pass từ app.component.ts -> hero-detail.component.ts
    @Input() hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getSpecifyHero(+params['id']))
            //hàm subscribe giup lay va khoi tao gia tri hero
            .subscribe(hero => this.hero = hero);
    };

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { };

    goBack(): void {
        //tạo nút back
        this.location.back();
    };

    save(): void {
        //truyền vào dấu () => hero hình như dấu  () là rỗng không khai báo gì cả để chạy các function khác sau khi cập nhật xong
        this.heroService.update(this.hero).then(()=> this.goBack());
    }
}


