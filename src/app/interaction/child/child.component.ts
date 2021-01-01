import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() textInp: string;
  @Output() littleEvent = new EventEmitter();
  message = 'LOL';
  constructor() {}

  ngOnInit(): void {}

  emitEvent() {
    this.littleEvent.emit('NO NO');
  }
}
