import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AccountService } from '../../services';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
}

}
