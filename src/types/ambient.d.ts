declare module 'roosterjs' {
  export type IEditor = { dispose: () => void };
  export function createEditor(el: HTMLElement, options?: any): IEditor;
  export const setHtml: ((editor: any, html: string) => void) | undefined;
  const _default: any;
  export default _default;
}

declare module 'lit' {
  export const html: any;
  export const css: any;
  export class LitElement extends HTMLElement {
    shadowRoot: ShadowRoot | null;
    renderRoot: ShadowRoot;
    disconnectedCallback(): void;
  }
}

declare module 'lit/decorators.js' {
  export function customElement(tagName: string): any;
  export function property(opts?: any): any;
}
