import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {
  someText = 'TESTANDO O PIPE OPERATOR';

  today = new Date();
 

  constructor() { }

  ngOnInit(): void {      
  }

}
