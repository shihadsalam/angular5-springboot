import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { EditUserComponent } from './user/edit-user.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UserComponent },
    { path: 'addUser', component: AddUserComponent },
    { path: 'editUser/:username', component: EditUserComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}