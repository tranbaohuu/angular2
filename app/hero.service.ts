import { Injectable } from '@angular/core';

import { Hero,News } from './hero';
import { HEROES } from './mock-heroes';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    //  getHeroes(): Hero[] ( là kiểu dữ liệu trả về, tương đương return. Ở đây return về 1 mảng hero)
    //đây là hàm đồng bộ synchronus
    //getHeroes(): Hero[] {

    //    //HEROES ở đây là 1 cái mảng được tạo trong mock-heroes.ts ở đây chỉ việc return về nó sẽ tự lấy ra các phần tử bên trong
    //    return HEROES;

    //} // stub


    //tạo một method getHeroes với Promise ( Là lấy dữ liệu bất đồng bộ giống async) sử dụng bởi vì
    //nếu list nhiều mà lấy kiểu đồng bộ browser sẽ bị treo đứng im.  Phương thức ở trên cũng là getHeroes nhưng ko co Promise nó sẽ là lấy kiểu đồng bộ

    //getHeroes(): Promise<Hero[]> {
    //    return Promise.resolve(HEROES);
    //}


    //Giả lập lấy heroes với tốc độ chậm, như kiểu thread ngủ làm giả hệ thống mạng chậm để xem cách hoạt động
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 0)) // delay 2 seconds
            .then(() => this.getHeroes());
    }


    getSpecifyHero(id: number): Promise<Hero> {
        //lấy 1 heroes theo id
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }


    //đây là đường dẫn trỏ đến web api lấy ra kiểu json
    private heroesUrl = 'app/heroes';  // URL to web api

    private apiURL = 'http://localhost:11210/api/news';  // URL to web api
    

    constructor(private http: Http) { }

    //getHeroes sử dụng HTTP
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }



    // getHeroesNews(): Promise<News[]> {
    //     return this.http.get(this.apiURL)
    //         .toPromise()
    //         .then(response => response.json().data as News[])
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
