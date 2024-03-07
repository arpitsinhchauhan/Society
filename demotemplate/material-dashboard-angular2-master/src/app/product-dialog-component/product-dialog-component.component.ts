import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog-component',
  templateUrl: './product-dialog-component.component.html',
  styleUrls: ['./product-dialog-component.component.css']
})
export class ProductDialogComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

  printData(): void {
    // Add your printing logic here
    // For example, you can call the browser's print functionality
    window.print();
  }

}
