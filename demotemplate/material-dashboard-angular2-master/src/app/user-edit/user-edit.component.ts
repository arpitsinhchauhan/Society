import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingUp } from 'app/SingUp';
import { NotificationService } from 'app/notification.service';
import { UserServiceServiceService } from 'app/user-service-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  x: SingUp;
  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<UserEditComponent>,
    private userservice: UserServiceServiceService, private notificationService: NotificationService) {
    this.x = data.data
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  Singupobj: any = {
    id: '',
    username: '',
    Email: '',
    role: '',
    flatenNo: '',
    password:''
  };

  // Edit(data: any) {
  // const apiUrl = 'http://localhost:8080/edit';

  //   const updatedUserData = {
  //     username: data.username,
  //     Email: data.data.email,
  //     password: data.data.password,
  //     flateNo: data.data.flateNo,
  //   };

  //   this.http.put(apiUrl, updatedUserData).subscribe((res) => {
  //     this.dialogRef.close();
  //   }, (error) => {
  //     console.error('Error updating user data:', error);
  //   });
  // }

  // Edit(formData: any) {
  //   const apiUrl = 'http://localhost:8080/edit';
  //   const username = formData.username;
  //   const email = formData.email;


  //   this.http.put(apiUrl, formData).subscribe(
  //     (response) => {
  //       console.log('User data updated successfully', response);
  //       this.close();
  //     },
  //     (error) => {
  //       console.error('Error updating user data:', error);
  //     }
  //   );
  // }





  Edit(singupobj: any) {
    // singupobj.ID=this.x.id;
    this.userservice.getUpdate(singupobj).subscribe(
      (response) => {
        console.log('Society data updated successfully', response);
        this.notificationService.showNotification('User data updated successfully');
      },
      (error) => {
        console.error('Error updating society data:', error);
        this.notificationService.showNotification('Error updating user data not update:');
      }
    );
    location.reload();
  }

}
