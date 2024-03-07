import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SingUp } from '../SingUp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginForm!: FormGroup;
  data: any = [];
  sign: SingUp = new SingUp();
  dataArray!: any[];
  constructor(private user: UserServiceService, private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  // email: string = '';
  // password: string = '';
  loginError: string = '';


  // private authService: ServiceService, private router: Router

  onLogin() {
    this.user.getAllData().subscribe((response: any) => {
      this.dataArray = response;
      let x = this.dataArray[0].username;
      console.log(response.username);
      if (this.loginForm.controls['username'].value == x) {
        console.warn("successfully");
        this.router.navigate(['/dashboard']); 
      }
    });
  }


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


}
