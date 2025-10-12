import { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Temporarily disable addons to avoid runtime errors from incompatible addon APIs
  addons: [],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['public'],
  docs: {} as any,
};

export default config;
