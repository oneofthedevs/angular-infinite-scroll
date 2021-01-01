import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

// Basic

export const fader = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    query(':enter', [
      animate(
        '500ms ease',
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0)',
        })
      ),
    ]),
  ]),
]);

// export const fadeInAnimation =
//   // trigger name for attaching this animation to an element using the [@triggerName] syntax
//   trigger('fadeInAnimation', [
//     // route 'enter' transition
//     transition(':enter', [
//       // css styles at start of transition
//       style({ opacity: 0 }),
//       // animation and styles at end of transition
//       animate('.3s', style({ opacity: 1 })),
//     ]),
//   ]);

// export const slideInOutAnimation = trigger('slideInOutAnimation', [
//   state(
//     '*',
//     style({
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: '#414141',
//     })
//   ),
//   transition(':enter', [
//     style({
//       right: '-400%',
//       background: '#000',
//     }),
//     animate(
//       '.5s ease-in-out',
//       style({
//         right: 0,
//         backgroundColor: '#fff',
//       })
//     ),
//   ]),
//   transition(':leave', [
//     animate('.5s ease-in-out', style({
//       right: '-400%',
//       backgroundColor: '#000'
//     }))
//   ])
// ]);
