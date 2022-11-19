import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-retrospective',
  templateUrl: './modal-edit-retrospective.component.html',
  styleUrls: ['./modal-edit-retrospective.component.css']
})
export class ModalEditRetrospectiveComponent implements OnInit {

  editRetrospectiveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editRetrospectiveForm = this.formBuilder.group({
      nameRetrospective:  ['', [ Validators.required, Validators.minLength(6) ]],
      startDate:          ['', [ Validators.required ]],
      endDate:            ['', [ Validators.required ]],
      finished:           [''],
    });
  }
}
