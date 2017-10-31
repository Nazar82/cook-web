import { Injectable } from '@angular/core';

@Injectable()

export class PaginationService {

    getTotalPages(itemsNumber: number): number {
        return Math.ceil(itemsNumber / 2);
    }

    getPagesNumber(itemsNumber: number, currentPage: number) {
        const pages = [];
        const totalPages = this.getTotalPages(itemsNumber);
        let startPage: number;
        let endPage: number;

        const start = 1;
        const end = 5;
        const mimPageNumber = 4;
        const minCurrentPageNumber = 3;
        const step = 2;

        if (totalPages <= mimPageNumber) {
            startPage = start;
            endPage = totalPages;
        } else {
            if (currentPage <= minCurrentPageNumber) {
                startPage = start;
                endPage = end;
            } else if (currentPage + step >= totalPages) {
                startPage = totalPages - mimPageNumber;
                endPage = totalPages;
            } else {
                startPage = currentPage - step;
                endPage = currentPage + step;
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }
}
