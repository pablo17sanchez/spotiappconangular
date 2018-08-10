import { Component, OnInit } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


nuevasCanciones:any[]=[];

loading:boolean;




  constructor(private _spotify:SpotityService) { 
this.loading=true;

this._spotify.getNewRelese().subscribe((data:any)=>{
  
 this.nuevasCanciones= data
this.loading=false;

});


  }

  ngOnInit() {
  }

}
