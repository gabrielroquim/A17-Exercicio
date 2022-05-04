const adicionaProdutosScreen = require("../screens/adicionaProdutos.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");


let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "camisa sonic 2"
let descricao = "Novo filme do Sonic"
let valor = "98"


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
        await adicionaProdutosScreen.typePrice(valor)
        await adicionaProdutosScreen.clickPublish()

        expect(await myStoreScreen.myStoreLogoDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

    }
    );
})