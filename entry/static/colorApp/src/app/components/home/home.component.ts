import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryService } from '../../services/entry.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entries: any;
  api_error_message: string;
  colors:string[] = [];
  color_map: any[] = [];
  constructor(private entryApi: EntryService, private router: Router) {
    
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
        this.getColors();
      }
    )
  }

  getColors(){
    this.colors = this.entries.map(entry => entry.color);
    console.log("Array of colors:" + this.colors);
    this.createColorMap();
  }

  createColorMap(){
    this.color_map = this.colors.map(color => {
      return { color: color, ageGroups: []};
   
    })
    this.createAgeGroupColor();
  }

  createAgeGroupColor(){

  }

  openForm():void {
    this.router.navigate(['/new']);
  }

}
