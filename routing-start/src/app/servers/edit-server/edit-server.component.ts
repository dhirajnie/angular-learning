import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../can-deactivate.service';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean;
  changesSaved: boolean;

  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('on edit component load')
    this.route.queryParams.subscribe(params => {
      this.allowEdit = params['allowEdit'] === 'true' ? true : false;
      console.log(params)

    });
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    console.log(this.server)

    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  canDeactivate(): boolean {
    if (!this.allowEdit) {
      return true;

    }
    if ((this.serverName != this.server.name || this.serverStatus != this.server.status) &&
      !this.changesSaved) {
      // return false;
      return confirm('Do you want to discard changes?')
    }
    else {
      return true;
    }
  }
}