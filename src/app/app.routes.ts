import { Routes } from "@angular/router";
import { AppComponent } from "app/app.component";
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

export const appRoute: Routes=[
    {path:'home', component:ParentComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'child', component:ChildComponent},
    
]