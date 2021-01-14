import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl="http://10.100.14.16:1000/users";
  constructor(private http:HttpClient) { }

  public getUser(){

    return this.http.get<any>( this.userUrl);

  }

}
