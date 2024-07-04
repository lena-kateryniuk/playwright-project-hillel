import { BaseViewPage } from "../base-view-page";
import { Navigatable } from "../navigatable";

export class DriverPage extends BaseViewPage implements Navigatable {
    
    url () {
        return '/users/drivers'
    }

    async waitForLoadState(): Promise<void> {}
} 