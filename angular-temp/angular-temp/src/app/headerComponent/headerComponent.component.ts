import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../field';


@Component({
  selector: 'app-headerComponent',
  templateUrl: './headerComponent.component.html',
  styleUrls: ['./headerComponent.component.css']
})
export class HeaderComponentComponent extends Field implements OnInit {

  // config: FieldConfig;

  @Input()
  config: any;
  group: FormGroup;
  @Input()
  nextLevelConfig: any;
  ngOnInit() {
    console.log('inside header component')
    console.log(this.config);
  }

}
