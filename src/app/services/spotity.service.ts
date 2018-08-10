import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotityService {
  private toke ="BQAqkOE2oI9Aqisj-bwV2_XvCz_u9gC5-lONEPdIw6n95IkNBW5--zwSPiZNq1osdj9DVSt-QsYIJObT7xQ";


constructor(private http:HttpClient) {

console.log('Spotity services listo');


 }
 getQuery(query:string){
   const url =`https://api.spotify.com/v1/${ query }`;

   const headers = new HttpHeaders({ Authorization: `Bearer ${this.toke}` })
return this.http.get(url,{headers});
 }

 getNewRelese(){
  //browse/new-releases
   return this.getQuery('browse/new-releases')
  .pipe(map((data:any)=>{

     return data.albums.items;

   }))


 }


 getArtista(termino:string){



   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
.pipe(map((data:any)=>{

     return data.artists.items



   }))
   
   

 }

  gettoken(){

    const headers = new HttpHeaders({ grant_type:'client_credentials',
      client_id:'aa76813860564338bd4751be7a4f939d',
      client_secret:'fc065d961806496e9d58f80f5c8f9840'

   })
    return this.http.get(` https://accounts.spotify.com/api/token`, { headers }).subscribe((data:any)=>{


return data

    });


}


}
