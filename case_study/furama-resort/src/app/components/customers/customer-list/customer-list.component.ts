import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers;
  search;
  p: any;
  public name: string;
  public id: number;

  constructor(
    public customerService: CustomerService,
    public router: Router
    // public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers);
      })
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CustomerDeleteComponent, {
  //     width: '500px',
  //     // data: {data1: this.name, data2: this.animal},
  //     data: {data1: 'Hello'},
  //
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  getCustomerName(id: number) {
    this.customerService.findById(id).subscribe(
      data => {
        this.name = data.name;
        this.id = data.id;
      })
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCus(id).subscribe(
      data => {
        this.router.navigateByUrl('');
        this.ngOnInit();
        this.p = 1;
      })
  }
}
