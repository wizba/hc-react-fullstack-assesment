import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,HeaderComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
