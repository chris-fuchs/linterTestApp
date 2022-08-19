import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title=''
  // FALSE NEGATIVE:
  // only one semicolons (not 0 not more than 1)
  // https://eslint.org/docs/latest/rules/semi

 foo : string[] = [
    'apples',
    'oranges',
    'bananas'
  ];

  bar : string[] = [
    'one',
    'two',
    'three'
  ];


  constructor() { }

  ngOnInit(): void {
    // TRUE POSITIVE:
    // Lifecycle methods should not be empty
  }

  getHref(): String {
    return "www.google.com";
  }
}
