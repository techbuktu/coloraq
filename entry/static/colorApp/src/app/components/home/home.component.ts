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
   /* this.color_map = this.colors.map(color => {
      let ageColorMap = { };
      //return { "color": color, "ageGroups": []};
      ageColorMap["color"] = color;
      ageColorMap["ageGroups"] = [];
      ageColorMap["faveColor"]= null;
      return ageColorMap;
   
    })
    */
    let colorSet = new Set(this.colors);
    console.log(colorSet);
    for(let color of colorSet){
      //Create an Object to hold the color-to-ageGroup mapping 
      let ageColorMap = { };
      ageColorMap["color"] = color;
      ageColorMap["ageGroups"] = [];
      ageColorMap["fanGroup"] = 0;
      console.log(ageColorMap);

      // Populate the list of ageGroups that like a certian color
      let colorLikes = this.entries.filter(entry => entry.color === ageColorMap["color"]);
      console.log(colorLikes);

      //Get a list of all the age Groups that like each color ("colorLikes")
      let ageGroups = [];
      ageGroups = colorLikes.map(like => like.age);
      console.log("ageGroups: " + ageGroups);
      //this.entries.map(entry => entry.color === color)
      ageColorMap["ageGroups"] = ageGroups;

      this.color_map.push(ageColorMap);
    }
    
    console.log("this.color_map array: " + this.color_map);
    console.log(this.color_map.length);
    //this.createAgeGroupColor();
  }

  createAgeGroupColor(color_name){
    for (let obj of this.color_map){
     return "True";
    }
  }

  openForm():void {
    this.router.navigate(['/new']);
  }

}
