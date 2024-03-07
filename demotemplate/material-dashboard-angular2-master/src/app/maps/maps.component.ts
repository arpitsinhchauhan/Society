import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/notification.service';
import { UserServiceServiceService } from 'app/user-service-service.service';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  productList: any = [];
  apiUrl = 'http://localhost:8080/all';
  apiUrl2 = 'http://localhost:8080/Vehicledata';
  options: any[] = [];
  currentPage = 1; // Current page index
  itemsPerPage = 4;
  vehicle: any = [];
  // options = [];

  // options = [ /* Your list of options for Flate_No */ ];

  constructor(private user: UserServiceServiceService, private http: HttpClient, private notificationService: NotificationService) { }

  ngOnInit() {
    this.getdata();
    this.fetchData();
    this.http.get(this.apiUrl2).subscribe((data) => {
      this.vehicle = data;
      console.log(this.vehicle.length);
    });
  }


  getdata() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    });
  }
  fetchData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data: any[]) => {
        // Assuming your API returns an array of objects with a specific structure
        this.options = data;
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  formData: any = {
    flatenNo: '',
    two_wheeler: '', // Property to store two-wheeler vehicle number
    four_wheeler: '', // Property to store four-wheeler vehicle number
    phone_number: '' // Property to store phone number
  };

  AddVehicledata() {
    console.log('Form Data:', this.formData);

    this.user.AddVehicle(this.formData)
      .subscribe((result: any) => {
        if (result) {
          this.notificationService.showNotification('Data exists in the database');
        } else {
          this.notificationService.showNotification('Data does not exist in the database')
        }
      }, (error: any) => {
        console.error('Error occurred:', error);
        this.notificationService.showNotification('Failed to add data. Please try again.')
      });
    location.reload();
  }

}
