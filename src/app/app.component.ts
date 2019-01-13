import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'intro';
  name: string;
  username: String;

  public gusers = [];
  public errorMsg;

  constructor(private _apiService: ApiService) {}

  updateUsername(updatedValue) {
    this.username = updatedValue;
    if (updatedValue === 'rohit') {
      alert('Welcome back rohit');
    }
  }

  ngOnInit() {
    this._apiService.getUsers()
      .subscribe(user => {
        this.gusers = user;
        console.log('user:', user);
      }, error => {
        this.errorMsg = error;
      });
  }
}
