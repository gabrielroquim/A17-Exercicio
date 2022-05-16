var faker = require('faker-br');
const adicProdutosScreen = require('../screens/adicProdutos.screen');
const loginScreen = require('../screens/login.screen');
const myStoreScreen = require('../screens/myStore.screen');


let urlLoja = 'http://lojaebac.ebaconline.art.br'
let username = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "camisa Ciclop"
let descricao = faker.commerce.productAdjective()
let valor = faker.commerce.price()
let valor2 = faker.commerce.price() / 2
let sku = Math.floor(Math.random() * 65536)


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await loginScreen.goToLogin(urlLoja, username, password)
        await myStoreScreen.clickAddProduct()
        await adicProdutosScreen.cadastroProduto(nome, descricao)       
        await adicProdutosScreen.typePrice(valor, valor2)
        await adicProdutosScreen.clickInventory(sku)
        await adicProdutosScreen.clickPublish()
        await adicProdutosScreen.inicioStore()


        // vai fazer as comparações      
        expect(await loginScreen.getTextURL().toEqual(urlLoja))
        expect(await myStore.productLogos().toEqual("Products"))
        expect(await myStore.ebacShop().toEqual("EBAC - Shop"))
        expect(await adicProdutosScreen.getProductName()).toEqual(nome)
        expect(await adicProdutosScreen.getDescriptionProduct()).toEqual(descricao)
        expect(await adicProdutosScreen.getTypePrice()).toEqual(valor)
        expect(await adicProdutosScreen.getNumeSKU()).toEqual(sku)
        expect(await adicProdutosScreen.msgProductPubli()).toEqual('Product published')
        expect(await adicProdutosScreen.msgLogout()).toEqual('LOG OUT')

    });
})