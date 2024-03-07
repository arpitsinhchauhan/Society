import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from 'app/loader.service';
import { NotificationService } from 'app/notification.service';
import { UserAddComponent } from 'app/user-add/user-add.component';
import { UserEditComponent } from 'app/user-edit/user-edit.component';
import { UserServiceServiceService } from 'app/user-service-service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  apiUrl = 'http://localhost:8080/all';
  // productList: Map<String, String> | undefined;
  productList: any = [];
  tableData: any[] = [];
  searchTerm: string = '';
  compD: any;
  dataSource: any[] | undefined; // Your data source array
  currentPage = 1; // Current page index
  itemsPerPage = 4; // Number of items per page


  // Product | undefined;
  // { id: any; Email: any; Phone: any } | undefined
  constructor(
    private http: HttpClient,
    private use: UserServiceServiceService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {
    // this.compD = data;
  }

  ngOnInit(): void {
    // console.log(this.compD);
    this.getdata();
    this.dataSource = [
      /* Your data goes here */
    ];
  }

  getdata() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.productList = data;
      console.log("user"+ this.productList.length);
    });
  }

  deleteRow(id: number) {
    // alert('Product deleted successfully');
    this.use.deleteMember(id).subscribe((result) => {
      this.productList = result;
      this.notificationService.showNotification('Product deleted successfully');
    });
    location.reload();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.productList.filter = filterValue;
  }


  search(): void {
    this.productList = this.productList.filter((item: { email: string }) =>
      item.email.toLowerCase().includes(this.searchTerm.toLowerCase().trim())
    );
    if (this.searchTerm.toLowerCase() === '') {
      location.reload();
    }
  }

  update(id: any) {
    this.http.get(this.apiUrl).subscribe((data) => {


      let dialogRef = this.dialog.open(UserEditComponent, {
        width: '500px',
        height: '400px',
        data: {
          data: id,// Pass the data to the dialog
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        // Handle the result returned from the dialog here
        console.log('Dialog result:', result);
      });
    });

  }


  // Method to change the current page
  pageChanged(event: any): void {
    this.currentPage = event.page;
  }

  



}

