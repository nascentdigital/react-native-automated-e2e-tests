import { ButtonElement, IButtonElement, IInputElement, ITextElement, InputElement, LoginSelector, TextElement } from "../components"
import { element , by } from 'detox'

/**
 * Interface modeling the login page
 */
export interface ILoginPage {
  /**
   * Heading element on the login page
   */
  heading: ITextElement

  /**
   * Bind all elements on the login screen to their class properties
   */
  bind(): Promise<ILoginPage>
}

export class LoginPage implements ILoginPage {
  private _heading?: Detox.NativeElement
  private _email?: Detox.NativeElement
  private _password?: Detox.NativeElement
  private _loginButton?: Detox.NativeElement
  private _statusText?: Detox.NativeElement

  constructor() {
  }
 

  async bind(): Promise<ILoginPage> {
    console.log('Binding Login page heading')
    this._heading = element(by.id(LoginSelector.heading))
    this._email = element(by.id(LoginSelector.emailInput))
    this._password = element(by.id(LoginSelector.passwordInput))
    this._loginButton = element(by.id(LoginSelector.loginButton))
    this._statusText = element(by.id(LoginSelector.statusText))

    return this
  }
 
 
  public get heading(): ITextElement {
    if (!this._heading) {
      throw new Error("Attempting to access Login page heading before calling bind()")
    }
 
    return new TextElement(this._heading)
  }

  public get statusText(): ITextElement {
    if (!this._statusText) {
      throw new Error("Attempting to access Login page status text before calling bind()")
    }
 
    return new TextElement(this._statusText)
  }

  public get email(): IInputElement {
    if (!this._email) {
      throw new Error("Attempting to access Login page email input before calling bind()")
    }

    return new InputElement(this._email)
  }

  public get password(): IInputElement {
    if (!this._password) {
      throw new Error("Attempting to access Login page password input before calling bind()")
    }

    return new InputElement(this._password)
  }

  public get loginButton(): IButtonElement {
    if (!this._loginButton) {
      throw new Error("Attempting to access Login page login button before calling bind()")
    }

    return new ButtonElement(this._loginButton)
  }
 }
 