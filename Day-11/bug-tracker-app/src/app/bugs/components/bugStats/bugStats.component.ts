import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Bug } from "../../models/bug.model";

@Component({
    selector : 'app-bug-stats',
    templateUrl : 'bugStats.component.html',
    styleUrls : ['bugStats.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

    @Input()
    data : Bug[] = []

    getCurrentTime() : string {
        return Date();
    }
}