import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  user!: User;
  bitcoinRate!: number;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.bitcoinRate = await lastValueFrom(this.bitcoinService.getRate(1));
  }
}
