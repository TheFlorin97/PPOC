import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  tabs = ['Promotions %', 'Barbati', 'Femei', 'De toate'];
  selected = new FormControl(0);

  ngOnInit() {
    this.switchTabs();
  }


  switchTabs() {
    setInterval(() => {
      if (this.selected.value != null) {
        if (this.selected.value < this.tabs.length - 1) {
          this.selected.setValue(this.selected.value + 1)
        } else {
          this.selected.setValue(0)
        }
      } else {
        this.selected.setValue(0);
      }
    }, 7000)
  }
}
