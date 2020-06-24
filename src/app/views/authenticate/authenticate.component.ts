import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  navigateToDashboard = () => {
    this.route.navigateByUrl('/dashboard');
  };
}
