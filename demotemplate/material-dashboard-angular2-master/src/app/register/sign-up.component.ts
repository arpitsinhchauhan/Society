import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'app/UserDTO';
import { NotificationService } from 'app/notification.service';
import { UserServiceServiceService } from 'app/user-service-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  user: UserDTO;
  constructor(private http: HttpClient,
    private router: Router,
    private users: UserServiceServiceService,
    private notificationService: NotificationService
  ) {
    this.user = {
      username: '',
      password: '',
      role: '',
      email: '',
      flatenNo: ''
      // Initialize other properties as needed
    };

  }
  ngOnInit() {
  }
  // singup: any[] = [];
  // Singupobj: any = {
  //   username: '',
  //   Email: '',
  //   password: '',
  //   flateNo: '',
  // };
  // loginobj: any = {
  //   username: '',
  //   password: '',
  // };

  // user: UserDTO = {
  //   username: '',
  //   password: '',
  //   role: ''
  //   // Initialize other properties as needed
  // };


  onSingup() {
    // this.user.addUser(data).subscribe((res) => { });
    // this.notificationService.showNotification('User add..');
    // this.router.navigate(['/']);
    this.users.signUp(this.user).subscribe(
      response => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
}


