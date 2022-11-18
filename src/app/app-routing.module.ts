import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { AllRetrospectivesComponent } from './all-retrospectives/all-retrospectives.component';
import { ListedActionsComponent } from './listed-actions/listed-actions.component';
import { ActionsBurndownComponent } from './actions-burndown/actions-burndown.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: '**', component: NavigationBarComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: NavigationBarComponent  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }