import { Injectable } from '@angular/core';

@Injectable()
export class PassingTypeService {

    type: string;

    constructor() { }

    saveType(type): void {
        this.type = type;
    }

    getType(): string {
        return this.type;
    }
}
