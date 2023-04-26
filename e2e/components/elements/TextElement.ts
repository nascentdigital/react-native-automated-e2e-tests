import BaseElement, { IElement } from "./BaseElement";

/**
 * Represents a text element on the screen
 * Text element extends base element completely, with no new implementation
 */
export interface ITextElement extends IElement {
}

export class TextElement extends BaseElement implements ITextElement {
    constructor(element: Detox.NativeElement) {
        super(element)
    }
}