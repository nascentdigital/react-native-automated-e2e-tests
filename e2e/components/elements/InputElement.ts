import BaseElement, { IElement } from "./BaseElement";

/**
 * Represents an input element on the screen
 * 
 */
export interface IInputElement extends IElement {

  /**
   * Set text into the element
   * @param text Text to set on the input element
   * @param pressReturn Flag to simulate a 'return' press after the text is inputted. Defaults to true
   */
  setText(text: string, pressReturn?: boolean): Promise<void>

  /**
   * Clear the text in the element
   * @param pressReturn Flag to simulate a 'return' press after the text is removed. Defaults to true
   */
  clearText(pressReturn?: boolean):Promise<void>
  
}

export class InputElement extends BaseElement implements IInputElement{
    constructor( element: Detox.NativeElement) {
        super(element)
    }

    async setText(text: string, pressReturn = true): Promise<void> {
      await this.element.typeText(text)
      if (pressReturn) {
        await this.element.tapReturnKey()
      }
    }
    
    async clearText(pressReturn = true): Promise<void> {
        await this.element.clearText()
        if (pressReturn) {
            await this.element.tapReturnKey()
        }
    }
}