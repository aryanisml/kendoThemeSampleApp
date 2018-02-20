import { Routes } from "@angular/router";
import { AppComponent } from "app/app.component";
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { AuthGuardService } from "./auth-guard.service";

export const appRoute: Routes=[
    {path:'home', component:ParentComponent, canActivate:[AuthGuardService]},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'child', component:ChildComponent},
    
]