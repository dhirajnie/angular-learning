
import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../field';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-GroupComponent',
  templateUrl: './GroupComponent.component.html',
  styleUrls: ['./GroupComponent.component.css']
})
export class GroupComponentComponent extends Field implements OnInit {

  @Input()
  config: any;

  @Input()
  nextLevelConfig: any;
  // group:FormGroup;

  // get controls() { return this.config.sconfig; }


  ngOnInit() {
    console.log('******8888')
    console.log(this.config);
    //this.group.addControl("driverInfo",this.createGroup());
  }

  // createGroup():FormGroup
  // {
  // let subgroup = new FormGroup({});
  // subgroup.addControl("gconfig",new FormControl());
  // let i=0;

  // this.controls.forEach((control) => {
  //   i++;
  //   subgroup.addControl( i.toString(),
  //      this.createControl(control));

  // });

  // return subgroup;
  // }
  // createControl(config: any) {

  //   return new FormControl();
  // }


}
