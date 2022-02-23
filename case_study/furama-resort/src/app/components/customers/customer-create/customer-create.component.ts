import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {CustomerType} from "../../../../model/customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  public formAddNewCustomer: FormGroup;
  public customerTypes: CustomerType[];

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    // private customerTypeService: CustomerTypeService
  ) {
  }

  ngOnInit(): void {
    this.formAddNewCustomer = this.formBuilder.group({
        // cus_id: ['', [Validators.required, Validators.pattern("^KH-[\\d]{4}$")]],
        name: ['', [Validators.required]],
        birthday: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        card: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern("^((0|\\+84){1})+([90|91]{2})+(\\d{7})$")]],
        // email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
        //   + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
        email: ['', [Validators.required, Validators.email]],
        cus_type: ['', [Validators.required]],
        address: ['', [Validators.required]]
      })

    this.customerService.getAllCustomerType().subscribe(
      data=>{
        this.customerTypes = data;
      })
  }

  addNewCustomer() {
    this.customerService.addNewCustomer(this.formAddNewCustomer.value).subscribe(data => {
      this.router.navigateByUrl('customer-list')
      console.log(this.formAddNewCustomer)
    })
  }
}
