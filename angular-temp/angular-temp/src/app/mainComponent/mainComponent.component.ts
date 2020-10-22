
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormControlDirective } from '@angular/forms';

import { Field } from '../field';
import { Group } from '../Group';
import { Header } from '../header';
import { Subordinates } from '../subordinates';

@Component({
  selector: 'app-mainComponent',
  templateUrl: './mainComponent.component.html',
  styleUrls: ['./mainComponent.component.css']
})
export class MainComponentComponent extends Field implements OnInit {

  // @Input()
  // config:MainFieldConfig;

  // @Input()
  config: any[] = [];

  // @Input()
  // group:FormGroup;
  // @Output() fieldChanges = new EventEmitter();

  constructor(private fb: FormBuilder) {

    super();
    console.log("maincomponent");
    let header = new Header();
    header.displayName = 'first header';
    header.elementType = 'header';
    let group = new Group();


    group.elementType = 'group';
    group.labelName = 'group'
    this.config.push(header);

    let groupheader = new Header();
    groupheader.displayName = 'Group Header';
    groupheader.elementType = 'header';
    group.children.push(groupheader);


    this.config.push(group);

    console.log(this.config);


    let subOrd = new Subordinates();
    subOrd.elementType = 'subordinate'
    subOrd.activeValue = "sub-active";
   
    // console.log(this.group);
  }

  ngOnInit() {



    // console.log("main component");
    // console.log(this.config);
    // console.log(this.group);
    // this.group.setControl("driverInfo", new FormGroup({
    //   "headerField": new FormControl(),
    //   "GroupField": new FormControl()
    // }));

  }
  // createControl(f: any): FormControl {
  //   console.log(f);
  //   if (f instanceof FieldConfig) {
  //     return new FormControl(f.key);
  //   }
  //   if (f instanceof GroupFieldConfig) {
  //     return new FormControl(f.config.key);
  //   }
  // }
}
