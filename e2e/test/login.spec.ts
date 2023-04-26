import { LoginPage } from "../pages"

describe('Login', () => {
  // Create reference for the login page object model
  let loginPage: LoginPage

  beforeAll(async () => {
    console.log('Running before all')
    // Initialize the login page
    loginPage = new LoginPage()

    // Bind the elements
    await loginPage.bind()
  })

  describe('Heading', () => {
    it("Should display the heading", async () => {
      expect(await loginPage.heading.isVisible()).toBe(true)
    })

    it("Should have the text 'Welcome to our app!'", async () => {
      expect (await loginPage.heading.getText()).toEqual('Welcome to our app!')
    })
  })

  describe('Email Input', () => {
    it('Should display the email input', async () => {
      expect (await loginPage.email.isVisible()).toBe(true)
    })

    it('Should allow the user to type into the input', async () => {
      const testString = 'username1'
      await loginPage.email.setText(testString)
      expect(await loginPage.email.getText()).toBe(testString)
      // cleaup input field
      await loginPage.email.clearText()
    })

    it('Should allow the user to type into the input', async () => {
      const testString = 'username1'
      await loginPage.email.setText(testString)
      expect(await loginPage.email.getText()).toBe(testString)
    })
  })

  describe('Password Input', () => {
    it('Should display the email input', async () => {
      expect (await loginPage.password.isVisible()).toBe(true)
    })

    it('Should allow the user to type into the input', async () => {
      const testString = 'test'
      await loginPage.password.setText(testString)
      expect(await loginPage.password.getText()).not.toBe('')
      // cleaup input field
      await loginPage.password.clearText()
    })

    it('Should hide password text by default', async () => {
      const testString = 'test'
      await loginPage.password.setText(testString)
      expect(await loginPage.password.getText()).toBe('••••')
      // cleaup input field
      await loginPage.password.clearText()
    })
  })

  describe('Login button', () => {
    afterEach(async () => {
      // Clear inputs after each test
      await loginPage.email.clearText()
      await loginPage.password.clearText()
    })

    it('Should display the login button', async () => {
      expect(await loginPage.loginButton.isVisible()).toBe(true)
    })

    it('Should display "Please enter an email" when pressed and no email is present', async () => {
      await loginPage.loginButton.press()
      expect(await loginPage.statusText.getText()).toBe('Please enter an email')
    })

    it('Should display "Please enter a password" when pressed and no password is present', async () => {
      await loginPage.email.setText('username')
      await loginPage.loginButton.press()
      expect(await loginPage.statusText.getText()).toBe('Please enter a password')
    })

    it('Should display "Successful login!" when pressed and email and password is present', async () => {
      await loginPage.email.setText('username')
      await loginPage.password.setText('password')

      await loginPage.loginButton.press()
      expect(await loginPage.statusText.getText()).toBe('Successful login!')
    })
  })

})