import { Component,NgModule, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector:"adtable",
    templateUrl: './AdvertisementTable.component.html',
    inputs:['ads'],
    outputs:['deleteAdEvent']
})

export class AdvertisementTable {
   
    ads: Array<{ name:String, category:String, description:String }> = [];
    public deleteAdEvent=new EventEmitter<{ name:String, category:String, description:String }[]>();
    
    deleteAd(ad:{ name:String, category:String, description:String }){
        let index=this.ads.indexOf(ad);
        this.ads.splice(index,1);
        this.deleteAdEvent.emit(this.ads);
    }     
}

@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, input: string) {
        let filterAds:  Array<any> = [];
        if (input.length>2) {   
                input = input.toLowerCase();
                 value.filter(function (ad) {
                    if(ad.name.indexOf(input)>-1)
                    {
                        console.log(ad.name);
                        filterAds.push(ad);
                    }
                })
            return filterAds;
        }
        else
            return value;
            
        
    }
}