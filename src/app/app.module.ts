import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgmSelectComponent } from './ngm-select/ngm-select.component';
import { MockJson } from './mock-json';
import { NgmOptionComponent } from './ngm-option/ngm-option.component';

@NgModule({
    declarations: [
        AppComponent,
        NgmSelectComponent,
        NgmOptionComponent,
    ],
    imports     : [
        BrowserModule,
    ],
    providers   : [
        MockJson,
    ],
    bootstrap   : [
        AppComponent,
    ]
})
export class AppModule {
}
