import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  username!: string | ''

  onSaveUser() {
    this.userService.signup(this.username)
    this.router.navigateByUrl('/')
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

}