import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListComponent } from 'src/app/items/list/list.component';
import { UserPreferencesService } from 'src/app/shared/user-preferences.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  gridColumns = 4;
  showFiller = false;
  iniLanguage = "English";

  constructor(
    private dialog: MatDialog,
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

  ngOnInit(): void {
  }

  openCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    this.dialog.open(ListComponent, dialogConfig);
  }

}
