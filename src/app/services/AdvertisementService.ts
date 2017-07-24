import {Injectable} from '@angular/core'

@Injectable()
export class AdService{

    items:String[];
    public adArray: Array<{ name:String, category:String, description:String }> = [];

    constructor(){
        this.items=['Furniture', 'Hardware', 'Mobile' ];
    }

    getCategories(){
        return this.items;
    }

    insertAd(obj:any){
        this.adArray.push(obj);
       // console.log(this.adArray);
    }

    getAdArray()
    {
        return this.adArray;
    }

    deleteAd(ad:any){
        let index=this.adArray.indexOf(ad);
        this.adArray.splice(index,1);
        console.log("After Delete",this.adArray);
    }
}


