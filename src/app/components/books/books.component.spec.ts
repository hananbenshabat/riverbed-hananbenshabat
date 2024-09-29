import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { Book } from '../../models/book.model';
import { LibraryAPIResponse } from '../../models/library-api-response.model';
import { BooksService } from '../../services/books.service';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
    let component: BooksComponent;
    let fixture: ComponentFixture<BooksComponent>;
    let booksServiceSpy: jasmine.SpyObj<BooksService>;
    let messageServiceSpy: jasmine.SpyObj<MessageService>;

    beforeEach(async () => {
        const booksServiceMock = jasmine.createSpyObj('BooksService', ['getBooks']);
        const messageServiceMock = jasmine.createSpyObj('MessageService', ['add']);

        await TestBed.configureTestingModule({
            imports: [FormsModule], // Add FormsModule if [(ngModel)] is used
            declarations: [BooksComponent],
            providers: [
                { provide: BooksService, useValue: booksServiceMock },
                { provide: MessageService, useValue: messageServiceMock }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BooksComponent);
        component = fixture.componentInstance;
        booksServiceSpy = TestBed.inject(BooksService) as jasmine.SpyObj<BooksService>;
        messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch books and update loading state', () => {
        const mockBooks: Book[] = [{ title: 'Mock Book', key: '1' }];
        const mockResponse: LibraryAPIResponse<Book> = {
            docs: mockBooks,
            numFoundExact: true,
            offset: 0
        };

        booksServiceSpy.getBooks.and.returnValue(of(mockResponse));

        component.getBooks('test query');

        expect(component.loadingBooks).toBeTrue();
        expect(booksServiceSpy.getBooks).toHaveBeenCalledWith('test query');

        // Simulate observable response
        fixture.detectChanges();

        expect(component.books).toEqual(mockBooks);
        expect(component.loadingBooks).toBeFalse();
        expect(component.selectedBook).toBeUndefined();
    });

    it('should handle empty search result and show error message', () => {
        const mockResponse: LibraryAPIResponse<Book> = {
            docs: [],
            numFoundExact: false,
            offset: 5
        };

        booksServiceSpy.getBooks.and.returnValue(of(mockResponse));

        component.getBooks('empty query');

        // Simulate observable response
        fixture.detectChanges();

        expect(messageServiceSpy.add).toHaveBeenCalledWith({
            severity: 'error',
            detail: 'Result is missing 5 books',
            life: 10000
        });
        expect(component.books.length).toBe(0);
    });

    it('should debounce search input', fakeAsync(() => {
        spyOn(component, 'getBooks');
        component.debounceGetBooks('debounced query', 300);

        tick(100);
        expect(component.getBooks).not.toHaveBeenCalled();

        tick(200);
        expect(component.getBooks).toHaveBeenCalledWith('debounced query');
    }));

    it('should clear selectedBook when performing a new search', () => {
        component.selectedBook = { title: 'Previously selected book', key: '2' };
        component.getBooks('new search');
        expect(component.selectedBook).toBeUndefined();
    });
});
