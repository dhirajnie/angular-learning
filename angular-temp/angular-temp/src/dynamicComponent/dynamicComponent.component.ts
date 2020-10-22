

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dynamicComponent',
  templateUrl: './dynamicComponent.component.html',
  styleUrls: ['./dynamicComponent.component.css']
})
export class DynamicComponentComponent implements OnInit {

  config: any;


  parentForm: FormGroup;

  @Output() fieldChanges = new EventEmitter();

  constructor(private fb: FormBuilder) { }


  get controls() {

    // this.config =
    return
    this.config;
  }
  ngOnInit() {
    // this.config = this.service.getMainFields();
    console.log("config fields");
    console.log(this.config);
    this.parentForm = new FormGroup(
      {
        "maincomponent1": new FormControl(),


      }
    );
    console.log('executed form');
    console.log(this.parentForm);
    console.log(this.parentForm.controls);
    // this.group = this.fb.group( this.createGroup())

  }


  // createGroup()
  // {
  //   console.log(this.group);
  //   console.log(this.config);
  //   this.group.addControl("headerField",this.createControl(this.config[0].headerConfig));
  //   this.group.addControl("GroupField",this.createControl(this.config[0].groupConfig));
  //   return this.group;
  //   }
  // createControl(f: any): FormControl {
  //   console.log(f);
  //   if (f instanceof FieldConfig) {
  //     return this.fb.control(f.key);
  //   }
  //   if (f instanceof GroupFieldConfig) {
  //     return this.fb.control(f.config.key);
  //   }
  // }



}
