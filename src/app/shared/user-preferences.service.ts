import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  constructor(){
    console.log('New Instance Created!!')
  }
  languagePreference: string = 'English';
  }
