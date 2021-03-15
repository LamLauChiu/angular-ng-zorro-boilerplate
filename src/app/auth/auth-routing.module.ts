import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from "./auth.component";
import {UserListsComponent} from "./user-lists/user-lists.component";
import { UserInfoComponent } from './user-info/user-info.component';
const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'user-info', component: UserInfoComponent },
            { path: 'user-lists', component: UserListsComponent },
            //{ path: 'user-list/add', component: AddEditComponent },
            //{ path: 'user-list/edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }