import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: '**', component: CreateAccountComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CreateAccountComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }