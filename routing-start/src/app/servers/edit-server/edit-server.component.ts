import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';

  serverStatus = '';
  allowEdit: boolean;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {

    // this.route.queryParams.subscribe(console.log);
    // this.route.fragment.subscribe(console.log);
    // this.route.queryParams.subscribe(console.log);

    this.route.queryParams.subscribe(params => {
      this.server = this.serversService.getServer(+params['id']);
      this.allowEdit = params['allowEdit'] ? true : false;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
