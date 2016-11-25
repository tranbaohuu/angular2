import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TranHeroes } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.service';

import { Page1 } from './page1.component';

import { DashboardComponent } from './dashboard.component';


//import routing ben ngoài thay thế cho định nghĩa router ở đây
import { AppRoutingModule } from './app-routing.module';

//import cho sử dụng http
import { HttpModule } from '@angular/http';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [BrowserModule, FormsModule,
        //RouterModule.forRoot([

        //{
        //    //path = rỗng khi vào trang vd. timdziec.com thì la path = rỗng thì nó sẽ load cái component TranHeroes( Tên export Class) của app.component.ts
        //    path: '',
        //    //pathmatch chưa hiểu

        //    redirectTo: '/dashboard',

        //    pathMatch: "full"

        //},
        //{
        //    //khi url  = timdziec.com/heroes thì nó sẽ load HeroesComponent ( Tên export class) trong hero.component.ts
        //    path: 'page1',
        //    component: Page1
        //},
        //{
        //    //khi url  = timdziec.com/heroes thì nó sẽ load HeroesComponent ( Tên export class) trong hero.component.ts
        //    path: 'heroes',
        //    component: HeroesComponent
        //},
        //{
        //    path: 'dashboard',
        //    component: DashboardComponent
        //},
        //{
        //    path: 'detail/:id',
        //    component: HeroDetailComponent
        //}
        //]
        //add ở đây không cần định nghĩa như trên do class app-routing.module.ts đã định nghĩa rồi

        AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)
    ]
    ,
    //import ở declare để khai báo số class .ts sử dụng cho trang hiển thị
    declarations: [TranHeroes, HeroDetailComponent, HeroesComponent, Page1, DashboardComponent],
    //set bootstrap cho các component
    bootstrap: [TranHeroes],
    //providers như người cung cấp data thường ở đây bỏ vào các hàm select lấy dữ liệu các kiểu
    providers: [HeroService],

})
export class AppModule { }
