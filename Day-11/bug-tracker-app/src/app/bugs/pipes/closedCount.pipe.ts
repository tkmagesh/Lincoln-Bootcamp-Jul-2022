import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "../models/bug.model";


@Pipe({
    name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
    transform(bugs: Bug[]) : number {
        return bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }

}