import { Component, Input } from '@angular/core';

class Heading {
    public title?:string;
    public key?:string | Function;
    public icon?:string;
    public color?:string;
    public tooltip?:string;

    constructor(heading:Heading) {
        this.title = heading.title || '';
        this.key = heading.key || null;
        this.icon = heading.icon || 'fa-pencil',
        this.color = heading.color || '#333';
        this.tooltip = heading.tooltip || null;
    }
}

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() headings:Heading[];
  @Input() tableData:any;
  
  isFunction(key:string | Function) {
    return typeof(key) == 'function';
  }
}