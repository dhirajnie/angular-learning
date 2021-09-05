import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    /**  
     * Loading server data using resolver at router level
     */


    this.route.data.subscribe((data)=>{ this.server= data['server']});

    /** 2nd and NORMAL way to load data  */
    // this.server = this.serversService.getServer(1);
    // console.log(this.route.snapshot);
    // console.log(this.route.queryParamMap)
    // this.route.queryParams.subscribe(params => {
    //   console.log(params)
    //   this.server = this.serversService.getServer(+this.route.snapshot.params['id']);

    //   console.log(this.server)
    // })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    //  {
    //   relativeTo: this.route,
    //   queryParamsHandling: 'preserve'
    // });
  }

}
