import { Base } from '../base';
import { Navigatable } from '../navigatable';
export class LoginPage extends Base implements Navigatable {
    readonly emeilField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.page.getByRole('button', { name: 'Log in'})
    
    async login(email: string, password: string) {
        // await goto(this);
        await this.emeilField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
    }

    url() {
        return '/login';
    }
}