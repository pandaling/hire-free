import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: string[];

  constructor(
    private httpHome: HomeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getDeveloperList();
  }

  async getDeveloperList() {
    this.httpHome.getDeveloperList()
      .subscribe((res: any) => {
        this.users = res.data.users;
      },
      err => {
        console.log(err.message || err);
      });
  }

  updateUser(user) {
    this.router.navigate(['add-new-developer'], { queryParams: user });
  }

  deleteUser(_id) {
    this.httpHome
      .deleteUser(_id)
      .subscribe((res: any) => this.getDeveloperList(), err => console.error(err.message || err));
  }
}
