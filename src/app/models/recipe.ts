export class Recipe {
    constructor(
        public title: string,
        public descript: string,
        public ingredients: string,
        public directions: string,
        public main: string,
        public type: string,
        public cuisine: string,
        public posted_by: string
    ) { }
}
