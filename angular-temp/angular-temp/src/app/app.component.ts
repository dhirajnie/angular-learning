import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Definition } from "./definition";
import { Group } from "./Group";
import { Header } from "./header";
import { Subordinates } from "./subordinates";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  file: any;
  xmlInputString: any = '';
  showDynForm = false;
  
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

  }


  public onChange(event): void {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log('file loaded');
      this.xmlInputString = fileReader.result;
      this.parseXML();



    }
    // console.log('outer')
    fileReader.readAsText(this.file);

  }
  parseXML() {
    let domParser = new DOMParser();
    let data = domParser.parseFromString(this.xmlInputString, 'application/xml');
    let driverOptionsXML = data.getElementsByTagName('driver-options')[0];
    let driverParentOptions = { elementType: 'definitions', children: [] };
    this.recur(driverOptionsXML, driverParentOptions);
    console.log('-----------------------------------');
    console.log(driverParentOptions);

    console.log('---------------------------------------');
    let subscriberOptionsXML = data.getElementsByTagName('subscriber-options')[0];
    let subscriberOptions = { elementType: 'definitions', children: [] };
    this.recur(subscriberOptionsXML, subscriberOptions);
    console.log(subscriberOptions);
    console.log('--------------------------------------');


    let publisherOptionsXML = data.getElementsByTagName('publisher-options')[0];
    let publisherOptions = { elementType: 'definitions', children: [] };
    this.recur(publisherOptionsXML, publisherOptions);
    console.log(publisherOptions);

    this.showDynForm = true;
  }

  recur(curXMLNode, parentElement) {

    if (!curXMLNode) {
      return;
    }

    else if (curXMLNode.nodeName === 'definition') {
      parentElement.children.push(this.createDefinition(curXMLNode));
      return;
    }
    else if (curXMLNode.nodeName === 'header') {
      parentElement.children.push(this.createHeader(curXMLNode));
      return;
    }
    else {

      if (curXMLNode.nodeName === 'group') {
        let group = new Group();
        group.elementType = 'group';
        parentElement.children.push(group);
        parentElement = group;
      }
      if (curXMLNode.nodeName === 'subordinates') {
        let subordinates = new Subordinates();
        subordinates.elementType = 'subsubordinates';
        subordinates.activeValue = curXMLNode.getAttribute('active-value');
        parentElement.children.push(subordinates);
        parentElement = subordinates;
      }
      for (let i = 0; i < curXMLNode.childElementCount; i++) {
        // console.log('inside loop ' + curnode.nodeName)
        this.recur(curXMLNode.children[i], parentElement);
      }
    }
  }
  createDefinition(curXMLNode) {
    console.log(curXMLNode.getAttribute('display-name'))
    let definition = new Definition();
    definition.elementType = 'definition';
    definition.displayName = curXMLNode.getAttribute('display-name');
    definition.dataType = curXMLNode.getAttribute('type');
    if (curXMLNode.getElementsByTagName('value')[0] !== undefined && curXMLNode.getElementsByTagName('value')[0].childNodes[0] !== undefined)
      definition.dataValue = curXMLNode.getElementsByTagName('value')[0].childNodes[0].nodeValue;
    else {
      definition.dataValue = '';
    }
    if (curXMLNode.getElementsByTagName('description')[0] !== undefined && curXMLNode.getElementsByTagName('description')[0].childNodes[0] !== undefined)
      definition.definitionDescription = curXMLNode.getElementsByTagName('description')[0].childNodes[0].nodeValue;
    return definition;
  }
  createHeader(curXMLNode) {
    let header = new Header();
    header.elementType = 'header';
    header.displayName = curXMLNode.getAttribute('display-name');
    return header;
  }

}
