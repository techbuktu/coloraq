import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryService } from '../../services/entry.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {

  entryForm: FormGroup;
  newEntry;
  form_is_submitted: boolean = true;
  form_is_valid: boolean = false;
  api_error_msg: string;
  jsonEntryObj;


  constructor(private entryApi: EntryService, private router: Router, private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      color: ['', Validators.required]
    })
  };

  validateForm(){
    console.log("validateForm() called...");
    this.form_is_submitted = true;

    if (this.entryForm.invalid){
      return;
    }
    this.newEntry = {
      first_name: this.entryForm.controls.first_name.value,
      last_name: this.entryForm.controls.last_name.value,
      age: this.entryForm.controls.age.value,
      color: this.entryForm.controls.color.value
    }

    this.form_is_valid = true;

    console.log(`New Entry: ${JSON.stringify(this.newEntry)}`);
    this.jsonEntryObj = JSON.stringify(this.newEntry)
    this.postNewEntry(this.jsonEntryObj);
  }

  postNewEntry(entryObj){
    //this.router.navigate(['']);
    console.log("postNewEntry() called...");
    this.entryApi.addEntry(entryObj)
    .subscribe(
      res => {
        this.router.navigate(['']);
      },
      err => {
        this.api_error_msg = err;
      },
      () => {

      }
    )
  }

}
