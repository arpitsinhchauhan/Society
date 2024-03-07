import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'app/Events';
import { UserServiceServiceService } from 'app/user-service-service.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  total: number;
  apiUrl = 'http://localhost:8080/all';
  productList: any = [];
  productList1: any = [];
  apiUrl2 = 'http://localhost:8080/Vehicledata';
  vehicle: any = [];
  totalRupees: number;
  event: {
    type_events: any,
    payment_type: any
  }
  eveList: Events[] = [];
  // pieChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  // pieChartData: number[] = [300, 500, 200];
  // pieChartType: string = 'pie';

  constructor(private user: UserServiceServiceService, private router: Router,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.productlist();

    this.Revenue();

    this.vehicleLen();

  }

  productlist() {
    this.http.get('http://localhost:8080/all').subscribe((data) => {
      this.productList1 = data;
      console.log("user" + this.productList1.length);
    });
  }

  Revenue() {
    // this.http.get('http://localhost:8080/allPay').subscribe((data) => {
    //   this.productList = data;
    //   console.log(this.productList);
    //   const jsonArray = this.productList.map(item => ({
    //     payment_type: item.payment_type,
    //     type_events: item.type_events,
    //   }));
    //   console.log('Created JSON Object:', jsonArray);
    //   this.calculateTotalRupees();
    // });
    this.http.get('http://localhost:8080/allPay').subscribe((data: any[]) => {
      // Assuming your data is an array of objects with the specified properties
      this.productList = data;

      console.log(this.productList);


      // Create a new array with 'type_events' and 'payment_type'
      let jsonArray = this.productList.map(item => ({
        type_events: item.type_events,
        payment_type: parseFloat(item.payment_type), // Convert payment_type to a number
      }));

      console.log('Created JSON Object:', jsonArray);

      if (jsonArray) {
        jsonArray.forEach((d) => {
          console.log(d.type_events);
          this.eveList.push(d);
        }
        )
        jsonArray.forEach((a) => {
          if (this.eveList.includes(a)) {
            let b: Events = this.eveList.find(ab => ab === a);
            if (!b == undefined) {
              a.payment_type = a.payment_type + b.payment_type;
              console.log("->>" + a);
            }
            jsonArray.splice(a);
            console.log(this.eveList);
            
          }
        })
      }
      // Update pieChartData with the new array
      this.pieChartData = this.eveList.map(item => ({
        name: item.type_events,
        value: item.payment_type,
      }));

      console.log('Updated pieChartData:', this.pieChartData);

      this.calculateTotalRupees();
    });
  }


  vehicleLen() {
    this.http.get(this.apiUrl2).subscribe((data) => {
      this.vehicle = data;
      console.log(this.vehicle.length);
    });
  }

  openGmail() {
    const email = 'example@gmail.com'; // Replace with the desired email address
    const subject = 'Subject of the email'; // Replace with the desired email subject
    const body = 'Body of the email'; // Replace with the desired email body

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }



  pieChartData: any[] = [
    // { name: 'Maintanance', value: 100 },
    // { name: 'Navratri_Celebration', value: 300 },
    // { name: 'Diwali_Celebration', value: 150 },
    // { name: 'Holi_Celebration', value: 100 },
    // { name: 'GaneshChaturthi_Celebration', value: 200 },
  ];

  calculateTotalRupees(): void {
    this.totalRupees = this.productList.reduce(
      (total: number, currentItem) => total + Number(currentItem.payment_type),
      0,
    );
    console.log("add" + this.totalRupees);
  }

}
