import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: 'joaquim@email.com',
    role: 'Admin'
  }
  userAddress = {
    street: 'Rua dos bobos',
    number: 0,
    color: 'red',
    house: 'Grande',
    garden:'Sim'
  }
  userCar = {
    brand: 'Fiat',
    model: 'Uno',
    year: 2019
  }
  userCompany = {
    name: 'Sell',
    cnpj: '12345678901234',
    address: 'Av. Pompeia, 645'
  }
  userMarket = {
    list: [
      {
        name: 'Arroz',
        price: 10.00,
        quantity: 2
      },
      {
        name: 'Feijão',
        price: 8.00,
        quantity: 1
      },
      {
        name: 'Macarrão',
        price: 5.00,
        quantity: 3
      }
    ]
  }

  
 
  title = 'curso-angular';
}

