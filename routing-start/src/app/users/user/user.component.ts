import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: { id: number, name: string };
  paramSubs: Subscription;

  constructor(private route: ActivatedRoute) {

  }
  ngOnDestroy(): void {

    this.paramSubs.unsubscribe();
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramSubs = this.route.params.subscribe(parmas => {
      this.user.id = parmas['id'],
        this.user.name = parmas['name']
    }
    )
  }

}
