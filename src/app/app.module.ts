import { NgModule, EventEmitter }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';
import {AdvertisementTable} from './component/AdvertisementForm/AdvertisementTable.component';
import {FilterPipe} from './component/AdvertisementForm/AdvertisementTable.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AdvertisementForm , AdvertisementTable, FilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
