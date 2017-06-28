import { IOption } from './i-option';

export class MockJson {
    public MOCK: IOption[] = [];

    constructor() {
        for (let i = 1; i <= 60; i++) {
            this.MOCK.push({ value: i.toString(), label: 'Option_' + i, disabled: i % 10 === 0 });
        }
    };

}
