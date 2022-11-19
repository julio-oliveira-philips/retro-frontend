import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-new-retrospective',
  templateUrl: './modal-new-retrospective.component.html',
  styleUrls: ['./modal-new-retrospective.component.css']
})
export class ModalNewRetrospectiveComponent implements OnInit {

  createRetrospectiveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRetrospectiveForm = this.formBuilder.group({
      nameRetrospective:  ['', [ Validators.required, Validators.minLength(6) ]],
      startDate:          ['', [ Validators.required ]],
      endDate:            ['', [ Validators.required ]],
    });
  }

}
