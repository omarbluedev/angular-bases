import { Component} from '@angular/core';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent {

  heroesMarvel: string[] = ['CaptainAmerica', 'Spiderman', 'IronMan', 'Hulk', 'Doctor Strange', 'Thor'];
  heroEliminated: string = '';

  deleteHero(){
    this.heroEliminated = this.heroesMarvel.shift() || '';
  }

}
