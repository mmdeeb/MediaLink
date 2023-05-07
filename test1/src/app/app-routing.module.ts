import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [

  { path: 'users', component: UserListComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
