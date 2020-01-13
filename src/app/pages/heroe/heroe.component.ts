import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { format } from 'url';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel = new HeroeModel();

  constructor(private heroeService : HeroesService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){

    if(form.invalid){
      alert("Formulario no válido");
    }

    this.heroeService.crearHeroe(this.heroe)
      .subscribe(data=>{
        this.heroe['id']=data['name'];
        console.log(data);
      })
  }



  

}
