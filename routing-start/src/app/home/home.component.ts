import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(serverId: number) {

    this.router.navigate(['/servers', serverId, 'edit'], {
      queryParams: { allowEdit: 'true' },
      fragment: 'loading'
    });
  }


  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
