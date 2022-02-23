import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API: string='http://localhost:3000/customers';
  private URL_API: string='http://localhost:3000/customerTypes';

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomer(): Observable<any>{
    return this.http.get(this.API)
  }

  // @ts-ignore
  addNewCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<any>(this.API,customer);
  }

  // @ts-ignore
  getAllCustomerType(): Observable<any>{
    return this.http.get(this.URL_API)
  }

  // @ts-ignore
  findById(id:any): Observable<any>{
    return this.http.get(this.API+"/"+id);
    console.log(id)
  }

  deleteCus(id: number): Observable<any>{
    return this.http.delete(this.API+"/"+id)
  }

  updateCustomer(obj:any):Observable<any>{
    return this.http.put(this.API +'/'+obj.id,obj)
  }
}
