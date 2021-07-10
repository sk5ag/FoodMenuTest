import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './material/app-material/app-material.module';
import { SponserComponentComponent } from './sponser/sponser-component/sponser-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './categories/category/category.component';
import { HeaderComponent } from './headerfooter/header/header.component';
import { FooterComponent } from './headerfooter/footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './items/list/list.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { AddCollectionComponent } from './items/add-collection/add-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    SponserComponentComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    ListComponent,
    AddItemComponent,
    AddCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
