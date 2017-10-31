import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { AppComponent } from '../main/app.component';
import { Router, Event, NavigationEnd, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService,
    private appComponent: AppComponent,
    private router: Router,
  ) { }

  redirectHome(): void {
    this.router.navigate(['./recipes'], { queryParams: { page: 1 } });
  }

  showMenu(): void {
    this.appComponent.block === undefined ? this.appComponent.block = 'block' : this.appComponent.block = undefined;
  }

  onLogout(): void {
    this.auth.logOut();
  }

  ngOnInit() {
  }

}
