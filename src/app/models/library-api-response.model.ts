export class LibraryAPIResponse<T> {
    docs?: T[];
    numFound?: number;
    numFoundExact?: boolean;
    num_found?: number;
    offset?: number;
    q?: string;
    start?: number;

    constructor(libraryAPIResponse?: Partial<LibraryAPIResponse<T>>) {
        Object.assign(this, libraryAPIResponse);
    }
}
