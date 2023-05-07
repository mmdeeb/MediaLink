import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
@Component({
  selector: 'te-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  constructor(private router: Router) { }
  collapse() {
    this.isExpanded = false;
  }
  logout(){
    this.router.navigate(['login']);
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
