import { Base } from './base';

export class LoginPage extends Base {
    readonly emeilField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.page.getByRole('button', { name: 'Log in'})
    // readonly validationMessage = this.page.
    
    async login(email: string, password: string) {
        await this.page.goto('/login');

        await this.emeilField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        
    }
}