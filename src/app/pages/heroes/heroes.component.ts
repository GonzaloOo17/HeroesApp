import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[]= [];

  constructor(private HeroeService : HeroesService) { }

  
  ngOnInit() {

    this.HeroeService.getHeroes()
    .subscribe(data=>{
      console.log(data);
      this.heroes = data;
    })

  }

}
