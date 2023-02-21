export class User {

    public _id?: string = ''
    public moves: any[] = []
    constructor(
        public fullname: string = '',
        public username: string = '',
        public password: number | undefined,
        public balance: number = 100

    ) {
    }

}