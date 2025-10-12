import { Meta, StoryObj } from '@storybook/web-components';
import './rooster-editor';
import { RoosterEditorWrapper } from './wrapper';

const meta: Meta = {
  title: 'Editor/Wrapper',
};

export default meta;

export const Default: StoryObj = {
  render: () =>
    '<div id="editor-demo" style="height:300px;border:1px solid #eee"></div>',
  play: async (context: { canvasElement: HTMLElement | Element }) => {
    // attach a wrapper to the demo div
    const demo = context.canvasElement.querySelector('#editor-demo');
    if (!demo || !(demo instanceof HTMLDivElement)) return;
    const wrapper = new RoosterEditorWrapper(demo, {
      initialContent: '<p>From Story</p>',
    });
    wrapper.init();
    // update content after 1s to showcase setContent
    setTimeout(() => wrapper.setContent('<p>Updated via Story</p>'), 1000);
  },
};
