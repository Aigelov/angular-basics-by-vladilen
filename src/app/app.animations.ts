import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const boxAnimation = trigger('box', [
  state('start', style({background: 'green'})),
  state('end', style({
    background: 'brown',
    transform: 'scale(1.2)'
  })),
  state('special', style({
    background: 'orange',
    borderRadius: '50%',
    transform: 'scale(0.5'
  })),
  transition(
    'start <=> end',
    animate('600ms ease-in-out')
  ),
  transition(
    'special <=> *',
    [
      group([
        query('h4', animate(1500, style({
          color: 'red',
          fontSize: '.5rem'
        }))),
        style({background: 'purple'}),
        animate('700ms', style({
          background: 'pink'
        })),
        animate(750)
      ])
    ]
  ),
  // void => *
  transition(':enter', [
    animate('1s', keyframes([
      style({background: 'red', offset: 0}),
      style({background: 'black', offset: 0.2}),
      style({background: 'orange', offset: 0.3}),
      style({background: 'brown', offset: 1}),
    ]))
  ]),
  // * => void
  transition(':leave', [
    style({opacity: 1}),
    group([
      animate(750, style({
        opacity: 0,
        transform: 'scale(1.2)'
      })),
      animate(300, style({
        color: '#000',
        fontWeight: 'bold'
      }))
    ])
  ])
]);

