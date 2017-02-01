import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent {
  open:boolean = false;
  @Input() title:string;
  @Input() search:Function;

  toggle(toggle:boolean) {
    if (window.innerWidth < 990) {
      if (toggle) {
        this.open = !this.open;
      } else {
        this.open = false;
      }
    } else {
      this.open = false;
    }
  }
}