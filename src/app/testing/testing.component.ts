import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  nama: any;

  testEvent(){
    alert('hahahahah');
  }

  constructor() { }

  ngOnInit(): void {
    this.nama = "Agik Setiawan";
  }

}
