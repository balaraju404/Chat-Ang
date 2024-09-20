import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';

export const accountRoutes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "", component: AccountComponent,
        children: [
            //login
            { path: "login", loadComponent: () => import("./login/login.component").then((m) => m.LoginComponent) },
            //create-account
            { path: "create-account", loadComponent: () => import("./create-account/create-account.component").then((m) => m.CreateAccountComponent) },
            //forgot-password
            { path: "forgot-password", loadComponent: () => import("./forgot-password/forgot-password.component").then((m) => m.ForgotPasswordComponent) }
        ]
    },
];
