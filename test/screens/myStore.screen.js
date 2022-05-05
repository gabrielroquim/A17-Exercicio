class MyStoreScreen {
    get #myStoreLogo() { return $('~My store') }
    get #myStoreName() { return $('id:toolbar_subtitle') }
    get #produtos() { return $('~Products') }
    get #addProdutos() { return $('~Add products') }
    get #simplePhysical() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }

    async myStoreLogoDisplayed() {
        await this.#myStoreLogo.waitForExist({ timeout: 20000 })
        return await this.#myStoreLogo.isDisplayed()
    }
    async getStoreName() {
        await this.#myStoreName.waitForExist({ timeout: 20000 })
        return await this.#myStoreName.getText()
    }
    async clickAddProdutos() {
        await this.#produtos.waitForExist({ timeout: 20000 })
        return await this.#produtos.click()
    }
    async popup() {
        await this.#addProdutos.waitForExist({ timeout: 20000 })
        return await this.#addProdutos.click()
    }

    async store() {
        await this.#simplePhysical.waitForExist({ timeout: 20000 })
        return await this.#simplePhysical.click()
    }

}

module.exports = new MyStoreScreen()