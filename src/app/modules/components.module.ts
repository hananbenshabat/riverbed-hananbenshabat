import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from '../components/books/books.component';
import { ToolbarHeaderComponent } from '../components/toolbar-header/toolbar-header.component';
import { PipesModule } from './pipes.module';
import { PrimengModule } from './primeng.module';

@NgModule({
    imports: [CommonModule, FormsModule, PipesModule, PrimengModule],
    declarations: [BooksComponent, ToolbarHeaderComponent],
    exports: [BooksComponent, ToolbarHeaderComponent]
})
export class ComponentsModule {}
