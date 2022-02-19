import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

 @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}
