import { expect } from 'detox'

export enum QueryAttribute {
    SCENE_ID = 'data-scene-id',
    COMPONENT_ID = 'data-scene-comp'
}

/**
 * Interface for a base element on any given UI screen
 */
export interface IElement {
    /**
     * Method for checking element visibility on the screen
     */
    isVisible(): Promise<boolean>

    /**
     * Simulate tapping on any given element
     */
    press(): Promise<void>

    /**
     * Simulate long pressing on a given element
     */
    longPress(): Promise<void>

    /**
     * retrieve text content of the element
     */
    getText(): Promise<string | null>
}

export default class BaseElement implements IElement {
    private _element: Detox.NativeElement
    constructor(element: Detox.NativeElement) {
        this._element = element
    }

    protected get element(): Detox.NativeElement {
        return this._element
    }

    /**
     * Checks if current element  is visible on the UI
     * @returns {Promise<boolean>} True if visible, else false
     */
    public async isVisible(): Promise<boolean> {
        try {
            await expect(this._element).toBeVisible()
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    /**
     * Simulate tapping on any given element
     */
    public async press(): Promise<void> {
        await this._element.tap()
    }

    /**
     * Simulate long pressing on a given element
     */
    public async longPress(): Promise<void> {
        await this._element.longPress()
    }

    /**
     * retrieve text content of the element
     * @returns {Promise<string | null} 
     */
    public async getText(): Promise<string | null> {
        const attr: any = await this.element.getAttributes()

        return attr.value ?? attr.text ?? attr.label ?? null
    }

}