import { Routes } from '@angular/router';
import { ListItems } from './pages/list-items/list-items';
import { Login } from './pages/login/login';

export const routes: Routes = [

    //ruta por defecto
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
    { path: 'items', component: ListItems },
    
    { path: 'login', component: Login}
];
