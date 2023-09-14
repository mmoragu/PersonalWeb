import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items!: MenuItem[];
  rutas: { [key: string]: string } = {
    "log out": "login",
    "home": "home",
    "chat": "chat",
  }


  constructor(private router: Router,
  ) {

  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Chat', icon: 'pi pi-fw pi-calendar' },
      { label: 'Log Out', icon: 'pi pi-fw pi-cog' }
    ];
  }
  navigate($event: any) {
    let url: string = $event.target.textContent;
    if (url.toLocaleLowerCase() == "log out") {
    } else {
      this.router.navigateByUrl(this.rutas[url.toLowerCase()])
    }
  }

}
