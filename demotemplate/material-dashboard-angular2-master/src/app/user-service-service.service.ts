import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingUp } from './SingUp';
import { Observable, catchError, map, tap } from 'rxjs';
import { UserDTO } from './UserDTO';
import { API_AUTH } from './serviceutl';
import { User } from './User';
import { BehaviorSubject, throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceServiceService {


  private apiUrl = 'http://localhost:8080/Images';


  constructor(private http: HttpClient) { }

  // addUser(data: SingUp) {
  //   return this.http.post('http://localhost:8080/signup', data);
  // }

  getAllData() {
    return this.http.get('http://localhost:8080/all');
  }

  getImageUrls(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/delete/${id}`);
  }


  updateUserData(userData: any): Observable<any> {
    return this.http.put('http://localhost:8080/edit', userData);
  }

  getUpdate(data: SingUp): Observable<any> {
    const url = `http://localhost:8080update`;

    return this.http.post(url, data);
  }

  checkUserData(username: string, email: string, flatenNo: string): Observable<any> {
    const url = `http://localhost:8080/create-user`;

    // Create an object with the data to send to the server
    const data = {
      username: username,
      email: email,
      flatenNo: flatenNo
    };

    // Make an HTTP POST request to your server
    return this.http.post<boolean>(url, data);
  }

  // setPayment(payment: Payment): Observable<Payment> {
  //   return this.http.post<Payment>(`http://localhost:8080/payment`, payment);
  // }

  setPayment(username: string, Payment_type: number, Rupess: string, type_events: string): Observable<any> {
    const payload = {
      username: username,
      payment_type: Payment_type,
      rupess: Rupess,
      type_events: type_events
    };

    return this.http.post(`http://localhost:8080/payment`, payload);
  }

  AddVehicle(formData: any): Observable<any> {
    const url = `http://localhost:8080/Vehicle`;

    // Make an HTTP POST request to add the vehicle data
    return this.http.post(url, formData);
  }

  feedback(data: any) {
    return this.http.post('http://localhost:8080/feedback', data);
  }

  private apiUrl1 = 'http://localhost:8080/authenticate'; // Your Spring Boot API base URL


  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl1}`, { username, password });
  }


  private baseUrl = 'http://localhost:8080'; // Replace with your backend base URL


  signUp(user: UserDTO): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  loginIN(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/authenticate', { username, password });
  }

  isLoggedIn(): boolean {
    console.log('token>>>>>>' + localStorage.getItem('token'));
    console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token'); // Check if token exists
  }

  // private totalRupeesSource = new BehaviorSubject<number>(0);
  // totalRupees$ = this.totalRupeesSource.asObservable();

  // updateTotalRupees(totalRupees: number): void {
  //   this.totalRupeesSource.next(totalRupees);
  // }
}