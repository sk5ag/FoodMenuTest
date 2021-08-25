import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserPreferencesService } from 'src/app/shared/user-preferences.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  iniLanguage = "English";

  constructor(
    public LanguageDialogRef: MatDialogRef<LanguageComponent>,
    private _userPreferencesService: UserPreferencesService
  ) { }

  ngOnInit(): void {
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

  onClose() {
    this.LanguageDialogRef.close();
  }

  setLanguage(newLang)
  {
    localStorage.setItem('myLang', newLang);
    this._userPreferencesService.languagePreference = newLang;

  }

  setLocation(newLocation)
  {
    localStorage.setItem('myLocation', newLocation);
    this._userPreferencesService.locationPreference = newLocation;

  }

}
