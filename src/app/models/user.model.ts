export class User {

    public _id?: string = ''
    constructor(
        public fullname: string = '',
        public username: string = '',
        public password: number | undefined,
        public balance: number = 100

    ) {
    }

}