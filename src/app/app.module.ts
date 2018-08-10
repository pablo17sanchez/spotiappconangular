import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent  } from "./components/artista/artista.component";
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { LoadingComponent } from './components/shared/loading/loading.component';
//Services
import { SpotityService } from './services/spotity.service';
//Pipes
import {NoimagePipe  } from "./pipes/noimage.pipe";

//routes
import { routeRoutes } from "./routes/app.route.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    TarjetasComponent,
    LoadingComponent
    ,NoimagePipe
  ],
  imports: [
    BrowserModule,
    routeRoutes,
    HttpClientModule
  ],
  providers: [SpotityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
