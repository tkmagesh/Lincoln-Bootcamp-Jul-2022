import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{

    private getComparer(attrName : string){
        return function(item1 : any, item2 : any) : number {
            if (item1[attrName] < item2[attrName]) return -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
    }

    transform(list: any[], attrName : string) : any[] {
        if (!list || !list.length || !attrName) return list;
        let comparer = this.getComparer(attrName);
        list.sort(comparer);
        return list;
    }

}