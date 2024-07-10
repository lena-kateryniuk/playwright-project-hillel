import { Base } from "../base";

export class Header extends Base {
    readonly menuButton = this.locator('span[class="v-btn__content"]').first();
    readonly userButton = this.locator('[aria-haspopup="menu"]').first();
    readonly bellButton = this.locator('.mdi-bell-outline mdi v-icon notranslate v-theme--light v-icon--size-default');
    readonly userName = this.locator('[class="text-grey-darken-2 body-2"]').first()

}