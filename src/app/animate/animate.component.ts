import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp, flipOutX, lightSpeedIn, pulse } from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button
      class="btn"
      (click)="visible = !visible"
    >Toggle</button>
    <hr />
    <div
      [@bounce]
      *ngIf="visible"
      class="rect"
    ></div>
  `,
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(lightSpeedIn, {
        params: {
          timing: 0.5
        }
      })),
      transition('* => void', useAnimation(flipOutX, {
        params: {
          timing: 0.7,
          delay: 0.1
        }
      }))
    ])
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
