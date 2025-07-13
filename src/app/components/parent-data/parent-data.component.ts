import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: false,
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {
 @Input() name: string = '';
 @Input() userData!: {email: string, role: string};
 @Input() userAddress!: {street: string, number: number, color: string, house: string, garden: string };
 @Input() userCar!: {brand: string, model: string, year: number};
 @Input() userCompany!: {name: string, cnpj: string, address: string};
 @Input() userMarket!: {list: {name: string, price: number, quantity: number}[]};
 
 

  constructor() {}
  ngOnInit(): void {}

}
