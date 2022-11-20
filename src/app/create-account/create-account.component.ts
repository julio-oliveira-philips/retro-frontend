import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { ReCaptchaV3Service } from 'ng-recaptcha';
import { User } from './model/user.model';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  visibilityOfForm = false;
  userAccountForm!: FormGroup;
  formLogin!: FormGroup;

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.userAccountForm = this.formBuilder.group({
      userName:     ['', [ Validators.required, Validators.minLength(6) ]],
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });

    this.formLogin = this.formBuilder.group({
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });
  }

  public hiddenForm(): void {
    this.visibilityOfForm = !this.visibilityOfForm;
  }

  public send(form: FormGroupDirective): void {
    if (form.invalid) {
      console.log("Form invalid");
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signup(form: FormGroupDirective) {

    console.log("entrou");

    this.authService.signup(form.value).subscribe(
      sucess => console.log("Usuário criado"),
      error => console.error(error)
    );

  }

}
