import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialComponent = [
  CommonModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSliderModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatTableModule,
  MatDividerModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatListModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class AppMaterialModule { }
