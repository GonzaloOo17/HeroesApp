import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroeService : HeroesService) { }

  ngOnInit() {
  }

  guardar(form: NgForm){
    console.log(form);
    console.log(this.heroe);

    this.heroeService.crearHeroe( this.heroe)
      .subscribe(data =>{
        console.log(data);
      })
  }

  

}
