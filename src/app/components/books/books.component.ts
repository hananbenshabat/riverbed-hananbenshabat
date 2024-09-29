import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Book } from '../../models/book.model';
import { LibraryAPIResponse } from '../../models/library-api-response.model';
import { BooksService } from '../../services/books.service';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrl: './books.component.scss'
})
export class BooksComponent {
    books: Book[] = [];
    selectedBook?: Book;
    loadingBooks = false;
    loadingSelectedBook = false;
    debouncedCallback?: any;
    inputSearch?: string;

    constructor(
        private booksService: BooksService,
        private messageService: MessageService
    ) {}

    getBooks(query: string): void {
        this.selectedBook = undefined;
        this.books = [];
        this.loadingBooks = true;

        this.booksService.getBooks(query).subscribe((data?: LibraryAPIResponse<Book>) => {
            this.books = data?.docs || [];
            this.loadingBooks = false;

            if (!data?.numFoundExact) {
                this.messageService.add({
                    severity: 'error',
                    detail: `Result is missing ${data?.offset} books`,
                    life: 10000
                });
            }
        });
    }

    debounceGetBooks(query: string, delayMiliseconds = 300): void {
        clearTimeout(this.debouncedCallback);
        this.debouncedCallback = setTimeout(() => this.getBooks(query), delayMiliseconds);
    }
}
