import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testing',
  template: `
    <p>
      testing works!
    </p>
  `,
  styles: [
  ]
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}