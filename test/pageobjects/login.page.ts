import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    setUserName(username: string) {
        return this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        // await this.btnSubmit.click();`
    }

    setPassword(password: string) {
        return this.inputPassword.setValue(password);
        // await this.btnSubmit.click();
    }

    clickSubmit() {
        return this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();