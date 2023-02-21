import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class BitcoinService {

    constructor(private http: HttpClient) { }

    getRate(coins: number) {
        const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`;
        return this.http.get<number>(url).pipe(
            map(res => res)
        );
    }

    getMarketPrice() {
        const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
        return this.http.get<any>(url).pipe(
            map(res => res)
        );
    }

    getConfirmedTransactions() {
        const url = 'https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true';
        return this.http.get<any>(url).pipe(
            map(res => res)
        );

    }
}