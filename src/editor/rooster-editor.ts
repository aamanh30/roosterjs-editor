import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createEditor, IEditor } from 'roosterjs';

@customElement('rooster-editor')
export class RoosterEditor extends LitElement {
  @property({ type: String }) initialContent = '';
  @property({ type: String }) placeholder = 'Start typing...';
  @property({ type: String, reflect: true }) id = 'editor';
  #editor: IEditor | undefined;

  static styles = css`
    :host {
      /* Themeable CSS custom properties with sensible defaults */
      --rooster-border: 0.0625rem solid #ccc; /* 1px */
      --rooster-padding: 0.625rem; /* 10px */
      --rooster-min-height: 12.5rem; /* 200px */
      --rooster-border-radius: 0.5rem; /* 8px */
      --rooster-font-family: system-ui, sans-serif;
      display: block;
      border: var(--rooster-border);
      padding: var(--rooster-padding);
      min-height: var(--rooster-min-height);
      border-radius: var(--rooster-border-radius);
      font-family: var(--rooster-font-family);
    }

    /* Editor body (part exposed for light-touch styling) */
    [part='body'] {
      min-height: calc(var(--rooster-min-height) - 2.5rem); /* 40px */
      outline: none;
      background: var(--rooster-background, transparent);
      color: var(--rooster-color, inherit);
      line-height: var(--rooster-line-height, 1.4);
    }

    [part='body']:focus {
      box-shadow: var(
        --rooster-focus-shadow,
        inset 0 0 0 0.125rem rgba(0, 120, 212, 0.08) /* 2px */
      );
    }
  `;

  firstUpdated() {
    const editor = this.renderRoot.querySelector(`#${this.id}`);
    if (!(editor instanceof HTMLDivElement)) return;

    editor.setAttribute('contenteditable', 'true');

    // Create editor attaching to the div. We avoid using non-exported
    // helpers/plugins and rely on the element's innerHTML for
    // initial/get/set content.
    this.#editor = createEditor(editor);

    editor.innerHTML = this.initialContent || editor.innerHTML;

    editor.addEventListener('input', () =>
      this.dispatchEvent(
        new CustomEvent('contentChange', { detail: editor.innerHTML })
      )
    );
  }

  render() {
    // The component `id` property is guaranteed to be set, so we
    // can bind it directly here. Keep `part="body"` for styling.
    return html`<div id="${this.id}" part="body">${this.placeholder}</div>`;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#editor?.dispose();
  }
}
