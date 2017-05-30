import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: '<stars>',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() : void {
        this.starWidth = this.rating * 90/5;
    }
    
    onClick(): void {
        debugger;
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}