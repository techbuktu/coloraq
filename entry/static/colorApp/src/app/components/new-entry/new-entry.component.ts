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

    this.postNewEntry()
  }

  postNewEntry(){
    //this.router.navigate(['']);
  }

}
