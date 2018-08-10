import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from "../components/home/home.component";
import { BuscarComponent  } from "../components/buscar/buscar.component";

const routes: Routes = [
  {path:'home',component:HomeComponent  },
    {path:'buscar',component:BuscarComponent  },
     {path:'',pathMatch:'full',redirectTo:'home' }
];

export const routeRoutes = RouterModule.forRoot(routes,{useHash:true});
