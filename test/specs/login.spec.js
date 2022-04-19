const homeScreen = require("../pages/screens/home.screen");
const loginScreen = require("../pages/screens/login.screen");

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.continue()
        await loginScreen.login('gerente','GD*peToHNJ1#c$sgk08EaYJQ')

      
        }
    );
})