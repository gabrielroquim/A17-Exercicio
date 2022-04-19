class LoginScreen {
    get #StoreAddress() { return $('android.widget.EditText') }

    get #continue() { return $('id:bottom_button') }

    get #continueStoreAddressCredentials() { return $('id:login_site_creds') }

    get #userName() { return $('android=new UiSelector().text("Username")') }

    get #password() { return $('android=new UiSelector().text("Password")') }


    async setStoreAddress(url) {
        this.#StoreAddress.setValue(url)
    }

    async continue() {
        await this.#continue.click()
    }

    async continue() {
        await this.#continueStoreAddressCredentials.click()
    }

    async login(username, password){
        await this.#userName.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }


}

module.exports = new LoginScreen