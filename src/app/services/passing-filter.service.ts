import { Injectable } from '@angular/core';

@Injectable()
export class PassingFilterService {

    type: string;

    constructor() { }

    saveFilter(type): void {
        this.type = type;
    }

    getFilter(): string {
        return this.type;
    }
}
