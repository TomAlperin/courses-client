import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  open:boolean = true;
  desktop:boolean = true;

  ngOnInit() {
    this.toggle(false);
  }

  toggle(toggle:boolean) {
    if (window.innerWidth < 990) {
      if (toggle) {
        this.open = !this.open;
      } else {
        this.open = false;
      }
      this.desktop = false;
    } else {
      this.desktop = true;
      this.open = true;
    }
  }

  close = () => {
    if (window.innerWidth < 990) {
      this.open = false;
    }
  }

  hideButton() {

  }

 }
