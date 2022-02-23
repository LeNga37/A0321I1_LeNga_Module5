import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {Customer} from "../../../../model/customer";
import {CustomerType} from "../../../../model/customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  formEdit: FormGroup
  customer: Customer;
  customerTypes: CustomerType[];


  constructor(
    private activatedRoute:ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      id:[],
      name: [,[Validators.required]],
      birthday: [ ,[Validators.required]],
      gender: [ ,[Validators.required]],
      card: [ ,[Validators.required]],
      phone: [ ,[Validators.required, Validators.pattern("^((0|\\+84){1})+([90|91]{2})+(\\d{7})$")]],
      // email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
      //   + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
      email: [ ,[Validators.required, Validators.email]],
      cus_type: [ ,[Validators.required]],
      address: [ ,[Validators.required]]
      // id:[],
      // name: [],
      // birthday: [],
      // gender: [],
      // card: [],
      // phone: [],
      // // email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
      // //   + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
      // email: [],
      // cus_type: [],
      // address: []
    })

    this.customerService.getAllCustomerType().subscribe(
      data => {
        this.customerTypes = data;
      });

    this.activatedRoute.paramMap.subscribe(
      (param)=>{
        const id=param.get('id');
        this.customerService.findById(id).subscribe(
          data=>{
            this.customer=data;
            console.log(data)
            this.formEdit.setValue(this.customer);
          })
      })
  }
  compareFn(c1: CustomerType, c2: CustomerType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit() {
    if(this.formEdit.valid){
        this.customerService.updateCustomer(this.formEdit.value).subscribe(
          ()=>{
            this.router.navigateByUrl('customer-list')
          }
        )
    }
  }
}
