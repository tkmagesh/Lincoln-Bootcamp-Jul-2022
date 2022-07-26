import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'sort'
})
export class SortPipe<T, K extends keyof T> implements PipeTransform{

    private getComparer(attrName : K, isDesc : boolean){
        let sortOrder = isDesc ? -1 : 1;
        return function(item1 : T, item2 : T) : number {
            if (item1[attrName] < item2[attrName]) return -1 * sortOrder;
            if (item1[attrName] > item2[attrName]) return 1 * sortOrder;
            return 0;
        }
    }

    transform(list: T[], attrName : K, desc : boolean = false) : T[] {
        if (!list || !list.length || !attrName) return list;
        let comparer = this.getComparer(attrName, desc);
        list.sort(comparer);
        return list;
    }

}