import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  hide = true;
  constructor(private http: HttpClient,
    private router: Router,
    private user: UserServiceService

  ) { }
  ngOnInit(): void { }
  singup: any[] = [];
  Singupobj: any = {
    username: '',
    Email: '',
    password: '',
  };
  loginobj: any = {
    username: '',
    password: '',
  };

  onSingup(data: any) {
    this.user.addUser(data).subscribe((res) => { });
    this.router.navigate(['/dashboard']);     
    location.reload();
  }
}
