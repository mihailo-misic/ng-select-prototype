import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector   : 'app-ngm-option',
    templateUrl: './ngm-option.component.html',
    styleUrls  : ['./ngm-option.component.scss']
})
export class NgmOptionComponent implements OnInit {
    @Input() value = '';
    @Input() label = '';
    @Input() disabled: boolean = null;
    @Input() selectedArray: number[] = [];

    @Output() onSelect = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    select(value, disabled) {
        if (!disabled) {
            this.onSelect.emit(value)
        }
    }

    checkSelected(value) {
        return this.selectedArray.indexOf(value) > -1;
    }
}
