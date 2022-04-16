const homeScreen = require("../pages/screens/home.screen");

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()

        setTimeout(() => {
            console.log('abriu')
        }, 10000)
    });
})