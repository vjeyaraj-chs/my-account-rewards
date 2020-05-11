import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private imgPath:string = '../../assets/cinch-logo.svg';

    constructor(private router:Router) { }
    
    ngOnInit() {
    }
}
