// setup for vitest/jsdom

// Minimal DOM setup for Lit element testing
import { beforeAll, afterAll } from 'vitest';

beforeAll(() => {
  // jsdom created by Vitest provides document/window already
});

afterAll(() => {
  // cleanup if needed
});
