import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Shared/auth.guard';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [{ path: 'admin', component:AdminComponent,canActivate:[AuthGuard] },
{path:'add',component:AddBookComponent},
{path:'update/:id',component:UpdateBookComponent},
{path:'user',component:UserComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'book/id',component:AdminComponent},
 { path: '**', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
