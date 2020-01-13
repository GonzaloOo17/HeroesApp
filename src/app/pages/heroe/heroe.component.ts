import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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
  
    if(form.invalid){
      console.log("Formulario no válido");
      return form;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      //type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;


    if(this.heroe.id){
      peticion = this.heroeService.actualizarHeroe( this.heroe);
    }else{
      peticion = this.heroeService.crearHeroe( this.heroe);
    }

    peticion.subscribe(data =>{

      Swal.fire({
        title: this.heroe.nombre,
        text: "Se actualizó correctamente",
        
      })
      console.log(data);
      
    })

    
  
    }

  

}
