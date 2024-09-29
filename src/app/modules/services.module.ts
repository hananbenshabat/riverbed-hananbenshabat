import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksService } from '../services/books.service';

@NgModule({ imports: [CommonModule], providers: [BooksService] })
export class ServicesModule {}
