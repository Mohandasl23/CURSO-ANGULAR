import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: false,
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  animals: Animal [] = [
    {name:'Turca', type: 'Dog', age: 4},
    {name:'Tom', type: 'Cat', age: 10},
    {name:'Frida', type: 'Dog', age: 5},
    {name:'Bob', type: 'Horse', age: 1},
  ];

  animal = {
    name:'Teste',
    type: 'Alguma coisa',
    age: 10,
  };

  animalDetails = ''

  constructor() { }

  ngOnInit(): void { }
  showAge(animal: Animal): void { 
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`

  }

}
