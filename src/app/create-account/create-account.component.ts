import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  visibilityOfForm = false;
  userAccountForm!: FormGroup;
  formLogin!: FormGroup;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private formBuilder: FormBuilder
  ) {}

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

  ngOnInit(): void {
    this.userAccountForm = this.formBuilder.group({
      name:     ['', [ Validators.required, Validators.minLength(6) ]],
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });

    this.formLogin = this.formBuilder.group({
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });
  }

  onSubmit(form: FormGroupDirective) {
    console.log(form.value);
    console.log(form.valid);
  }

}
