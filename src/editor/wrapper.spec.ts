import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock roosterjs createEditor
vi.mock('roosterjs', () => ({
  createEditor: (el: HTMLElement) => ({
    dispose: () => {} /* other methods if needed */,
  }),
}));

import { RoosterEditorWrapper } from './wrapper';

describe('RoosterEditorWrapper', () => {
  let el: HTMLDivElement;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should init and set initial content', () => {
    const wrapper = new RoosterEditorWrapper(el, {
      initialContent: '<p>hi</p>',
    });
    wrapper.init();
    expect(el.innerHTML).toBe('<p>hi</p>');
  });

  it('should get and set content', () => {
    const wrapper = new RoosterEditorWrapper(el, undefined);
    wrapper.init();
    wrapper.setContent('<b>bold</b>');
    expect(wrapper.getContent()).toBe('<b>bold</b>');
  });

  it('should destroy and not throw when disposing', () => {
    const wrapper = new RoosterEditorWrapper(el, undefined);
    wrapper.init();
    expect(() => wrapper.destroy()).not.toThrow();
  });
});
