import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroesapp-c87ea.firebaseio.com';

  constructor( private http : HttpClient) { }

  crearHeroe(heroe:HeroeModel){
    return this.http.post(`${this.url}/heroes.json`,heroe);
  }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
    .pipe(
      map(data=>{
        return this.crearArreglo(data);
      })
    );
  }

  crearArreglo(Obj:object){
    const heroes : HeroeModel[] = [];

    Object.keys(Obj).forEach(key=>{
      const heroe:HeroeModel=Obj[key];
      heroe.id=key;
      heroes.push(heroe);
    })

    return heroes;
  }

}
