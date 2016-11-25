import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { Page1 } from './page1.component';




const routes: Routes = [
    {
        //path = rỗng khi vào trang vd. timdziec.com thì la path = rỗng thì nó sẽ load cái component TranHeroes( Tên export Class) của app.component.ts
        path: '',
        //pathmatch chưa hiểu

        redirectTo: '/dashboard',

        pathMatch: "full"

    },
    {
        //khi url  = timdziec.com/heroes thì nó sẽ load HeroesComponent ( Tên export class) trong hero.component.ts
        path: 'page1',
        component: Page1
    },
    {
        //khi url  = timdziec.com/heroes thì nó sẽ load HeroesComponent ( Tên export class) trong hero.component.ts
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
