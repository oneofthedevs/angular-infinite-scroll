import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  textbox1: string = '';
  @ViewChild(ChildComponent) child;

  constructor() {}

  ngOnInit(): void {
    // this.textbox1 = this.child.message;
  }

  ngAfterViewInit(): void {}

  changeText($event) {
    alert($event);
  }
}
