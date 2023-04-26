import BaseElement, { IElement } from "./BaseElement";

/**
 * Represents a button element on the screen
 * Button element extends base element completely, with no new implementation
 */
export interface IButtonElement extends IElement {
}

export class ButtonElement extends BaseElement implements IButtonElement {
    constructor(element: Detox.NativeElement) {
        super(element)
    }
}