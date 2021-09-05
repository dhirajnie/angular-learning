import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('CUSTOMER DASHBOARD LOADED ')
  }

  onAddressClick() {
    this.router.navigate(['address','1'
      // {
      //   // relativeTo: this.route,
      //   name: 'dhiraj', id: "12"
      // },
      //     ],
    ], { relativeTo: this.route }
    );

  }

}
