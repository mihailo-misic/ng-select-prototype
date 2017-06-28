import { Component } from '@angular/core';
import { MockJson } from './mock-json';
import { IOption } from './i-option';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {
    options: IOption[];

    constructor(private mock: MockJson) {
        this.options = mock.MOCK
    }
}
