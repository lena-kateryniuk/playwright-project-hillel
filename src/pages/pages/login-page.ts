import { expect } from 'playwright/test';
import { User } from '../../helpers/users';
import { Base } from '../base';
import { Navigatable } from '../navigatable';
export class LoginPage extends Base implements Navigatable {
    readonly emeilField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.page.getByRole('button', { name: 'Log in'})
    
    async login(user: User) {
        await this.emeilField.fill(user.email);
        await this.passwordField.fill(user.password);
        await this.loginButton.click();
    }
    async validate() {
        await expect(this.locator('[class="login-form__title text-h5 text-center font-weight-medium mb-2"]'))
                         .toHaveText('Welcome to Omni-dispatch TMS');
        await expect(this.emeilField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
      }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
    }

    url() {
        return '/login';
    }
}