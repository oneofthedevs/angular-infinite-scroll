import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animate.class';
// import { fadeInAnimation, slideInOutAnimation } from './animate.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    // fadeInAnimation,
    // slideInOutAnimation
  ],
})
export class AppComponent {
  title = 'infiniteScrollExample';

  perpareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
