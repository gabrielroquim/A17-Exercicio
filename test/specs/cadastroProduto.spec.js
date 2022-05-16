const adicionaProdutosScreen = require("../screens/adicionaProdutos.screen");
const loginScreen = require("../screens/login.screen");

var faker = require('faker-br');
const productsScreen = require("../screens/products.screen");


let urlLoja = 'http://lojaebac.ebaconline.art.br'
let username= 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "camisa Ciclop"
let descricao = faker.commerce.productAdjective()
let valor = faker.commerce.price()
let valor2 = faker.commerce.price() / 2
let sku = Math.floor(Math.random() * 65536)


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await loginScreen.goToLogin(urlLoja, username, password)
      //  expect(await loginScreen.getTextURL().toEqual(urlLoja))        
        await productsScreen.clickAddProduct.click()
        expect (await productsScreen.productLogos().toEqual("Products"))              
        await adicionaProdutosScreen.cadastroProduto(nome, descricao)
        expect (await adicionaProdutosScreen.textMyProducts().toEqual("Products")) 
        await adicionaProdutosScreen.typePrice(valor, valor2)
        await adicionaProdutosScreen.clickInventory(sku)   
        await adicionaProdutosScreen.clickPublish()
        await adicionaProdutosScreen.inicioStore()


        // vai fazer as comparações      
        expect(await loginScreen.getTextURL().toEqual(urlLoja))
        expect(await adicionaProdutosScreen.getProductName()).toEqual(nome)
        expect(await adicionaProdutosScreen.getDescriptionProduct()).toEqual(descricao)
        expect(await adicionaProdutosScreen.getTypePrice()).toEqual(valor)
        expect(await adicionaProdutosScreen.getNumeSKU()).toEqual(sku)
        expect(await adicionaProdutosScreen.msgProductPubli()).toEqual('Product published')
        expect(await adicionaProdutosScreen.msgLogout()).toEqual('LOG OUT')

    });
})