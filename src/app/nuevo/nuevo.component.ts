import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-nuevo]',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { 
    console.log('Se ejecuto el constructor');
  }

  ngOnInit(): void {
    console.log('Se ejecuto el ngOnInit');
  }

}
