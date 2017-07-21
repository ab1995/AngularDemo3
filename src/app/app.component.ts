import { Component, EventEmitter } from '@angular/core';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';

@Component({
  selector: 'my-app',
  template: `<myForm (postedAdEvent)="adArray.push($event)"></myForm>
            <adtable [ads]="adArray" (deleteAdEvent)="adArray=$event"></adtable>`,
})
export class AppComponent  {
    public adArray: Array<{ name:String, category:String, description:String }> = [];
    
}
