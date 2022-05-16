class myStoreScreen {
    get #productsLogo() { return $('new UiSelector().text("Products").className("android.view.View")') }
   get #getEbac(){ return $('//android.widget.FrameLayout[@content-desc="My store"])[1]/android.widget.TextView')}
    get #goProducts() { return $('~Products') }
    get #addProducts() { return $('~Add products') }
    get #simplePhysical() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }

    async clickAddProduct() {
        await this.#goProducts.waitForExist({ timeout: 20000 })
        await this.#goProducts.click()
        await this.#addProducts.waitForExist({ timeout: 20000 })
        await this.#addProducts.click()
        await this.#simplePhysical.waitForExist({ timeout: 20000 })
        await this.#simplePhysical.click()
    }

    async productLogos() {
        await this.#productsLogo.waitForExist({ timeout: 20000 })
        return await this.#productsLogo.isDisplayed()
    }

    async ebacShop() {
        await this.#getEbac.waitForExist({ timeout: 20000 })
        return await this.#getEbac.getText()
    }



}

module.exports = new myStoreScreen