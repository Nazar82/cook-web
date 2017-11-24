import { Injectable } from '@angular/core';

@Injectable()
export class RouterStub {
    navigate(url: string) { return url; }
}

