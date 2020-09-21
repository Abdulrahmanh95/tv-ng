import { animate, style, transition, trigger } from '@angular/animations';

export function fadeInAnimation(duration: number) {
  return trigger('fadeIn', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate(duration + 'ms ease-in', style({
        opacity: 1
      }))
    ]),
    transition(':leave',
      animate(duration + 'ms ease-in', style({opacity: 0}))
    )
  ]);
}

export const fadeIn400ms = fadeInAnimation(400);
export const fadeIn600ms = fadeInAnimation(600);
