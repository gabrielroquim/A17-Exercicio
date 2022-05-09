class AdicProdutosScreen {
    //get #simplePhyProduct() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }
    get #nomeProduto() { return $('id=editText') }
    get #addDescricaoProduto() { return $('~Edit product') }
    get #descriptionProduto() { return $('id=visualEditor') }
    get #voltarMenu() { return $('~Navigate up') }
    get #addPriceProduct() { return $('android=new UiSelector().text("Add price").className("android.widget.TextView")') }
    get #priceProduto() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #textRegularPrice() { return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")') }
    get #textSalePrice() { return $('android=new UiSelector().text("Sale price").className("android.widget.EditText")') }
    get #typePriceProduct() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #voltarProduct() { return $('~Navigate up') }
    get #goInventory() { return $('android= new UiSelector().className("android.view.ViewGroup").index(2)') }
    get #typeSKU() { return $('android=new UiSelector().className("android.widget.EditText").text("SKU")') }
    get #voltarProductInventory() { return $('~Navigate up') }
    get #btnPublish() { return $('id=menu_publish') }
    



   // async clickSimplePhyProduct() {
        //await this.#simplePhyProduct.waitForExist({ timeout: 20000 })
       // return await this.#simplePhyProduct.click()
 //   }
    async typeName(nome) { return await this.#nomeProduto.setValue(nome) }
    async clickDescribeYourProduct() {
        await this.#addDescricaoProduto.waitForExist({ timeout: 20000 })
        return await this.#addDescricaoProduto.click()
    }
    async typeDescription(descricao) {
        await this.#descriptionProduto.waitForExist({ timeout: 20000 })
        return await this.#descriptionProduto.setValue(descricao)
    }
    async getVoltar() { return await this.#voltarMenu.click() }
    async goPrice() { return await this.#addPriceProduct.click() }
    async clickPriceProduto() { return await this.#priceProduto.click() }
    async typePrice(valor, valor2) {
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textRegularPrice.setValue(valor)
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textSalePrice.setValue(valor2)
        await this.#voltarProduct.click()
    }

    async clickInventory() {
        await this.#goInventory.waitForExist({ timeout: 20000 })
        return await this.#goInventory.click()
    }
    async clickSKU(sku) {
        await this.#typeSKU.waitForExist({ timeout: 20000 })
        await this.#typeSKU.click()
        return await this.#typeSKU.setValue(sku)
    }

    async clickVoltarProduct() {
        await this.#voltarProductInventory.waitForExist()
        return await this.#voltarProductInventory.click()
    }


    async clickPublish() {
        await this.#btnPublish.waitForExist({ timeout: 20000 })
        return await this.#btnPublish.click()
    }

  

    // Testes de validações
    async getProductName() {
        await this.#nomeProduto.waitForExist({ timeout: 20000 })
        return await this.#nomeProduto.getText()
    }

    async getDescriptionProduct() {
        await this.#addDescricaoProduto.waitForExist({ timeout: 20000 })
        return await this.#addDescricaoProduto.getText()
    }

    async getTypePrice() {
        await this.#textRegularPrice.waitForExist({ timeout: 20000 })
        return await this.#textRegularPrice.getText({ timeout: 20000 })
    }

    async getNumeSKU() {
        await this.#typeSKU.waitForExist({ timeout: 20000 })
        return await this.#typeSKU.getText({ timeout: 20000 })
    }


}
module.exports = new AdicProdutosScreen