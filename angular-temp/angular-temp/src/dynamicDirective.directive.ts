
import { Component, ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnChanges, OnInit, Output, Type, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Field } from "./app/field";
import { GroupComponentComponent } from "./app/GroupComponent/GroupComponent.component";
import { HeaderComponentComponent } from "./app/headerComponent/headerComponent.component";
import { MainComponentComponent } from "./app/mainComponent/mainComponent.component";
import { SubOrdinatesComponentComponent } from "./app/SubOrdinatesComponent/SubOrdinatesComponent.component";



@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective extends Field implements OnChanges, OnInit {
  @Input()
  config: any;



  @Input()
  group: FormGroup;

  @Output() fieldChanged = new EventEmitter<any>();
  component: ComponentRef<any>;




  constructor(


    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,

    // private translate: TranslateService
  ) {

    super();
    console.log("dynmaci fiedl directive");
    console.log(this.config);
  }

  ngOnChanges() {

    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.fieldChanged = this.fieldChanged;
    }
  }

  ngOnInit() {
    console.log("ngoninit in dynamcifield directive");

    const component = this.resolver.resolveComponentFactory<any>(this.getComponent(this.config));
    this.component = this.container.createComponent(component);
    this
    this.component.instance.config = this.config;
    this.component.instance.nextLevelConfig = this.config.children;


  }






  getComponent(field: any): Type<Component> {
    console.log(field.elementType);
    let component;
    switch (field.elementType) {
      case "mainField":
        {
          component = MainComponentComponent;
          break;
        }
      case "header":
        {
          component = HeaderComponentComponent;
          break;
        }
      case "group":
        {
          component = GroupComponentComponent;
          break;
        }
      case "subordinate":
        {
          component = SubOrdinatesComponentComponent;
          break;
        }
      // case "enum":
      //   {
      //     component = FormCheckboxComponent;
      //     break;
      //   }
      // case "text":
      //   {
      //     component = FormTextfieldComponent;
      //     break;
      //   }
      // case "ip-address":
      //   {
      //     component = FormIpaddressComponent;
      //     break;
      //   }

    }
    console.log(component);
    return component;
  }

}
