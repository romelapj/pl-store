import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  company : string = "Guafa";
  nameProduct :string="";

  constructor() { }

  ngOnInit(): void {
  }

}
