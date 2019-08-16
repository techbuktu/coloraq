import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  ApiUrl: string = "http://localhost:8000/api/entries/";

  constructor(private http: HttpClient) {

  }
  
  getAllEntries(){
    return this.http.get(this.ApiUrl);

  }

  addEntry(new_entry_data){
    return this.http.post(this.ApiUrl, new_entry_data)
  }

  getEntryByUrl(entry_link){
    return this.http.get(this.ApiUrl + entry_link);

  }


  }
