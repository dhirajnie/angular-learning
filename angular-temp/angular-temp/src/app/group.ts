import { Field } from "./field";
import { Header } from "./header";

export class Group extends Field {
    id: string;
    elementType: string;
    elementValue: string;
    labelName: string;
    children: any[] = [];


}