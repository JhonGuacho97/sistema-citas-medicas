import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any [] = [
      {
        titulo:'Dashboard',
        icono:'mdi mdi-gauge',
        submenu: [

          {titulo:'main',url:'/'},
          {titulo:'progressBar',url:'progress'},
          {titulo:'grafica',url:'grafical'}

        ]
      }
  ];

  constructor() { }
}
