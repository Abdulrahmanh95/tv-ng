import { animate, style, transition, trigger } from '@angular/animations';

export function fadeInRightAnimation(duration: number) {
  return trigger('fadeInLeft', [
    transition(':enter', [
      style({
        transform: 'translateX(-2rem)',
        opacity: 0
      }),
      animate(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
        transform: 'translateX(0)',
        opacity: 1
      }))
    ])
  ]);
}

export const fadeInLeft400ms = fadeInRightAnimation(400);
