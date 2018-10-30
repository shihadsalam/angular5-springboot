import { Component, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from '../service/user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();
  userNames: String[];
  msg: String = "";
  langs: string[] = ["English", "French", "German"];
  @ViewChild("f") form: any;

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserNames()
    .subscribe(usernames => {
      this.userNames = usernames;
    });
  }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.msg = "User " +this.user.firstName+ " created successfully.";
      });
  };

}