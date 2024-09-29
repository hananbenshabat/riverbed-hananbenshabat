import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RandomPipe } from '../pipes/random.pipe';

@NgModule({ imports: [CommonModule], declarations: [RandomPipe], exports: [RandomPipe] })
export class PipesModule {}
