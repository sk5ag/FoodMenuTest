import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ItemComponent } from '../item/item.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserPreferencesService } from 'src/app/shared/user-preferences.service';
import { CartSnakbarComponent } from './cart-snakbar/cart-snakbar.component';
import { FavSnakbarComponent } from './fav-snakbar/fav-snakbar.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  gridColumns = 4;
  durationInSeconds = 5;
  iniLanguage = "English";

  constructor(
    public listItemDialogRef: MatDialogRef<ListComponent>,
    private dialog: MatDialog,
    private _snakBar: MatSnackBar,
    private _snakBarItem: MatSnackBar,
    private _userPreferencesService: UserPreferencesService
  ) {
  }

  get language(): string {
    return this._userPreferencesService.languagePreference;
  }

  changeLanguage(myLanguage){
    console.log('The selected language is : ', myLanguage);
    // this._userPreferencesService.languagePreference = myLanguage;
    if (this._userPreferencesService.languagePreference = myLanguage){
      this.iniLanguage = this._userPreferencesService.languagePreference;
    }else{
      this._userPreferencesService.languagePreference = myLanguage;
      console.log('LANGUAGE CHANGED TO: ', this._userPreferencesService.languagePreference);
      this.iniLanguage = this._userPreferencesService.languagePreference
    }
    }

  set language(myLanguage: string){
    this._userPreferencesService.languagePreference = myLanguage;
  }

  ngOnInit(){
    this._snakBar.open("hit LIKE to shortlist your fav items...", "Close")
  }

  onClose() {
    this.listItemDialogRef.close();
  }

  openItem() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "90%";    
    this.dialog.open(ItemComponent, dialogConfig);
  }

  openSnackBar(SnackBarComp) {
    // this._snakBarItem.open("1 X Pizza has been added to Cart.", "Close");
    if (SnackBarComp == 'fav') {
      this._snakBarItem.openFromComponent(FavSnakbarComponent, {duration: 5000})
    } else {
      this._snakBarItem.openFromComponent(CartSnakbarComponent, {duration: 5000})
    }
  }

}
