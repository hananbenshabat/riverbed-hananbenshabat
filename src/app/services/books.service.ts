import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { LibraryAPIResponse } from '../models/library-api-response.model';

const API_PATH = 'http://localhost:5000/api/books';

@Injectable({ providedIn: 'root' })
export class BooksService {
    constructor(private http: HttpClient) {}

    getBooks(query: string): Observable<LibraryAPIResponse<Book>> {
        const res = this.http.get<LibraryAPIResponse<Book>>(`${API_PATH}?q=${query}`);

        return res;
    }
}
