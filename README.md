# use-page-offset

> React hook for tracking browser window offset

[![NPM](https://img.shields.io/npm/v/use-page-offset.svg)](https://www.npmjs.com/package/use-page-offset) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-page-offset
```

## Usage

```tsx
import * as React from "react";

import { usePageOffset } from "use-page-offset";

const Example = () => {
  const offset = usePageOffset();
  return <div>{example}</div>;
};
```

## License

MIT © [garrettbland](https://github.com/garrettbland)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
