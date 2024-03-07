import { Component, OnInit } from '@angular/core';
import { feedbackObject } from './feedbackObject';
import { UserServiceServiceService } from 'app/user-service-service.service';
import { NotificationService } from 'app/notification.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  msg: string | undefined;
  users: any;
  constructor(private user: UserServiceServiceService, private notificationService: NotificationService) {
    // this.user.users().subscribe((data) => {
    //   this.users = data;
    // });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  currentRating: number = 0;

  rate(rating: number) {
    this.currentRating = rating;
  }

  getdata(data: feedbackObject) {
    if (data.username == '' || data.username == undefined) {
      alert('username not set.');
      return;
    }
    if (data.email == '' || data.email == undefined) {
      alert('email not set.');
      return;
    }
    if (data.message == '' || data.message == undefined) {
      alert('message not set.');
      return;
    }
    data.rating = this.currentRating;
    this.user.feedback(data).subscribe((res) => { });
    console.info(data);
    if (data) {
      this.notificationService.showNotification('Thanks user for your Feedback...');
    }
    location.reload();
  }

}
