import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    //private accountService: AccountService
) {
    // redirect to home if already logged in
    // if (this.accountService.userValue) {
    //     this.router.navigate(['/']);
    // }
}

  ngOnInit(): void {
  }

}
