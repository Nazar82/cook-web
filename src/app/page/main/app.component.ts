import { Component, HostListener, AfterViewInit, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private authService: AuthService) { }
    block: string;
    title = 'Cookbook App';

    windowWidth: number = window.innerWidth;
    AppComponentngAfterViewInit() {
        this.windowWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    resize(event) {
        this.windowWidth = window.innerWidth;
        this.block = undefined;
    }
    ngOnInit() {
        const timer = JSON.parse(localStorage.getItem('timer'));
        if (timer && (Date.now() > timer)) {
            this.authService.logOut();
        }
    }
}
