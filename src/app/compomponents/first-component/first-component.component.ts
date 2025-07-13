import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {
  constructor() { }
  name: string = 'Mohandas';
  age: number = 40;
 job: string = 'Software Developer';
 hobbies = ['Music', 'Movies', 'Sports'];
 car = {
    name: 'Ford',
    year: 2020
  }
  ngOnInit(): void { }

}
