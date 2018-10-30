import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './user';
import { UserService } from '../service/user.service';

@Component({
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent {

  user: User;
  userNames: String[];
  msg: String = "";
  langs: string[] = ["English", "French", "German"];
  @ViewChild("f") form: any;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    route.params.subscribe(params => {
      this.userService.getUserByUsername(params['username']).
        subscribe(data => {
          this.user = data;
        });
      });
  }

  ngOnInit() {
    this.userService.getUserNames()
    .subscribe(usernames => {
      this.userNames = usernames;
    });
  }

  editUser(): void {
    this.userService.editUser(this.user)
      .subscribe(data => {
        this.msg = "User " +this.user.firstName+ " edited successfully.";
      });
  };

}