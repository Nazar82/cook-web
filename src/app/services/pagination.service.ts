import { Injectable } from '@angular/core';

@Injectable()

export class PaginationService {

    getTotalPages(recipesNumber: number): number {
        return Math.ceil(recipesNumber / 2);
    }

    getPagesNumber(recipesNumber: number, currentPage: number) {
        const pages = [];
        const totalPages = this.getTotalPages(recipesNumber);
        let startPage = 1;
        let endPage: number;

        if (totalPages <= 4) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }
}
