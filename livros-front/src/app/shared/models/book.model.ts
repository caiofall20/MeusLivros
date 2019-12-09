export class Book {
    constructor(
        public id?:number,
        public title?: string,
        public author?: string,
        public publishy_company?: string,
        public gender?: string,
        public type?: string ,
        public category?: string,
        public number_pages?: number,
        public isbn?: number,
        public status?: boolean
       
    ){}
}