class AdicProdutosScreen {
    get #simplePhyProduct() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }
    get #nomeProduto() { return $('id=editText') }
    get #addDescricaoProduto() { return $('~Edit product') }
    get #descriptionProduto() { return $('id=visualEditor') }
    get #voltarMenu() { return $('~Navigate up') }
    get #addPriceProduct() { return $('android=new UiSelector().text("Add price").className("android.widget.TextView")') }
    get #priceProduto() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #textRegularPrice() { return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")') }
    get #textSalePrice() { return $('android=new UiSelector().text("Sale price").className("android.widget.EditText")') }
    get #typePriceProduct() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #btnPublish() { return $('id=menu_publish') }


    async clickSimplePhyProduct() {
        await this.#simplePhyProduct.waitForExist({ timeout: 20000 })
        return await this.#simplePhyProduct.click()
    }
    async typeName(nome) { return await this.#nomeProduto.setValue(nome) }
    async clickDescribeYourProduct() {
        await this.#addDescricaoProduto.waitForExist({ timeout: 20000 })
        return await this.#addDescricaoProduto.click()
    }
    async typeDescription(descricao) { 
        await this.#descriptionProduto.waitForExist({ timeout: 20000 })
        return await this.#descriptionProduto.setValue(descricao) }
    async getVoltar() { return await this.#voltarMenu.click() }
    async goPrice() { return await this.#addPriceProduct.click() }
    async clickPriceProduto() { return await this.#priceProduto.click() }
    async typePrice(valor, valor2) {
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textRegularPrice.setValue(valor)
        await this.#textSalePrice.click()
        await this.#textSalePrice.clearValue()
        await this.#textSalePrice(valor2)

    }
    async clickPublish() {
        await this.#btnPublish.waitForExist({ timeout: 20000 })
       return await this.#btnPublish.click()
    }
}
module.exports = new AdicProdutosScreen