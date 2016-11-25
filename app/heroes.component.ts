import { Component } from '@angular/core';


//import class đối tượng hero vào để sử dụng
// { Hero } Tên Hero phải giống với tên trong class chứa nó vd:   export Hero {} trong hero.ts
import { Hero, News } from './hero';


import { HEROES } from './mock-heroes';


import { HeroService } from './hero.service';


import { OnInit } from '@angular/core';


//import Router vào
import { Router } from '@angular/router';


//component hoặc directive của class chính
//ở trong @component thường chỉ viết các thẻ HTML để render ra web.
@Component({

  //khởi tạo instance HeroSerice nếu không có dòng này chạy web sẽ bị lỗi EXCEPTION: No provider for HeroService! (AppComponent -> HeroService)
  // chỉ khai báo provider trong @Component (Web google không chỉ điều này)
  //providers cũng có thể không cần khai báo ở đây mà khai báo trong app.module.ts
  //providers: [HeroService],

  selector: 'my-heroes',
  // static
  //template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>` 

  //dynamic
  //template: `<h1>{{"objHero.id"}}</h1><h2>{{objHero.name}} details!</h2>` 


  //AddDiv    -- dấu ` sẽ giup chuoi chu xuong dong dc
  //    template: `<h1>{{title}}</h1><h2>{{objHero.name}} 
  //details!</h2><div><label>id: </label>{{objHero.id}}
  //</div><div><label>name: </label>{{objHero.name}}</div>
  //  <div>
  //    <label>name: </label>
  //    <input [(ngModel)]="objHero.name" placeholder="name">
  //  </div>


  //`


  //hiển thị mảng các heroe từ "let" ở đây nghĩa như vòng lặp foreach var item in array thì 
  //ở đây sẽ là let hero(alias name of object) of(=in) heroes(arrayname)
  //ngIf để check selectedHero lần đầu khởi tạo do chưa click vào hero nào cả nó sẽ bị rỗng nên phải có ngIf để trigger nó
  //[(ngModel)]="selectedHero.name"  cái này tạo 1 input để nhập dữ liệu vào thay đổi trực tiếp cho selectedHero
  //(click)="onSelect(hero)"  sự kiện click vào hero parameter hero truyền vào hero ở đây là tên hero ở trên ngFor let *hero* of ......
  //class.selected] = "hero === selectedHero" là thêm css ở hero mà mình click vào


  //tạm đóng lại để làm demo routing
  // <h1>{{title}}</h1>
  //<my-hero-detail [hero]="selectedHero"></my-hero-detail>

  //ADD
  //chú ý chỗ add hero cái input có #heroName là id của tag input sau đó chỗ button (click) tả truyền heroName.value vào tương đương 
  // với jquery là $("#heroName").val();
  // ** có 1 cái hay là (click)="add(heroName.value); heroName.value=''" khi click vào đây sẽ là 1 click 2 sự kiện :  
  //1. add hero vào mảng add(heroName.value) -  2. là set input đó = rỗng  chúng phân cách nhau bằng dấu ;
  //  =>> ta có thể 1 nút xử lý nhiều function cùng lúc cũng được

  //DELETE 
  //** chú ý có sự kiện là $event.stopPropagation() trigger cho việc thường click vào <li> chứ hero nó sẽ select tên hero đó
  // tương tự sự kiện đó nút delete nằm trên thẻ <li> vậy nên khi click vào delete nó sẽ hiểu 2 sự kiện cùng 1 lúc :  1.selected hero   2.delete
  // nên sẽ bị conflict với việc selected hero sẽ vd: show tên hero khi click vào lên bởi thể mới dùng sự kiện này để tránh xảy ra selected khi click vào delete

  template: `

<div>
<p>Khu vực add hero</p>
  <label>Hero name:</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>
</div>

<br/>

<ul class="heroes">
  <div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
    
   <li *ngFor="let hero of tempHeroesArray" (click)="onSelect(hero)"  [class.selected] = "hero === selectedHero">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
    <button class="delete"  style="margin-top:-20px;"  (click)="delete(hero); $event.stopPropagation()">x</button>
  
  </li>
</ul>`,
  //tạo css cho các thẻ hero
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }

label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc; 
  cursor: auto;
}
  `]




})
//class chính
//Trong class thì thường khởi tạo biến, sét Function và gán biến vào để cho @component bên trên chạy hiểu
export class HeroesComponent implements OnInit {






  title = 'Heroes Of Dota 2';
  hero = 'Storm Spirit';

  //khởi tạo đối tượng phải trong đây đây giống như hàm dựng
  objHero: Hero = {
    id: 1,
    name: 'Rubic'
  };



  //gán mảng Heroes vào biến tempHeroesArray để xài bên trên ở @component
  //tempHeroesArray = HEROES;
  //tempHeroesArray: Hero[]; //ở đây đang tạo 1 mạng null

  //gọi service lấy mảng hero



  //khởi tạo biến để chứa data khi click chuột vào các hero
  //dấu : tương đương ép kiểu hoặc Object obj = new Object() tương đương new,  còn đấu = là gán bằng
  selectedHero: Hero;



  //khởi tạo sự kiện click chuột
  onSelect(parameterHero: Hero): void {
    this.selectedHero = parameterHero;
  };






  //contructor gọi đến HeroService , Angular 2 không sử dụng từ khóa new để tạo đối tượng như C# ,vẫn có private / public
  //phần construct này cũng liên quan đến provider khai báo trên @component nhớ chú ý
  //thi sau nay gọi các hàm con trong nó chỉ việc heroSerice.(chấm) rồi gọi tên hàm
  constructor(private heroService: HeroService, private router: Router) { };

  //ngOnInit LifeCycle Hook là 1 kiểu khi hàm dựng, methods, các biển khởi tạo.. chạy xong hết rồi sẽ gọi vào đây để chạy các phương thức bên trong nó
  //link tham khảo https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit(): void {
    //this.getHeroes();
    this.getHeroesSlowSpeed();


    //dang làm demo đọc NEWS trong web API qua
    //this.getHeroesNews();
  };



  //gán tempHeroesArray chứa mảng hero bằng   heroeservice . gọi hàm get Heroes đọc ra 1 mảng. Lưu ý để chạy được câu này
  // ta phải khai báo provider: [HeroSerice] ở phía bên trên @Component

  //tempHeroesArray = this.heroService.getHeroes();


  // thay vì lấy tempHeroesArray như cách trên ta tạo 1 method để gọi function  gán mảng này, như kiểu tạo method trong C# gọi đi gọi lại sử dung
  //vd gọi là getHeroes() để gán biến
  //vẫn phải khai bao tempHeroesArray bên ngoài là 1 mảng rỗng, như vầy là biến toàn cục global có thể truy xuất ở bên trên được
  tempHeroesArray: Hero[];

  tempNews: News[];

  getHeroes(): void {
    //đây là cách tạo hàm khi phương thức là đồng bộ ( không có Promise)
    //this.tempHeroesArray = this.heroService.getHeroes();
    //đây là cách tạo hàm khi phương thức là bất đồng bộ ( CÓ Promise)

    this.heroService.getHeroes().then(heroes => this.tempHeroesArray = heroes);

  }

  // getHeroesNews(): void {
  //     this.heroService.getHeroesNews().then(a => this.tempNews = a);
  // }


  getHeroesSlowSpeed(): void {
    //đây là cách tạo hàm khi phương thức là đồng bộ ( không có Promise)
    //this.tempHeroesArray = this.heroService.getHeroes();
    //đây là cách tạo hàm khi phương thức là bất đồng bộ ( CÓ Promise)

    this.heroService.getHeroesSlowly().then(heroes => this.tempHeroesArray = heroes);

  }


  //dùng rounter navigate điều hướng lại vào trang detail: với 2 tham số /detail là nơi đến , và this.selectedhero.id để lấy id hero click vào vị trí này là tham số
  //ta sẽ có cấu trúc localhost/detail/id  -> localhost/detail/1 khi đó hệ thống sẽ quay lại ngược theo cấu trúc cấu hình trong app.mouule.ts rounter

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(nameOfHero: string): void {

    nameOfHero = nameOfHero.trim();
    if (!nameOfHero) { return; }
    //chạy hàm tạo hero xong sau đó then đẩy hero vào mảng nó gây sự kiện refresh cái list chứa hero
    this.heroService.create(nameOfHero)
      .then(hero => {
        this.tempHeroesArray.push(hero);
        //set nhả selected hero
        this.selectedHero = null;
      });

  }



  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        //Sử dụng filter(h=>h!== hero) ở đây thay thế cho việc phải getHeroes() load lại cái mảng chứa hero cho trang giảm thiểu truy xuất vào CSDL
        // Chỉ sử dụng filter để lọc bỏ thành phần đó. Vì nếu không filter lại hoặc không load lại mảng thì sẽ giữ nguyên như ban đầu nhìn như chưa thay đổi gì cả
        //nhưng thực chất bên dưới CSDL đã thêm hero mới vào rồi
        this.tempHeroesArray = this.tempHeroesArray.filter(h => h !== hero);
        //nếu hero đang selected là hero đã bị xóa thì thoát khỏi selected = việc set nó = null
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}

//đối tượng hero
//export class Hero {
//    id: number;
//    name: string;

//}


//Mảng Heroes move to mock-heroes.ts để sử dụng cho demo service

//const HEROES: Hero[] = [
//    { id: 11, name: 'Mr. Nice' },
//    { id: 12, name: 'Narco' },
//    { id: 13, name: 'Bombasto' },
//    { id: 14, name: 'Celeritas' },
//    { id: 15, name: 'Magneta' },
//    { id: 16, name: 'RubberMan' },
//    { id: 17, name: 'Dynama' },
//    { id: 18, name: 'Dr IQ' },
//    { id: 19, name: 'Magma' },
//    { id: 20, name: 'Tornado' }
//];




