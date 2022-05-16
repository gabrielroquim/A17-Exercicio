class productsScreen {
    get #productsLogo() { return $('new UiSelector().text("Products").className("android.view.View")') }
    get #addBtnMaist() { return $('~Add products') }
    get #simplePhysical() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }

    async clickAddProduct() {
        await this.#addBtnMaist.waitForExist({ timeout: 20000 })
        await this.#addBtnMaist.click()
        await this.#simplePhysical.waitForExist({ timeout: 20000 })
        await this.#simplePhysical.click()
    }

    async productLogos() {
        await this.#productsLogo.waitForExist()
        return await this.#productsLogo.isDisplayed()
    }



}

module.exports = new productsScreen