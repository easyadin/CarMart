import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor() { }

  toPlay = false;

  ngOnInit(): void {


  }

  domIsLoaded = false;

  animationItem: AnimationItem;

  scrollCount = 0;

  options: AnimationOptions = {
    path: '../../assets/json sequence/data.json',
    autoplay: false
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;

    this.animationItem.play()
  }

  configReady() {
    console.log("configReady")
    this.domIsLoaded = true
  }

  dataReady() {
    console.log("dataReady")
  }

  domLoaded() {
    console.log("domLoaded")
  }

  error($event) {
    console.log(event)
  }

  logScrolling($event) {
    console.log(event)
  }

  ngOnDestroy() {
    this.animationItem.destroy();
  }
}
