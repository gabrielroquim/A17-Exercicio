class AdicProdutosScreen {   
    get #simplePhyProduct() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }
    get #nomeProduto() { return $('id=editText') }
    get #addDescricaoProduto() { return $('///android.widget.ImageView[@content-desc="Edit product"])[1]') }
    get #descriptionProduto() { return $('id=visualEditor') }
    get #voltarMenu() { return $('~Navigate up') }
    get #addPriceProduct() { return $('android=new UiSelector().text("Add price").className("android.widget.TextView")') }
    get #priceProduto() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #textRegularPrice() { return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")') }
    get #typePriceProduct() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #btnPublish() { return $('id=menu_publish') }

   
    async clickSimplePhyProduct() {
        await this.#simplePhyProduct.waitForExist({ timeout: 2000 })
        return await this.#simplePhyProduct.click()
    }
    async typeName(nome) { return await this.#nomeProduto.setValue(nome) }
    async clickDescribeYourProduct() { return await this.#addDescricaoProduto.click() }
    async typeDescription(descricao) { return await this.#descriptionProduto.setValue(descricao) }
    async getVoltar() { return await this.#voltarMenu.click() }
    async goPrice() { return await this.#addPriceProduct.click() }
    async clickPriceProduto() { return await this.#priceProduto.click() }
    async typePrice(valor) {
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        return await this.#textRegularPrice.setValue(valor)
    }
    async clickPublish() {
        await this.#btnPublish.click()
    }
}
module.exports = new AdicProdutosScreen