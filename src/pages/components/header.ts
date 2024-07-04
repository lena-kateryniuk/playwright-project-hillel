import { Base } from "../base";

export class Header extends Base {
    readonly menuButton = this.page.locator('span[class="v-btn__content"]');
    readonly userButton = this.page.locator('[aria-haspopup="menu"]');
    readonly bellButton = this.page.locator('.mdi-bell-outline mdi v-icon notranslate v-theme--light v-icon--size-default');
}