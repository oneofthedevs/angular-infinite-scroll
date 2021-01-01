import { Component, OnInit } from '@angular/core';
// import { slideInOutAnimation } from '../animate.class';

@Component({
  selector: 'app-slide-show-page',
  templateUrl: './slide-show-page.component.html',
  styleUrls: ['./slide-show-page.component.scss'],
  // animations: [slideInOutAnimation],
  // host: { '[@slideInOutAnimation]': '' }
})
export class SlideShowPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
