import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'sort'
})
export class SortPipe<T, K extends keyof T> implements PipeTransform{

    private getComparer(attrName : K){
        return function(item1 : T, item2 : T) : number {
            if (item1[attrName] < item2[attrName]) return -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
    }

    transform(list: T[], attrName : K) : T[] {
        if (!list || !list.length || !attrName) return list;
        let comparer = this.getComparer(attrName);
        list.sort(comparer);
        return list;
    }

}