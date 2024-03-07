import { Component, OnInit } from '@angular/core';
import { SingUp } from '../SingUp';
import { Router } from '@angular/router';
import { UserServiceServiceService } from 'app/user-service-service.service';
import { NotificationService } from 'app/notification.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  data: any = [];
  sign: SingUp = new SingUp();
  dataArray!: any[];
  error: string = '';
  username: string = '';
  password: string = '';
  constructor(private user: UserServiceServiceService,
    private fb: FormBuilder, private router: Router,
    private notificationService: NotificationService,
  ) {

  }

  ngOnInit() {
    this.createForm();
    if (localStorage.token) {
      console.log(localStorage.token);
      localStorage.removeItem("token");
      console.log(localStorage.token);
    }
  }
  // email: string = '';
  // password: string = '';
  loginError: string = '';



  createForm() {
    this.loginForm = this.fb.group(
      {
        username: [{ value: '' }],
        password: [{ value: '' }],
      }
    );
    this.loginForm.patchValue({
      username: '',
      password: '',
    });
  }
  // onLogin(): void {
  //   this.user.getAllData().subscribe((response: any[]) => {
  //     this.dataArray = response;
  //     const providedUsername = this.loginForm.controls['username'].value;
  //     const providedPassword = this.loginForm.controls['password'].value;
  //     let found = false;

  //     for (let i = 0; i < this.dataArray.length; i++) {
  //       const userData = this.dataArray[i];
  //       if (userData.username === providedUsername && userData.password === providedPassword) {
  //         found = true;
  //         break; // Exit the loop once a match is found
  //       }
  //     }

  //     if (found) {
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       this.error = 'Invalid username or password';
  //     }
  //   });
  // }

  // onLogin(): void {
  //   if (this.loginForm.invalid) {
  //     // Handle form validation errors
  //     return;
  //   }

  //   const { username, password } = this.loginForm.value;

  //   this.user.login(username, password).subscribe(
  //     (response: any) => {
  //       this.dataArray = response;
  //           const providedUsername = this.loginForm.controls['username'].value;
  //           const providedPassword = this.loginForm.controls['password'].value;
  //           let found = false;

  //           for (let i = 0; i < this.dataArray.length; i++) {
  //             const userData = this.dataArray[i];
  //             if (userData.username === providedUsername && userData.password === providedPassword) {
  //               found = true;
  //               break; // Exit the loop once a match is found
  //             }
  //           }
  //       if (found) {
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         this.error = response.message || 'Invalid username or password';
  //       }
  //     },
  //     (error) => {
  //       // Handle HTTP errors or other subscription errors
  //       console.error('Login error:', error);
  //       this.error = 'An error occurred while logging in';
  //     }
  //   );
  // }
  onLogin(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.user.loginIN(username, password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        //  alert("Login successful");
        //  console.log(">>>>>>>>>>>");
        if (response.token != null || response.token != "") {
          this.router.navigate(['./dashboard']);
          // localStorage.removeItem("token");    
          
        }
      },
      (error) => {
        console.error("Login error:", error);
      }
    );
  }
}
