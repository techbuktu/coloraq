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
        this.entries = response;
      },
      err => {
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

    this.createColorMap();
  }

  createColorMap(){
    let colorSet = new Set(this.colors);
    
    for(let color of colorSet){
      //Create an Object to hold the color-to-ageGroup mapping 
      let ageColorMap = { };
      ageColorMap["color"] = color;
      ageColorMap["ageGroups"] = [];
      ageColorMap["favGroup"] = null;
      console.log(ageColorMap);

      // Populate the list of ageGroups that like a certian color
      let colorLikes = this.entries.filter(entry => entry.color === ageColorMap["color"]);

      //Get a list of all the age Groups that like each color ("colorLikes")
      let ageGroups = [];
      ageGroups = colorLikes.map(like => like.age);

      ageColorMap["ageGroups"] = ageGroups;

      // Get most popular color within each ageGroup
      this.getFanAgeGroup(ageColorMap);

      this.color_map.push(ageColorMap);
    }
    
  }

  getFanAgeGroup(ageColorMap){
    let ageGroups = ageColorMap.ageGroups;
    let counts = { };
    let compare = 0
    let favGroup;

    for(let group of ageGroups){
      if(counts[group] === undefined){
        counts[group] =1;
      }
      else {
        counts[group] += 1;
      }
      
      if(counts[group] > compare){
        compare = counts[group];
        favGroup = group;
        ageColorMap.favGroup = favGroup;
      }

    }
  };

  openForm():void {
    this.router.navigate(['/new']);
  }

}
