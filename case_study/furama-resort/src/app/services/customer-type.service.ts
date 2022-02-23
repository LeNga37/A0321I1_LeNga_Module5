import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private URL_API: string='http://localhost:3000/customerTypes';

  constructor(
    private http: HttpClient
  ) { }

  // // @ts-ignore
  // getAllCustomerType(): Observable<any>{
  //   return this.http.get(this.URL_API)
  // }
}
