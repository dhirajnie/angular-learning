import { Field } from "./field";

export class Definition extends Field {
    id: string;
    elementType: string;
    elementName: string;
    displayName: string;
    definitionDescription: string;
    dataType: string;
    dataOptions: string[] = [];
    dataValue: string;

}