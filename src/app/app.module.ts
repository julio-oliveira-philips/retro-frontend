import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { environment } from 'src/environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AllRetrospectivesComponent } from './all-retrospectives/all-retrospectives.component';
import { ListedActionsComponent } from './listed-actions/listed-actions.component';
import { ActionsBurndownComponent } from './actions-burndown/actions-burndown.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalNewRetrospectiveComponent } from './modal-new-retrospective/modal-new-retrospective.component';
import { ModalEditRetrospectiveComponent } from './modal-edit-retrospective/modal-edit-retrospective.component';
import { ModalEditActionComponent } from './modal-edit-action/modal-edit-action.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AllRetrospectivesComponent,
    ListedActionsComponent,
    ActionsBurndownComponent,
    NavigationBarComponent,
    DashboardComponent,
    ModalNewRetrospectiveComponent,
    ModalEditRetrospectiveComponent,
    ModalEditActionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    AppRoutingModule,
    SocialLoginModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('787544544604-psd8f4bcnj61fgmi4cm95cilbvkfl7oc.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('1778342169190622')
        }
      ]
    }
  },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
