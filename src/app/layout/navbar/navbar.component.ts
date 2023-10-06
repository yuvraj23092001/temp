import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( @Inject(DOCUMENT) private document: Document, private router :Router){

  }
  
  User :any = {
    firstName: "Yuvraj",
    lastName: "Khanna",
    email: "abc@gmail.com",
    imagePath : null
  }

  onLogout(e:any) {
    e.preventDefault();
    this.router.navigate(['/auth/login']);
  }

  toggleSidebar(e:any) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }
}
