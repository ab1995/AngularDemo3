import { NgModule, EventEmitter }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';
import {AdvertisementTable} from './component/AdvertisementForm/AdvertisementTable.component';
import {FilterPipe} from './component/AdvertisementForm/AdvertisementTable.component';
import {TemplateAdForm} from './component/template-driven/TemplateAdForm.component';
import {mdfAdForm} from './component/model-driven/mdfAdForm.component'
import {Mdf2AdForm} from './component/model-driven2/mdf2AdForm.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, AdvertisementForm , AdvertisementTable, FilterPipe, TemplateAdForm, mdfAdForm,Mdf2AdForm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
