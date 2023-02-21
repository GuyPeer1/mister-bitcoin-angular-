import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

const users = [
    {
        "_id": "5a566ca",
        "fullname": "Ofek Ashkenazi",
        "username": "ofeka25",
        "password": 123,
        "balance": 100,
    },
    {
        "_id": "5a5ssss66ca",
        "fullname": "Niv Ashkenazi",
        "username": "niv",
        "password": 123,
        "balance": 100,
    },
]

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _usersDb: User[] = users

    private _users$ = new BehaviorSubject<User[]>([])
    public users$ = this._users$.asObservable()

    constructor() {
    }

    public loadUsers(): void {
        let users = this._usersDb;
        this._users$.next(this._sort(users))
    }

    public getUserById(id: string): Observable<User> {
        //mock the server work
        const user = this._usersDb.find(u => u._id === id)

        //return an observable
        return user ? of(user) : throwError(() => `User id ${id} not found!`)
    }

    public deleteUser(id: string) {
        //mock the server work
        this._usersDb = this._usersDb.filter(u => u._id !== id)

        // change the observable data in the service - let all the subscribers know
        this._users$.next(this._usersDb)
    }

    private _sort(users: User[]): User[] {
        return users.sort((a, b) => {
            if (a.fullname.toLocaleLowerCase() < b.fullname.toLocaleLowerCase()) {
                return -1;
            }
            if (a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        })
    }

    public getUser() {
        let user = {
            "_id": "5a566ca",
            "fullname": "Ofek Ashkenazi",
            "username": "ofeka25",
            "password": 123,
            "balance": 100,
        }
        return user
    }

}