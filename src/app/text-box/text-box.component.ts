import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  selectedName ="sds";
  flag = false;
  public flagopen = false;
  names =['Allison',
  'Arthur',
  'Ana',
  'Alex',
  'Arlene',
  'Alberto',
  'Barry',
  'Bertha',
  'Bill',
  'Bonnie',
  'Bret',
  'Beryl',
  'Chantal',
  'Cristobal',
  'Claudette',
  'Charley',
  'Cindy',
  'Chris',
  'Dean',
  'Dolly',
  'Danny',
  'Danielle',
  'Dennis',
  'Debby',
  'Erin',
  'Edouard',
  'Erika',
  'Earl',
  'Emily',
  'Ernesto',
  'Felix',
  'Fay',
  'Fabian',
  'Frances',
  'Franklin',
  'Florence',
  'Gabielle',
  'Gustav',
  'Grace',
  'Gaston',
  'Gert',
  'Gordon',
  'Humberto',
  'Hanna',
  'Henri',
  'Hermine',
  'Harvey',
  'Helene',
  'Iris',
  'Isidore',
  'Isabel',
  'Ivan',
  'Irene',
  'Isaac',
  'Jerry',
  'Josephine',
  'Juan',
  'Jeanne',
  'Jose',
  'Joyce',
  'Karen',
  'Kyle',
  'Kate',
  'Karl',
  'Katrina',
  'Kirk',
  'Lorenzo',
  'Lili',
  'Larry',
  'Lisa',
  'Lee',
  'Leslie',
  'Michelle',
  'Marco',
  'Mindy',
  'Maria',
  'Michael',
  'Noel',
  'Nana',
  'Nicholas',
  'Nicole',
  'Nate',
  'Nadine',
  'Olga',
  'Omar',
  'Odette',
  'Otto',
  'Ophelia',
  'Oscar',
  'Pablo',
  'Paloma',
  'Peter',
  'Paula',
  'Philippe',
  'Patty',
  'Rebekah',
  'Rene',
  'Rose',
  'Richard',
  'Rita',
  'Rafael',
  'Sebastien',
  'Sally',
  'Sam',
  'Shary',
  'Stan',
  'Sandy',
  'Tanya',
  'Teddy',
  'Teresa',
  'Tomas',
  'Tammy',
  'Tony',
  'Van',
  'Vicky',
  'Victor',
  'Virginie',
  'Vince',
  'Valerie',
  'Wendy',
  'Wilfred',
  'Wanda',
  'Walter',
  'Wilma',
  'William',
  'Kumiko',
  'Aki',
  'Miharu',
  'Chiaki',
  'Michiyo',
  'Itoe',
  'Nanaho',
  'Reina',
  'Emi',
  'Yumi',
  'Ayumi',
  'Kaori',
  'Sayuri',
  'Rie',
  'Miyuki',
  'Hitomi',
  'Naoko',
  'Miwa',
  'Etsuko',
  'Akane',
  'Kazuko',
  'Miyako',
  'Youko',
  'Sachiko',
  'Mieko',
  'Toshie',
  'Junko']

  constructor() { }

  ngOnInit() {
    
  }

  public nameSelected() {
    console.log("name list", this.selectedName);
  }

  public customSearchFn(term: string, item: any) {
    term = term.toLocaleLowerCase();
    console.log("last v",term.charAt(term.length-1), term);
    if(term.includes('@')) {
      var pos = term.indexOf('@');
      var las = term.charAt(term.length-1)
      term =  term.toLocaleLowerCase().substring(pos+1,term.length);
      console.log("sea term", term);
    return item.toLocaleLowerCase().indexOf(term) > -1 ;
    }
    
    
  }

  

}
