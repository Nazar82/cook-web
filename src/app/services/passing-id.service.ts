import { Injectable } from '@angular/core';

@Injectable()
export class PassingIdService {

    id: string;

    constructor() { }

    saveId(id): void {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }
}


