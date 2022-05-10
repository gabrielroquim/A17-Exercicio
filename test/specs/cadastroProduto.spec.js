const adicionaProdutosScreen = require("../screens/adicionaProdutos.screen");
const loginScreen = require("../screens/login.screen");



let urlLoja = 'http://lojaebac.ebaconline.art.br'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let nome = "camisa Batman"
let descricao = "Camisa GG batman vx super"
let valor = "98"
let valor2 = "85"
let sku = Math.floor(Math.random() * 65536)


describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await loginScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        await adicionaProdutosScreen.myProducts()
        await adicionaProdutosScreen.cadastroProduto(nome, descricao)      
        await adicionaProdutosScreen.goPrice()
        await adicionaProdutosScreen.clickPriceProduto()
        await adicionaProdutosScreen.typePrice(valor, valor2)
        await adicionaProdutosScreen.clickInventory()
        await adicionaProdutosScreen.clickSKU(sku)        
        await adicionaProdutosScreen.clickPublish()        
        await adicionaProdutosScreen.inicioStore()



        // vai fazer 
        expect(await adicionaProdutosScreen.myStoreLogoDisplayed()).toBeTruthy()
        expect(await adicionaProdutosScreen.getStoreName()).toEqual('EBAC - Shop')
        expect(await adicionaProdutosScreen.getProductName()).toEqual(nome)
        expect(await adicionaProdutosScreen.getDescriptionProduct()).toEqual(descricao)
        expect(await adicionaProdutosScreen.getTypePrice()).toEqual(valor)
        expect(await adicionaProdutosScreen.getNumeSKU()).toEqual(sku)
        expect(await adicionaProdutosScreen.msgProductPubli()).toEqual('Product published')
    });
})