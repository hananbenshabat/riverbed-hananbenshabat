export class Author {
    key?: string;
    name?: string;

    constructor(author?: Partial<Author>) {
        Object.assign(this, author);
    }
}
