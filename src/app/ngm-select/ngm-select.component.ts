import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { IOption } from '../i-option';

@Component({
    selector   : 'app-ngm-select',
    templateUrl: './ngm-select.component.html',
    styleUrls  : ['./ngm-select.component.scss'],
})
export class NgmSelectComponent implements OnInit {
    @Input() options: IOption[] = [];
    @Input() multiple = false;

    opened = true;
    smartOptions: IOption[] = [];
    selected: IOption[] = [];

    count = 15;

    constructor(private eRef: ElementRef) { }

    ngOnInit() {
        this.conjureSmartOptions();
    }

    @HostListener('document:click', ['$event.target']) onClick(target) {
        if (!this.eRef.nativeElement.contains(target)) {
            this.close()
        }
    };

    optionSelected(value) {
        if (this.multiple) {
            const index = this.selected.indexOf(value);

            if (index > -1) {
                this.selected.splice(index, 1)
            } else {
                this.selected.push(value);
            }
        } else {
            this.selected = [value];
            console.log(this.options.find(item => item.value === value));
            this.close()
        }
    }

    parseSelected(): string {
        if (this.selected.length > 0) {
            if (this.multiple) {
                // TODO Implement multiple logic
            } else {
                const found = this.options.find(item => item.value === this.selected[0].toString());
                if (found) {
                    return found.label;
                }
            }
        }
        return '';
    }

    conjureSmartOptions() {
        this.smartOptions = this.options.slice(0, this.count);
    }

    toggle() {
        this.opened = !this.opened
    }

    open() {
        this.opened = true
    }

    close() {
        this.opened = false
    }

    calcPosition(event) {
        const boxHeight = 40;
        const position = event.target.scrollTop;

        if (this.count * boxHeight - 400 < position) {
            this.count += 15;
            this.conjureSmartOptions();
        }
    }
}
