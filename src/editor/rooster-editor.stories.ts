import { Meta, StoryObj } from '@storybook/web-components';
import './rooster-editor';

type Args = { initialContent: string };

const meta: Meta<Args> = {
  title: 'Editor/RoosterEditor',
  component: 'rooster-editor',
  argTypes: {
    initialContent: { control: 'text' },
  },
};

export default meta;

export const Default: StoryObj<Args> = {
  args: { initialContent: '<p>Hello Storybook!</p>' },
  render: (args) => `<rooster-editor initialContent='${args.initialContent}'></rooster-editor>`,
};

export const Themed: StoryObj<Args> = {
  args: { initialContent: '<p>Themed editor</p>' },
  render: (args) =>
    `<rooster-editor style="--rooster-border:2px solid #4caf50; --rooster-padding:16px; --rooster-background:#f9fff9; --rooster-color:#0b5;" initialContent='${args.initialContent}'></rooster-editor>`,
};
