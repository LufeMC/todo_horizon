import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module"
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  
import { TdListComponent } from './td-list/td-list.component';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';
import { ItemComponent } from './td-list/item/item.component'
import { ItemAddComponent } from './button-submit/item-add/item-add.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { LogonComponent } from './header/logon/logon.component';


@NgModule({
  declarations: [
    AppComponent,
    TdListComponent,
    ButtonSubmitComponent,
    ItemComponent,
    ItemAddComponent,
    HeaderComponent,
    LoginComponent,
    LogonComponent
  ],
  entryComponents: [ItemComponent, ItemAddComponent, LoginComponent, LogonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
