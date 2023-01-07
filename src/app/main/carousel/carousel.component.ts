import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'main-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class MainCarouselComponent implements OnInit {

  // constructor(private router: Router) { }

  tabs = ['Promotions %', 'Barbati', 'Femei', 'De toate'];
  selected = new FormControl(0);

  ngOnInit() {
    this.switchTabs();
    // console.log(this.router.url)
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
