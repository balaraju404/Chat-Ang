import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "layout", pathMatch: "full" },
    { path: "account", loadChildren: () => import("./account/account.routes").then((m) => m.accountRoutes) },
    { path: "layout", loadChildren: () => import("./layout/layout.routes").then((m) => m.layoutRoutes) }
];
