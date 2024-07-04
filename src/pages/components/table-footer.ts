import { Base } from "../base";

export class TableFooter extends Base {
    readonly tableFooter = this.page.locator('.v-data-table-footer');
    readonly itemsPerPage = this.tableFooter.locator('.v-data-table-footer__items-per-page');
    readonly pages = this.tableFooter.locator('.v-data-table-footer__info');
    readonly pagination = this.tableFooter.locator('.v-pagination__list');
    readonly paginationPrev = this.pagination.locator('[data-test="v-pagination-prev"]');
    readonly paginationNext = this.pagination.locator('[data-test="v-pagination-next"]');
}