export class Book {
    constructor(
        public id?:number,
        public title?: string,
        public gender?: string,
        public pages?: Number,
        public author?: string,
        public isbn?: number,
        public publish?: string,
        public status?: boolean,
        public type?: string 
    ){}
}