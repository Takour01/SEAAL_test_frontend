import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { authGuard } from './guards/auth.guard';
import { ManagerComponent } from './pages/manager/manager.component';
import { roleGuard } from './guards/role.guard';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path: 'login/Manager', component: LoginComponent },
    { path: 'login/Administrator', component: LoginAdminComponent },
    { path: 'register/Manager', component: RegisterComponent },
    { path: 'register/Administrator', component: RegisterAdminComponent },
    {
        path: '', component: HomeComponent, children: [
            {
                path: "manager",
                component: ManagerComponent,
                canActivate: [authGuard, roleGuard]
            },

            { path: "managers", component: ManagersComponent, canActivate: [authGuard, adminGuard] },
        ], canActivate: [authGuard]
    },
];
