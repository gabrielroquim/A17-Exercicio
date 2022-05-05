const adicionaProdutosScreen = require("../screens/adicionaProdutos.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");


let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "camisa sonic 356"
let descricao = "Novo filme do Sonic"
let valor = "98"
let valor2 = "85"
let sku = Math.floor(Math.random()*65536)


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        await myStoreScreen.clickAddProdutos()
        await myStoreScreen.popup()
        await adicionaProdutosScreen.clickSimplePhyProduct()
        await adicionaProdutosScreen.typeName(nome)
        await adicionaProdutosScreen.clickDescribeYourProduct()
        await adicionaProdutosScreen.typeDescription(descricao)
        await adicionaProdutosScreen.getVoltar()
        await adicionaProdutosScreen.goPrice()
        await adicionaProdutosScreen.clickPriceProduto()
        await adicionaProdutosScreen.typePrice(valor, valor2)
        await adicionaProdutosScreen.clickInventory()
        await adicionaProdutosScreen.clickSKU(sku)
        await adicionaProdutosScreen.clickPublish()
        await myStoreScreen.store()


        // vai fazer 
        expect(await myStoreScreen.myStoreLogoDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
        expect(await adicionaProdutosScreen.getProductName()).toEqual(nome)
        expect(await adicionaProdutosScreen.getDescriptionProduct()).toEqual(descricao)
        expect(await adicionaProdutosScreen.getTypePrice()).toEqual(valor)
    }
    );
})