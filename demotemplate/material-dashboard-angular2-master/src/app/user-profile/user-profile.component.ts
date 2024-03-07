import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Payment } from 'app/Payment';
import { SingUp } from 'app/SingUp';
import { NotificationService } from 'app/notification.service';
import { UserServiceServiceService } from 'app/user-service-service.service';

declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userNameList: any[] = [];
  constructor(private user: UserServiceServiceService, private notificationService: NotificationService) { }

  form: FormGroup;
  enteredUsername: string;
  enteredEmail: string;
  enteredFlatNo: string;

  ngOnInit() {
    this.user.getAllData().subscribe((response: any[]) => {
      console.log(response)
    });
  }
  @ViewChild(MatAccordion) accordion: MatAccordion;



  selected: {
    inspection_type_id: any,
    description: any
  } = null;
  inspectionTypes: any = [
    { inspection_type_id: 1000, description: 'Maintanance' },
    { inspection_type_id: 800, description: 'Navratri_Celebration' },
    { inspection_type_id: 400, description: 'Diwali_Celebration' },
    { inspection_type_id: 100, description: 'Holi_Celebration' },
    { inspection_type_id: 200, description: 'GaneshChaturthi_Celebration' },
  ];



  showCard: boolean = false;

  toggleCard() {
    const condition = true;
    this.user.checkUserData(this.enteredUsername, this.enteredEmail, this.enteredFlatNo)
      .subscribe((result: any) => {
        if (result) {
          this.notificationService.showNotification('Data exists in the database')
          this.showCard = !this.showCard;
        } else {
          this.notificationService.showNotification('Data does not exist in the database')
        }
      });
    // this.notificationService.showNotification('Data does not exist in the database')
  }

  // PaymentAdd(id: any) {
  //   console.log("dec" + this.selected.description, "se" + this.selected.inspection_type_id);
  //   // this.user.getPayment(id).subscribe((response: any[]) => {
  //   // });
  // }


  selectedVariable: string;

  onPanelClick(variableName: string): void {
    this.selectedVariable = variableName;
    // console.log('Selected Variable:', this.selectedVariable);
    // You can now use this.selectedVariable as needed
  }
  PaymentAdd(): void {
    this.user.setPayment(this.enteredFlatNo, this.selected.inspection_type_id, this.selectedVariable, this.selected.description)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          // Handle success, update UI, etc.
          this.notificationService.showNotification('Payment Succefully');
        },
        (error) => {
          console.error('API Error:', error);
          // Handle error, display error message, etc.
        }
      );

  }



}
