import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddCollectionComponent } from '../add-collection/add-collection.component';
import { ImageUploadComponent } from 'src/app/upload/image-upload/image-upload.component';
import { AddOnComponent } from '../add-on/add-on.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  collectionCtrl = new FormControl();
  filteredCollections: Observable<string[]>;
  collections: string[] = ['All'];
  allCollections: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Offer of the day', 'Sweets'];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  @ViewChild('collectionInput') collectionInput: ElementRef<HTMLInputElement>;


  constructor(
    public addItemDialogRef: MatDialogRef<AddItemComponent>,
    private dialog: MatDialog

  ) {
    this.filteredCollections = this.collectionCtrl.valueChanges.pipe(startWith(null),
      map((collection: string | null) => collection ? this._filter(collection) : this.allCollections.slice()));

   }

  ngOnInit(): void {
  }

  onUpload(){
    this.dialog.open(ImageUploadComponent);
  }

  onClose() {
    this.addItemDialogRef.close();
  }

  openAddOn() {  
    this.dialog.open(AddOnComponent);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our collection
    if (value) {
      this.collections.push(value);
    }

    // // Clear the input value
    // event.chipInput!.clear();

    this.collectionCtrl.setValue(null);
  }

  remove(collection: string): void {
    const index = this.collections.indexOf(collection);

    if (index >= 0) {
      this.collections.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.collections.push(event.option.viewValue);
    this.collectionInput.nativeElement.value = '';
    this.collectionCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCollections.filter(collection => collection.toLowerCase().includes(filterValue));
  }

  onCreateCollection(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "65%";
    dialogConfig.height = "fit-content";    
    this.dialog.open(AddCollectionComponent, dialogConfig);
  }
}
