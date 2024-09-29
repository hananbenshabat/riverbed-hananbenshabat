import { Author } from './author.model';

export class Book {
    key?: string;
    title?: string;
    subtitle?: string;
    authors?: Author[];
    publish_date?: string;
    publish_year?: number[];
    cover_i?: number;
    isbn?: string[];
    number_of_pages?: number;
    subjects?: string[];
    edition_key?: string[];
    lang?: string[];
    description?: string;

    constructor(book?: Partial<Book>) {
        Object.assign(this, book);
    }
}
