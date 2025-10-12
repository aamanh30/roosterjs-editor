# roosterjs-editor

> 🐓 A lightweight, framework-agnostic RoosterJS wrapper that works in Angular, React, Vue, Svelte, and plain JS.

## 🚀 Installation

```bash
npm install roosterjs-editor
```

## 🧱 Usage Examples

### Angular

```ts
import 'roosterjs-editor';
```

```html
<rooster-editor
  initialContent="<p>Hello Angular!</p>"
  (contentChange)="onChange($event)"
></rooster-editor>
```

Add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` in your module.

### React

```tsx
import 'roosterjs-editor';

function App() {
  return (
    <rooster-editor
      initialcontent="<p>Hello React!</p>"
      oncontentchange={(e) => console.log(e.detail)}
    ></rooster-editor>
  );
}
```

### Vue

```vue
<template>
  <rooster-editor
    initialcontent="<p>Hello Vue!</p>"
    @contentChange="onContentChange"
  />
</template>

<script setup>
import 'roosterjs-editor';
function onContentChange(e) {
  console.log(e.detail);
}
</script>
```

### Svelte

```svelte
<script>
  import 'roosterjs-editor';
  function handleChange(e) {
    console.log(e.detail);
  }
</script>

<rooster-editor initialContent="<p>Hello Svelte!</p>" on:contentChange={handleChange} />
```

### Vanilla JS

```js
import { RoosterEditorWrapper } from 'roosterjs-editor';

const div = document.getElementById('editor');
const rooster = new RoosterEditorWrapper(div, {
  initialContent: '<p>Hello!</p>',
});
rooster.init();
```

## 🛠️ Build

```bash
npm run build
```

## 📤 Publish

```bash
npm publish --access public
```

## 🧪 Tests

This project uses Vitest for tests and a dedicated test TypeScript config `tsconfig.spec.json` with `strictNullChecks: false` to make DOM-focused tests ergonomical.

- Run the CI-style test (typecheck + tests):

```powershell
npm run test
```

- Run the fast watch mode (developer feedback):

```powershell
npm run test:watch
```

- Run only the test-specific typecheck:

```powershell
npm run typecheck:test
```

Notes:

- The test runner is configured to use `tsconfig.spec.json`. This keeps the main `tsconfig.json` strict while allowing relaxed null-checks in tests.
- Test files live next to their implementation as `*.spec.ts` (for example `src/editor/wrapper.spec.ts`).

## 🎨 Theming & Styling

The `RoosterEditor` web component exposes a set of CSS custom properties you can override to theme the editor. It also exposes the editor body using `part="body"` for light-touch styling.

Examples:

Override variables:

```css
rooster-editor {
  --rooster-border: 1px solid #b32;
  --rooster-padding: 14px;
  --rooster-background: #fff;
  --rooster-color: #222;
}
```

Use ::part:

```css
rooster-editor::part(body) {
  padding: 8px;
  background: #fff;
}
```

## ✅ Summary of key scripts

```bash
npm run build         # build the package
npm run test          # run typecheck (tsconfig.spec.json) then vitest
npm run test:watch    # run vitest in watch mode (fast)
npm run typecheck:test# run tsc with tsconfig.spec.json (no emit)
```
