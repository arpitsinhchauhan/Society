import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { ProductDialogComponentComponent } from 'app/product-dialog-component/product-dialog-component.component';
import { UserEditComponent } from 'app/user-edit/user-edit.component';
import { UserServiceServiceService } from 'app/user-service-service.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  apiUrl = 'http://localhost:8080/allPay';
  // productList: Map<String, String> | undefined;
  productList: any = [];
  totalRupees: number;

  // Product | undefined;
  // { id: any; Email: any; Phone: any } | undefined
  constructor(
    private http: HttpClient,
    private use: UserServiceServiceService,
    private dialog: MatDialog,
  ) {
    // this.compD = data;
  }

  ngOnInit(): void {
    // console.log(this.compD);
    this.getdata();
  }

  getdata() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
      const jsonArray = this.productList.map(item => ({
        payment_type: item.payment_type,
        type_events: item.type_events,
      }));
      console.log('Created JSON Object:', jsonArray);
      this.calculateTotalRupees();
    });
  }

  openDialog(items: any): void {
    const dialogRef = this.dialog.open(ProductDialogComponentComponent, {
      width: '30%',
      data: items,
    });
  }

  calculateTotalRupees(): void {
    this.totalRupees = this.productList.reduce(
      (total: number, currentItem) => total + Number(currentItem.payment_type),
      0,
    );
    console.log("add" + this.totalRupees);
    // this.use.updateTotalRupees(this.totalRupees);
  }
}
