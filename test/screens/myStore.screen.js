class MyStoreScreen {
    get #myStoreLogo() { return $('~My store') }
    get #myStoreName() { return $('id:toolbar_subtitle') }
    get #produtos() { return $('~Products') }
    get #addProdutos() { return $('~Add products') }

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

}

module.exports = new MyStoreScreen()