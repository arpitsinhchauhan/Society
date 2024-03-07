import { Injectable } from '@angular/core';
import { SingUp } from './SingUp';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  addUser(data: SingUp) {
    return this.http.post('http://localhost:8080/signup', data);
  }

  getAllData() {
    return this.http.get('http://localhost:8080/all'); 
  }

}
