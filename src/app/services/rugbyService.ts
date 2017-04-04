import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RugbyService{
  http: any;
  baseUrl : String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://ri-admin.azurewebsites.net/indonesianrugby';
  }

  getPosts(category, fileName){
    return this.http.get(this.baseUrl+'/'+category+'/'+fileName).map(res => res.json());
  }
}