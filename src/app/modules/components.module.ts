import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksComponent } from '../components/books/books.component';
import { PrimengModule } from './primeng.module';

@NgModule({ imports: [CommonModule, PrimengModule], declarations: [BooksComponent], exports: [BooksComponent] })
export class ComponentsModule {}
