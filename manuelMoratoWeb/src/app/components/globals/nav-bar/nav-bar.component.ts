import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeItem!: MenuItem;

  readonly rutas: { [key: string]: string } = {
    "inicio": "home",
    "Sobre Me": "about-me"
  } 

  readonly items :MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-fw pi-home' },
    { label: 'Sobre Me', icon: 'pi pi-fw pi-calendar' }
  ];

  constructor(private router: Router,
  ) {

  }

  ngOnInit() {
    this.activeItem = this.items[0];
  }

  navigate(tab: any) {

    this.activeItem=tab.activeItem;

    let routerLink:string = tab.activeItem.label;
    
    this.router.navigateByUrl(this.rutas[routerLink])
  }

}
