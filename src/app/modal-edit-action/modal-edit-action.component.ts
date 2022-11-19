import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-action',
  templateUrl: './modal-edit-action.component.html',
  styleUrls: ['./modal-edit-action.component.css']
})
export class ModalEditActionComponent implements OnInit {

  editActionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editActionForm = this.formBuilder.group({
      descriptionAction:  ['', [ Validators.required, Validators.minLength(6) ]],
      owner:              ['', [ Validators.required, Validators.minLength(6)  ]],
      finished:           [''],
    });
  }

}
