
import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../field';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-SubOrdinatesComponent',
  templateUrl: './SubOrdinatesComponent.component.html',
  styleUrls: ['./SubOrdinatesComponent.component.css']
})
export class SubOrdinatesComponentComponent extends Field implements OnInit {


  @Input()
  config: any;

  @Input()
  nextLevelConfig: any;

  // @Input()
  // config:SubordinateFieldConfig;

  // @Input()
  // group:FormGroup;

  // get groupControls() { return this.config.groups; }

  // get configControls(){ return this.config.configs;}


  ngOnInit() {
    //this.group.addControl("driverInfo",this.createGroup());
  }


  // createGroup():FormGroup
  // {
  // let subgroup = new FormGroup({});
  // subgroup.addControl("sconfig",new FormControl());
  // let i=0;
  // let j=0;
  // this.groupControls.forEach((control) => {
  //   j++;
  //   subgroup.addControl( j.toString(),
  //      this.createControl(control));

  // });

  // this.groupControls.forEach((control) => {
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
