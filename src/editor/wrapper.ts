import { IEditor, createEditor } from 'roosterjs';
import { WrapperOptions } from '../models/wrapper-options';

export class RoosterEditorWrapper {
  #editor: IEditor | undefined;

  // Accept HTMLElement types at runtime but prefer HTMLDivElement for content container
  constructor(
    private element: HTMLDivElement | undefined,
    private options: WrapperOptions | undefined
  ) {}

  init() {
    // ensure it's actually a div
    if (!(this.element instanceof HTMLDivElement)) return;
    this.#editor = createEditor(this.element);
    if (!this.options || typeof this.options.initialContent !== 'string')
      return;
    this.element.innerHTML = this.options.initialContent;
  }

  getContent() {
    if (!(this.element instanceof HTMLDivElement)) return '';
    return this.element.innerHTML || '';
  }

  setContent(html: string) {
    if (!(this.element instanceof HTMLDivElement)) return;
    this.element.innerHTML = html;
  }

  destroy() {
    this.#editor?.dispose();
  }
}
