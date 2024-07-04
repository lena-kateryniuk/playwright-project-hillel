import { BaseViewPage } from "../base-view-page";
import { Navigatable } from "../navigatable";

export class TruckPage extends BaseViewPage implements Navigatable {
    url () {
        return '/fleets/trucks'
    }
    
    async waitForLoadState(): Promise<void> {
        
    }
}