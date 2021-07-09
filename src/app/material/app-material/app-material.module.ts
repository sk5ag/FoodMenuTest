import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


const MaterialComponent = [
  CommonModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSliderModule,
  MatGridListModule,
  FormsModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class AppMaterialModule { }
