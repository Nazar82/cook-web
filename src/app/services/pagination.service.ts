import { Injectable } from '@angular/core';

@Injectable()

export class PaginationService {

    getTotalPages(itemsNumber: number): number {
        return Math.ceil(itemsNumber / 2);
    }

    getPagesNumber(itemsNumber: number, currentPage: number) {
        // If I use let instead of const here, VSC underlines it as a mistake.
        const pages = [];
        const numberOfAllPages = this.getTotalPages(itemsNumber);
        let startPage: number;
        let endPage: number;

        const start = 1;
        const end = 5;
        const minNumberOfPages = 4;
        const numberOfCentralPage = 3;
        const increment = 2;
        const decrement = 2;

        if (numberOfAllPages <= minNumberOfPages) {
            startPage = start;
            endPage = numberOfAllPages;
        } else {
            if (currentPage <= numberOfCentralPage) {
                startPage = start;
                endPage = end;
            } else if (currentPage + increment >= numberOfAllPages) {
                startPage = numberOfAllPages - minNumberOfPages;
                endPage = numberOfAllPages;
            } else {
                startPage = currentPage - decrement;
                endPage = currentPage + increment;
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
       // Tried to use the method You have suggested, but there is some problem with types.
       // return [...Array(numberOfAllPages + 1).keys()].slice(startPage, endPage);
    }
}
