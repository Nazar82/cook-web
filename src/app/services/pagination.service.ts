import { Injectable } from '@angular/core';

@Injectable()

export class PaginationService {

    getTotalPages(itemsNumber: number): number {
        const recipesPerPage = 4;
        return Math.ceil(itemsNumber / recipesPerPage);
    }

    getPagesNumber(itemsNumber: number, currentPage: number) {

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
            endPage = numberOfAllPages + 1;
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
        return [...<any>Array(numberOfAllPages + 1).keys()].slice(startPage, endPage);
    }
}
