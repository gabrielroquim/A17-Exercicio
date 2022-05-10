class LoginScreen {
    get #enterStoreAddress() { return $('id:button_login_store') }
    get #StoreAddress() { return $('android.widget.EditText') }
    get #continue() { return $('id:bottom_button') }
    get #continueStoreAddressCredentials() { return $('id:login_site_creds') }
    get #userName() { return $('android=new UiSelector().text("Username")') }
    get #password() { return $('android=new UiSelector().text("Password")') }
    get #twoFactorPasswordBtn() { return $('id:login_enter_password') }

    async goToLogin() {
        await this.#enterStoreAddress.waitForExist()
        return await this.#enterStoreAddress.click()
    }
    async setStoreAddress(url) { this.#StoreAddress.setValue(url) }
    async continue() {
        await this.#continue.waitForExist()
        return await this.#continue.click()
    }
    async continueCredentials() {
        await this.#continueStoreAddressCredentials.waitForExist({ timeout: 20000 })
        return await this.#continueStoreAddressCredentials.click()
    }
    async login(username, password) {
        await this.#userName.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }
    async goToTwoFactorAuth() {
        await this.#twoFactorPasswordBtn.waitForExist({ timeout: 20000 })
        return await this.#twoFactorPasswordBtn.click()
    }
    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continue.click()
    }



}

module.exports = new LoginScreen()