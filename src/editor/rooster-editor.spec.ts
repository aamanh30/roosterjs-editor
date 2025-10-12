import { describe, it, expect, vi } from 'vitest';
import { html, fixture } from '@open-wc/testing';

// Mock roosterjs createEditor
vi.mock('roosterjs', () => ({
  createEditor: (el: HTMLElement) => ({ dispose: () => {} }),
}));

import './rooster-editor';

describe('RoosterEditor component', () => {
  it('should render placeholder', async () => {
    const el = (await fixture(
      html`<rooster-editor></rooster-editor>`
    )) as HTMLElement & { shadowRoot: ShadowRoot };
    const inner = el.shadowRoot.querySelector(
      '[part="body"]'
    ) as HTMLDivElement;
    expect(inner.textContent).toBe('Start typing...');
  });

  it('should dispatch contentChange when input occurs', async () => {
    const el = (await fixture(
      html`<rooster-editor></rooster-editor>`
    )) as HTMLElement & { shadowRoot: ShadowRoot };
    const inner = el.shadowRoot.querySelector(
      '[part="body"]'
    ) as HTMLDivElement;

    let detail: string | null = null;
    el.addEventListener('contentChange', (e: Event) => {
      detail = (e as CustomEvent<string>).detail;
    });

    inner.innerHTML = '<p>abc</p>';
    inner.dispatchEvent(new Event('input'));
    await 0; // allow microtasks to flush
    expect(detail).toBe('<p>abc</p>');
  });

  it('should set initialContent when provided', async () => {
    const htmlContent = '<p>initial</p>';
    const el = (await fixture(
      html`<rooster-editor initialContent="${htmlContent}"></rooster-editor>`
    )) as HTMLElement & { shadowRoot: ShadowRoot };
    const inner = el.shadowRoot.querySelector(
      '[part="body"]'
    ) as HTMLDivElement;
    expect(inner.innerHTML).toBe(htmlContent);
    expect(inner.innerText).toBe('initial');
  });
});
