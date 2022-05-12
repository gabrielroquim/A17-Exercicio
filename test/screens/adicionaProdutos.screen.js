class AdicProdutosScreen {
    //get #simplePhyProduct() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }   
    get #products() { return $('~Products') }
    get #addBtnMais() { return $('~Add products') }
    get #simplePhysical() { return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') }
    get #getProductTitle() { return $('id=editText') }
    get #getDescribeProduct() { return $('~Edit product') }
    get #descriptionProduct() { return $('id=visualEditor') }
    get #voltarMenu() { return $('~Navigate up') }
    get #addPriceProduct() { return $('android=new UiSelector().text("Add price").className("android.widget.TextView")') }
    get #priceProduto() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #textRegularPrice() { return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")') }
    get #textSalePrice() { return $('android=new UiSelector().text("Sale price").className("android.widget.EditText")') }
    get #typePriceProduct() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }    
    get #goInventory() { return $('android= new UiSelector().className("android.view.ViewGroup").index(2)') }
    get #typeSKU() { return $('android=new UiSelector().className("android.widget.EditText").text("SKU")') }
    get #btnPublish() { return $('id=menu_publish') }
    get #iconMenu() { return $('id=moreMenu') }
    get #msgPublish() { return $('id=snackbar_text') }
    get #settings() { return $('~Settings') }
    get #logout() { return $('id=btn_option_logout') }
    get #goLogout() { return $('//android.widget.Button[2]') }


    async myProducts() {
        await this.#products.waitForExist({ timeout: 20000 })
        await this.#products.click()
        await this.#addBtnMais.waitForExist({ timeout: 20000 })
        await this.#addBtnMais.click()
        await this.#simplePhysical.waitForExist({ timeout: 20000 })
        await this.#simplePhysical.click()
    }
    async cadastroProduto(nome, descricao) {
        await this.#getProductTitle.waitForExist({ timeout: 20000 })
        await this.#getProductTitle.setValue(nome)
        await this.#getDescribeProduct.waitForExist({ timeout: 20000 })
        await this.#getDescribeProduct.click()
        await this.#descriptionProduct.waitForExist({ timeout: 20000 })
        await this.#descriptionProduct.setValue(descricao)
        await this.#voltarMenu.click()
    }
    async goPrice() { return await this.#addPriceProduct.click() }
    async clickPriceProduto() { return await this.#priceProduto.click() }
    async typePrice(valor, valor2) {
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textRegularPrice.setValue(valor)
        await this.#typePriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textSalePrice.setValue(valor2)
        await this.#voltarMenu.click()
    }
    async clickInventory() {
        await this.#goInventory.waitForExist({ timeout: 20000 })
        return await this.#goInventory.click()
    }
    async clickSKU(sku) {
        await this.#typeSKU.waitForExist({ timeout: 20000 })
        await this.#typeSKU.click()
        await this.#typeSKU.setValue(sku)
        await this.#voltarMenu.click()
    }
    async clickPublish() {
        await this.#btnPublish.waitForExist({ timeout: 20000 })
        await this.#btnPublish.click()
        await this.#voltarMenu.waitForExist({ timeout: 20000 })
        await this.#voltarMenu.click()
    }
    async inicioStore() {
        await this.#iconMenu.waitForExist({ timeout: 20000 })
        await this.#iconMenu.click()
        await this.#settings.waitForExist({ timeout: 20000 })
        await this.#settings.click()
        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: '~btn_option_logout' })
        await this.#logout.click()
        await this.#goLogout.waitForExist({ timeout: 20000 })
        await this.#goLogout.click()
    }



    // Testes de validações     

    async getProductName() {
        await this.#getProductTitle.waitForExist({ timeout: 20000 })
        return await this.#getProductTitle.getText()
    }

    async getDescriptionProduct() {
        await this.#descriptionProduct.waitForExist({ timeout: 20000 })
        return await this.#descriptionProduct.getText()
    }

    async getTypePrice() {
        await this.#textRegularPrice.waitForExist({ timeout: 20000 })
        return await this.#textRegularPrice.getText()
    }

    async getNumeSKU() {
        await this.#typeSKU.waitForExist({ timeout: 20000 })
        return await this.#typeSKU.getText()
    }
    async msgProductPubli() {
        await this.#msgPublish.waitForExist()
        return await this.#msgPublish.getText()
    }

    async msgSettings() {
        await this.#settings.waitForExist({ timeout: 20000 })
        return await this.#settings.get
    }

    async msgLogout() {
        await this.#goLogout.waitForExist({ timeout: 20000 })
        return await this.#goLogout.getText()
    }
}



module.exports = new AdicProdutosScreen