import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { RecipeSectionComponent } from './RecipeSection/RecipeSection.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,HeaderComponent,RecipeSectionComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
