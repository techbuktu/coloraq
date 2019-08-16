import { Component, OnInit } from '@angular/core';
import { EntryService } from '../../services/entry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entries: any;
  api_error_message: string;

  constructor(private entryApi: EntryService) {

   }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(){
    this.entryApi.getAllEntries()
    .subscribe(
      response => {
        console.log(response);
        this.entries = response;
        console.log("Entries: ", this.entries);
      },
      err => {
        console.log(err);
        this.api_error_message = `Sorry, something went wrong. 
          <p>
          Please, reload the page and try again.
          `
          
      },
      () => {
      }
    )
  }

}
