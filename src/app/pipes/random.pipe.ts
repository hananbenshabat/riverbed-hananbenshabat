import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'random' })
export class RandomPipe implements PipeTransform {
    transform(max = 1, min = 0): number {
        if (min > max) {
            [min, max] = [0, min];
        }

        return Math.round(Math.random() * (max - min) + min);
    }
}
