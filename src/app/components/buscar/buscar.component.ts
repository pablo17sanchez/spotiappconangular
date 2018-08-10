import { Component } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  {

listacanciones:any[]=[];

  loading: boolean;

  constructor(private _spotifiservice:SpotityService) {

    // this._spotifiservice.gettoken().subscribe((data:any) => {

    //   console.log(data);

    // })

   }

  buscar (termino:string){
    this.loading = true;
   this._spotifiservice.getArtista(termino).subscribe((data:any)=>{

    this.listacanciones = data
    this.loading=false;

    })





  }

}
