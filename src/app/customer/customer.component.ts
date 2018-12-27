import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[] = [];
  selectedCustomer:Customer;
  @Input() myCity:string;
  ngOnInit() {
    this.customers=[
      {id:1,firstName:"Ahmet",lastName:"Yıldırım",age:30},
      {id:2,firstName:"Mehmet",lastName:"Yılmaz",age:32},
      {id:3,firstName:"Murat",lastName:"Demir",age:33}
    ];
  }
  selectCustomer(customer:Customer){
    this.selectedCustomer =customer;
    // alert(customer.firstName)
  }



}
